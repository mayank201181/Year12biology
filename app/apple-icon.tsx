// iOS home-screen icon: DNA double-helix + IB Biology badge.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #15803d 100%)`,
        }}
      >
        <svg width={92} height={92} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <path d="M26 12 C26 36, 74 36, 74 50 C74 64, 26 64, 26 88" fill="none" stroke="#ffffff" strokeWidth={7} strokeLinecap="round" />
          <path d="M74 12 C74 36, 26 36, 26 50 C26 64, 74 64, 74 88" fill="none" stroke="#bbf7d0" strokeWidth={7} strokeLinecap="round" />
          <line x1="34" y1="26" x2="66" y2="26" stroke="#ffffff" strokeWidth={5.5} strokeLinecap="round" />
          <line x1="34" y1="74" x2="66" y2="74" stroke="#ffffff" strokeWidth={5.5} strokeLinecap="round" />
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 6,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: SUBJECT.themeColorLight,
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: 0.5,
          }}
        >
          {SUBJECT.shortName}
        </div>
      </div>
    ),
    { ...size },
  );
}
