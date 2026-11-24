// Browser-tab icon: botanical green square with crisp DNA double-helix glyph.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #15803d 100%)`,
          borderRadius: 8,
        }}
      >
        <svg width={22} height={22} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 12 C26 36, 74 36, 74 50 C74 64, 26 64, 26 88" fill="none" stroke="#ffffff" strokeWidth={8} strokeLinecap="round" />
          <path d="M74 12 C74 36, 26 36, 26 50 C26 64, 74 64, 74 88" fill="none" stroke="#bbf7d0" strokeWidth={8} strokeLinecap="round" />
          <line x1="34" y1="26" x2="66" y2="26" stroke="#ffffff" strokeWidth={6} strokeLinecap="round" />
          <line x1="34" y1="74" x2="66" y2="74" stroke="#ffffff" strokeWidth={6} strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
