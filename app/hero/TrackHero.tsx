"use client";

import { useEffect, useRef } from "react";

import track from "./bathurst.json";

/** Seconds a lap takes on screen: 2:08, a real Bathurst lap. */
const LAP_SECONDS = 128;
/** Bathurst climbs 177 m over a 2 km wide circuit; tripled so the mountain reads at a glance. */
const ELEVATION_SCALE = 3;
/** Camera tilt from looking straight down, in radians. */
const TILT = 0.8;
/** How fast the circuit turns, in radians per second. */
const ORBIT = 0.03;
/** Seconds of running each car's trail covers, in simulated time. */
const TRAIL = 1.4;
/** Gaps behind the leader, in simulated seconds, one per car. */
const GAPS = [0, 3.2, 6.8, 10.1];

const INK = "236, 238, 233";

/** "#e2231a" to "226, 35, 26", for building rgba() strings. */
function channels(hex: string) {
  const value = parseInt(hex.slice(1), 16);
  return `${value >> 16}, ${(value >> 8) & 255}, ${value & 255}`;
}

const points = track.points;
const times = track.time;
const count = points.length;
const lapTime = times[count];
/** Simulated seconds per real second, so the simulated lap runs in LAP_SECONDS. */
const PLAYBACK = lapTime / LAP_SECONDS;

/** The start line is 150.6 m into the lap: the cars set off from it on load. */
const START_LINE = 150.6;
const startIndex = Math.floor(START_LINE / track.step);
const startTime =
  times[startIndex] +
  ((START_LINE - startIndex * track.step) / track.step) * (times[startIndex + 1] - times[startIndex]);

// Centre the circuit on its middle so it turns in place.
const centreX = points.reduce((sum, p) => sum + p[0], 0) / count;
const centreY = points.reduce((sum, p) => sum + p[1], 0) / count;
const maxHeight = Math.max(...points.map((p) => p[2])) * ELEVATION_SCALE;
const xs = new Float32Array(count);
const ys = new Float32Array(count);
const zs = new Float32Array(count);
let radius = 0;
points.forEach(([x, y, z], i) => {
  xs[i] = x - centreX;
  ys[i] = y - centreY;
  zs[i] = z * ELEVATION_SCALE - maxHeight / 2;
  radius = Math.max(radius, Math.hypot(xs[i], ys[i]));
});

/** Sample index and fraction towards the next sample at a lap time. */
function locate(time: number) {
  const t = ((time % lapTime) + lapTime) % lapTime;
  let low = 0;
  let high = count;
  while (high - low > 1) {
    const mid = (low + high) >> 1;
    if (times[mid] <= t) low = mid;
    else high = mid;
  }
  return { index: low, fraction: (t - times[low]) / (times[low + 1] - times[low]) };
}

// Corner labels mark the apex, but straight labels mark the middle of the straight. So a corner's
// name covers its braking zone and exit, and the road between corners takes the straight's name.
const CORNER_BEFORE = 150;
const CORNER_AFTER = 80;
const sections = track.sections.map((section) => ({ ...section, straight: section.name.endsWith("Straight") }));

/** Metres from a section label to a distance along the lap, between -length/2 and length/2. */
function offsetFrom(distance: number, label: number) {
  const length = track.length;
  return ((((distance - label) % length) + length * 1.5) % length) - length / 2;
}

function sectionAt(distance: number) {
  let corner: string | null = null;
  let closest = Infinity;
  for (const section of sections) {
    if (section.straight) continue;
    const offset = offsetFrom(distance, section.distance);
    if (offset >= -CORNER_BEFORE && offset <= CORNER_AFTER && Math.abs(offset) < closest) {
      corner = section.name;
      closest = Math.abs(offset);
    }
  }
  if (corner) return corner;

  // Between corners: the straight here, or the nearer corner when there is no straight.
  let previous = sections[sections.length - 1];
  let next = sections[0];
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].distance > distance) {
      next = sections[i];
      previous = sections[(i + sections.length - 1) % sections.length];
      break;
    }
  }
  if (previous.straight) return previous.name;
  if (next.straight) return next.name;
  return Math.abs(offsetFrom(distance, previous.distance)) <= Math.abs(offsetFrom(distance, next.distance))
    ? previous.name
    : next.name;
}

