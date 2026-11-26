import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const ORANGE = "#d97706";

export async function brandIcon(size: number) {
  const font = await readFile(
    join(process.cwd(), "assets/Newsreader-SemiBold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: ORANGE,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontFamily: "Newsreader",
          fontSize: Math.round(size * 0.55),
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        tp
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [
        {
          name: "Newsreader",
          data: font,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
