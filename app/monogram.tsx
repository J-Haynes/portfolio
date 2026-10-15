import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/** "JH" in the site's colours and type, for the browser tab and home screen icons. */
export async function monogram(size: number, rounded: boolean) {
  const geist = await readFile(join(process.cwd(), "app/fonts/Geist-SemiBold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0a09",
          borderRadius: rounded ? size * 0.22 : 0,
          color: "#ede9e4",
          fontFamily: "Geist",
          fontSize: size * 0.52,
          letterSpacing: -size * 0.035,
        }}
      >
        JH
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Geist", data: geist, weight: 600, style: "normal" }],
    },
  );
}
