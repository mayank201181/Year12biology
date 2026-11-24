// PWA app icon as a PNG, drawn on demand.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const runtime = "nodejs";

const MIN = 48;
const MAX = 1024;
const FALLBACK = 512;
const BRAND = SUBJECT.themeColorLight;
const BRAND_2 = "#15803d";

function sizeFrom(raw: string | null): number {
  const n = Number(raw);
  if (!raw || !Number.isFinite(n)) return FALLBACK;
  return Math.round(Math.min(MAX, Math.max(MIN, n)));
}

function SubjectGlyph({ px }: { px: number }) {
  return (
    <svg width={px} height={px} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 12 C26 36, 74 36, 74 50 C74 64, 26 64, 26 88" fill="none" stroke="#ffffff" strokeWidth={7} strokeLinecap="round" />
      <path d="M74 12 C74 36, 26 36, 26 50 C26 64, 74 64, 74 88" fill="none" stroke="#bbf7d0" strokeWidth={7} strokeLinecap="round" />
      <line x1="34" y1="26" x2="66" y2="26" stroke="#ffffff" strokeWidth={5.5} strokeLinecap="round" />
      <line x1="34" y1="74" x2="66" y2="74" stroke="#ffffff" strokeWidth={5.5} strokeLinecap="round" />
    </svg>
  );
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const size = sizeFrom(searchParams.get("size"));
  const maskable = searchParams.get("maskable") === "1";
  const glyph = Math.round(size * (maskable ? 0.6 : 0.66));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_2} 100%)`,
          borderRadius: maskable ? 0 : Math.round(size * 0.22),
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: glyph,
            height: glyph,
          }}
        >
          <SubjectGlyph px={glyph} />
        </div>
      </div>
    ),
    {
      width: size,
      height: size,
      headers: { "Cache-Control": "public, max-age=31536000, immutable" },
    },
  );
}
