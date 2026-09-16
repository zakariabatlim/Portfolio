import type { CSSProperties } from "react";
import Image from "next/image";

const glyphs: Record<string, readonly string[]> = {
  A: ["0011100", "0110110", "1100011", "1100011", "1111111", "1100011", "1100011", "1100011", "1100011"],
  B: ["1111100", "1100110", "1100011", "1100110", "1111100", "1100110", "1100011", "1100110", "1111100"],
  L: ["1100000", "1100000", "1100000", "1100000", "1100000", "1100000", "1100000", "1100011", "1111111"],
  M: ["1100011", "1110111", "1111111", "1101011", "1100011", "1100011", "1100011", "1100011", "1100011"],
  O: ["0011100", "0110110", "1100011", "1100011", "1100011", "1100011", "1100011", "0110110", "0011100"],
  S: ["0111110", "1100011", "1100000", "0110000", "0011100", "0000110", "0000011", "1100110", "0111100"],
  T: ["1111111", "1011101", "0001000", "0001000", "0001000", "0001000", "0001000", "0001000", "0011100"],
  U: ["1100011", "1100011", "1100011", "1100011", "1100011", "1100011", "1100011", "0110110", "0011100"],
};

const name = "BATLAMOUSS";
const cellPitch = 10;
const letterWidth = 7;
const letterGap = 1;
const rowCount = 9;
const columnCount = name.length * letterWidth + (name.length - 1) * letterGap;
const matrixWidth = columnCount * cellPitch;
const matrixHeight = rowCount * cellPitch;

const activePixels = [...name].flatMap((letter, letterIndex) => {
  const columnOffset = letterIndex * (letterWidth + letterGap);

  return glyphs[letter].flatMap((row, rowIndex) =>
    [...row].flatMap((pixel, columnIndex) => {
      if (pixel !== "1") return [];

      const globalColumn = columnOffset + columnIndex;
      const intensitySeed = (globalColumn * 17 + rowIndex * 13) % 11;
      const intensity = intensitySeed < 5 ? "primary" : intensitySeed < 9 ? "secondary" : "weak";
      const distanceFromCenter = Math.abs(globalColumn - columnCount / 2);

      return [{
        column: globalColumn,
        row: rowIndex,
        intensity,
        behindPortrait: distanceFromCenter < 13,
        delay: Math.round(distanceFromCenter * 2.4 + rowIndex * 3),
      }];
    }),
  );
});

export function PixelIdentityVisual() {
  return (
    <figure
      className="pixel-identity-visual"
      aria-label="Identité visuelle de Zakaria Batlamouss"
    >
      <div className="pixel-identity-glow" aria-hidden="true" />

      <svg
        className="pixel-name-matrix"
        viewBox={`0 0 ${matrixWidth} ${matrixHeight}`}
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern id="inactive-pixel-grid" width={cellPitch} height={cellPitch} patternUnits="userSpaceOnUse">
            <rect className="pixel-grid-dot" x="2" y="2" width="5.5" height="5.5" rx="1.35" />
          </pattern>
        </defs>
        <rect className="pixel-grid-field" width={matrixWidth} height={matrixHeight} fill="url(#inactive-pixel-grid)" />
        {activePixels.map((pixel) => (
          <rect
            key={`${pixel.column}-${pixel.row}`}
            data-pixel="active"
            className={`pixel-name-dot pixel-name-dot--${pixel.intensity}${pixel.behindPortrait ? " pixel-name-dot--behind-portrait" : ""}`}
            x={pixel.column * cellPitch + 1.5}
            y={pixel.row * cellPitch + 1.5}
            width="6.5"
            height="6.5"
            rx="1.4"
            style={{ "--pixel-delay": `${pixel.delay}ms` } as CSSProperties}
          />
        ))}
      </svg>

      <div className="pixel-portrait-shell">
        <div className="pixel-portrait-frame">
          <Image
            className="pixel-portrait-image"
            src="/images/zakaria-batlamouss-portrait.png"
            alt="Portrait de Zakaria Batlamouss"
            width={1152}
            height={1408}
            sizes="(max-width: 640px) 132px, (max-width: 1023px) 160px, 184px"
            priority
          />
        </div>
      </div>

      <figcaption>Code · Data · Solutions</figcaption>
    </figure>
  );
}
