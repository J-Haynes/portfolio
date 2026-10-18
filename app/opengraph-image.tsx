import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import track from "./hero/bathurst.json";

export const alt = "Jack Haynes, Melbourne, Australia, beside an outline of the Mount Panorama circuit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The circuit seen from above, fitted into a box of this size. */
const TRACK_BOX = 460;

function trackPath() {
  const xs = track.points.map((p) => p[0]);
  const ys = track.points.map((p) => p[1]);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const scale = TRACK_BOX / Math.max(Math.max(...xs) - minX, Math.max(...ys) - minY);
  const points = track.points.map(([x, y]) => [(x - minX) * scale, (y - minY) * scale]);
  const d = points.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ") + " Z";
  return { d, start: points[0], width: (Math.max(...xs) - minX) * scale, height: (Math.max(...ys) - minY) * scale };
}

export default async function OpengraphImage() {
  const geist = await readFile(join(process.cwd(), "app/fonts/Geist-SemiBold.ttf"));
  const { d, start, width, height } = trackPath();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 96px",
          background: "radial-gradient(circle at 75% 50%, #1d1915, #0b0a09 70%)",
          color: "#ede9e4",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 5, color: "#ff8c3a" }}>MELBOURNE, AUSTRALIA</div>
          <div style={{ fontSize: 132, lineHeight: 1, letterSpacing: -6, marginTop: 24 }}>Jack</div>
          <div style={{ fontSize: 132, lineHeight: 1, letterSpacing: -6 }}>Haynes</div>
          <div style={{ fontSize: 28, color: "#9a938b", marginTop: 40 }}>jackhaynes.dev</div>
        </div>
        <svg width={width} height={height} viewBox={`-12 -12 ${width + 24} ${height + 24}`}>
          <path d={d} fill="none" stroke="#ede9e4" strokeOpacity={0.75} strokeWidth={3} strokeLinejoin="round" />
          <circle cx={start[0]} cy={start[1]} r={18} fill="#ff8c3a" fillOpacity={0.25} />
          <circle cx={start[0]} cy={start[1]} r={8} fill="#ff8c3a" />
        </svg>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: geist, weight: 600, style: "normal" }],
    },
  );
}