/** One car per project, in its accent colour, led by the first. */
export default function TrackHero({ colours }: { colours: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const readout = readoutRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !readout || !ctx) return;

    const cars = colours.slice(0, GAPS.length).map((colour, i) => ({ colour: channels(colour), gap: GAPS[i] }));

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sx = new Float32Array(count);
    const sy = new Float32Array(count);
    const sDepth = new Float32Array(count);
    const shadowX = new Float32Array(count);
    const shadowY = new Float32Array(count);
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    // Rotation added by dragging, kept after letting go; spin carries it on briefly.
    const drag = { active: false, lastX: 0, lastY: 0, yaw: 0, tilt: 0, spin: 0 };
    const start = performance.now();
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let lastReadout = 0;

    const draw = (now: number) => {
      const elapsed = reducedMotion ? 0 : (now - start) / 1000;
      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;
      if (!drag.active) {
        drag.yaw += drag.spin;
        drag.spin *= 0.94;
      }

      // Desktop: the circuit sits right of the name. Phones: above it.
      const wide = width >= 860;
      const box = wide
        ? { x: width * 0.5, y: height * 0.06, w: width * 0.48, h: height * 0.88 }
        : { x: 0, y: height * 0.14, w: width, h: height * 0.56 };

      const yaw = 2.2 + elapsed * ORBIT + pointer.x * 0.35 + drag.yaw;
      const tilt = Math.min(Math.max(TILT + pointer.y * 0.12 + drag.tilt, 0.1), 1.4);
      const cosYaw = Math.cos(yaw);
      const sinYaw = Math.sin(yaw);
      const cosTilt = Math.cos(tilt);
      const sinTilt = Math.sin(tilt);
      const focal = radius * 4;
      const scale =
        Math.min(box.w / (2 * radius), box.h / (2 * radius * cosTilt + maxHeight * sinTilt)) * 0.86;
      const originX = box.x + box.w / 2;
      const originY = box.y + box.h / 2;

      const project = (x: number, y: number, z: number, out: [number, number, number]) => {
        const rx = x * cosYaw - y * sinYaw;
        const ry = x * sinYaw + y * cosYaw;
        const depth = ry * sinTilt - z * cosTilt;
        const perspective = focal / (focal + depth);
        out[0] = originX + rx * perspective * scale;
        out[1] = originY - (ry * cosTilt + z * sinTilt) * perspective * scale;
        out[2] = depth;
      };

      const p: [number, number, number] = [0, 0, 0];
      for (let i = 0; i < count; i++) {
        project(xs[i], ys[i], zs[i], p);
        sx[i] = p[0];
        sy[i] = p[1];
        sDepth[i] = p[2];
        project(xs[i], ys[i], -maxHeight / 2, p);
        shadowX[i] = p[0];
        shadowY[i] = p[1];
      }

      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // The circuit's shadow on flat ground, joined to it by thin posts.
      ctx.beginPath();
      for (let i = 0; i <= count; i++) {
        const j = i % count;
        if (i === 0) ctx.moveTo(shadowX[j], shadowY[j]);
        else ctx.lineTo(shadowX[j], shadowY[j]);
      }
      ctx.strokeStyle = `rgba(${INK}, 0.07)`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      for (let i = 0; i < count; i += 5) {
        ctx.moveTo(shadowX[i], shadowY[i]);
        ctx.lineTo(sx[i], sy[i]);
      }
      ctx.strokeStyle = `rgba(${INK}, 0.05)`;
      ctx.stroke();

      // The circuit, fainter where it is further away.
      ctx.lineWidth = 1.5;
      for (let i = 0; i < count; i++) {
        const j = (i + 1) % count;
        const nearness = 0.5 - ((sDepth[i] + sDepth[j]) / 2 / radius) * 0.5;
        ctx.strokeStyle = `rgba(${INK}, ${(0.16 + nearness * 0.4).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(sx[i], sy[i]);
        ctx.lineTo(sx[j], sy[j]);
        ctx.stroke();
      }

      // Cars, last first so the leader is drawn on top.
      const lapClock = startTime + elapsed * PLAYBACK;
      const position = (time: number) => {
        const { index, fraction } = locate(time);
        const next = (index + 1) % count;
        project(
          xs[index] + (xs[next] - xs[index]) * fraction,
          ys[index] + (ys[next] - ys[index]) * fraction,
          zs[index] + (zs[next] - zs[index]) * fraction,
          p,
        );
        return [p[0], p[1]] as const;
      };

      for (let c = cars.length - 1; c >= 0; c--) {
        const leader = c === 0;
        const { colour, gap } = cars[c];
        const carTime = lapClock - gap;
        const steps = 22;
        let [prevX, prevY] = position(carTime);
        const [headX, headY] = [prevX, prevY];
        for (let k = 1; k <= steps; k++) {
          const [x, y] = position(carTime - (TRAIL * k) / steps);
          const fade = 1 - k / steps;
          ctx.strokeStyle = `rgba(${colour}, ${(fade * fade * (leader ? 0.9 : 0.6)).toFixed(3)})`;
          ctx.lineWidth = (leader ? 3 : 2) * (0.4 + fade * 0.6);
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();
          prevX = x;
          prevY = y;
        }

        if (leader) {
          const glow = ctx.createRadialGradient(headX, headY, 0, headX, headY, 18);
          glow.addColorStop(0, `rgba(${colour}, 0.45)`);
          glow.addColorStop(1, `rgba(${colour}, 0)`);
          ctx.fillStyle = glow;
          ctx.fillRect(headX - 18, headY - 18, 36, 36);
        }
        ctx.fillStyle = `rgba(${colour}, ${leader ? 1 : 0.85})`;
        ctx.beginPath();
        ctx.arc(headX, headY, leader ? 3.5 : 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Where the leader is and how fast it is going, a few times a second.
      if (now - lastReadout > 150 || lastReadout === 0) {
        lastReadout = now;
        const { index, fraction } = locate(lapClock);
        const speed = (track.step / (times[index + 1] - times[index])) * 3.6 * PLAYBACK;
        const distance = (index + fraction) * track.step;
        readout.textContent = `${sectionAt(distance)}, ${Math.round(speed)} km/h`;
      }
    };

    const loop = (now: number) => {
      draw(now);
      frame = visible ? requestAnimationFrame(loop) : 0;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || drag.active) return;
      pointer.targetX = event.clientX / window.innerWidth - 0.5;
      pointer.targetY = event.clientY / window.innerHeight - 0.5;
    };

    const onDragStart = (event: PointerEvent) => {
      if (event.button !== 0) return;
      drag.active = true;
      drag.lastX = event.clientX;
      drag.lastY = event.clientY;
      drag.spin = 0;
      canvas.setPointerCapture(event.pointerId);
      canvas.dataset.dragging = "true";
    };
    const onDrag = (event: PointerEvent) => {
      if (!drag.active) return;
      const turn = (event.clientX - drag.lastX) * 0.006;
      drag.yaw += turn;
      drag.spin = turn;
      // Dragging down looks at the circuit more from above.
      drag.tilt = Math.min(Math.max(drag.tilt - (event.clientY - drag.lastY) * 0.004, 0.1 - TILT), 1.4 - TILT);
      drag.lastX = event.clientX;
      drag.lastY = event.clientY;
      if (reducedMotion) draw(performance.now());
    };
    const onDragEnd = () => {
      drag.active = false;
      if (reducedMotion) drag.spin = 0;
      delete canvas.dataset.dragging;
    };
    canvas.addEventListener("pointerdown", onDragStart);
    canvas.addEventListener("pointermove", onDrag);
    canvas.addEventListener("pointerup", onDragEnd);
    canvas.addEventListener("pointercancel", onDragEnd);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame && !reducedMotion) frame = requestAnimationFrame(loop);
    });

    if (!reducedMotion) {
      intersectionObserver.observe(canvas);
      window.addEventListener("pointermove", onPointerMove);
    }
    resize();
    canvas.dataset.ready = "true";

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerdown", onDragStart);
      canvas.removeEventListener("pointermove", onDrag);
      canvas.removeEventListener("pointerup", onDragEnd);
      canvas.removeEventListener("pointercancel", onDragEnd);
    };
  }, [colours]);

  return (
    <>
      <canvas ref={canvasRef} className="track-canvas" aria-hidden="true" />
      <p className="track-caption" aria-hidden="true">
        <span>Mount Panorama, Bathurst</span>
        <span className="track-readout">
          <span className="track-dot" style={{ background: colours[0] }} />
          <span ref={readoutRef} />
        </span>
      </p>
    </>
  );
}
