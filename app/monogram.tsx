import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/** "JH" in the site's colours and type, for the browser tab and home screen icons. */
export async function monogram(size: number, rounded: boolean) {
  const archivo = await readFile(join(process.cwd(), "app/fonts/Archivo-ExpandedExtraBold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1f22",
          borderRadius: rounded ? size * 0.22 : 0,
          color: "#eceee9",
          fontFamily: "Archivo",
          fontSize: size * 0.4,
          letterSpacing: -size * 0.01,
        }}
      >
        JH
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Archivo", data: archivo, weight: 800, style: "normal" }],
    },
  );
}
