import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import track from "./hero/bathurst.json";

export const alt = "Jack Haynes, software developer in Melbourne, beside an outline of the Mount Panorama circuit";
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
  const archivo = await readFile(join(process.cwd(), "app/fonts/Archivo-ExpandedExtraBold.ttf"));
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
          background: "radial-gradient(circle at 75% 50%, #262a2e, #1c1f22 70%)",
          color: "#eceee9",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, lineHeight: 1, letterSpacing: -3 }}>Jack</div>
          <div style={{ fontSize: 112, lineHeight: 1, letterSpacing: -3 }}>Haynes</div>
          <div style={{ fontSize: 30, color: "#8c9a8e", marginTop: 40 }}>Software developer, Melbourne</div>
        </div>
        <svg width={width} height={height} viewBox={`-12 -12 ${width + 24} ${height + 24}`}>
          <path d={d} fill="none" stroke="#eceee9" strokeOpacity={0.75} strokeWidth={3} strokeLinejoin="round" />
          <circle cx={start[0]} cy={start[1]} r={18} fill="#e2231a" fillOpacity={0.3} />
          <circle cx={start[0]} cy={start[1]} r={8} fill="#e2231a" />
        </svg>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Archivo", data: archivo, weight: 800, style: "normal" }],
    },
  );
}
