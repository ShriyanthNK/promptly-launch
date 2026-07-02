import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Promptly — Do the work. Earn the scroll.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #3a37a8 0%, #5B5BD6 55%, #1a0f2e 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "40px" }}>
        <div
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "22px",
            background: "rgba(255,255,255,0.15)",
            border: "2px solid rgba(255,255,255,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "48px",
            color: "white",
          }}
        >
          ✓
        </div>
        <span style={{ fontSize: "64px", fontWeight: "800", color: "white", letterSpacing: "-2px" }}>
          Promptly
        </span>
      </div>
      <p
        style={{
          fontSize: "42px",
          fontWeight: "700",
          color: "white",
          margin: "0 0 20px",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        Do the work. Earn the scroll.
      </p>
      <p
        style={{
          fontSize: "24px",
          color: "rgba(255,255,255,0.65)",
          margin: 0,
          textAlign: "center",
          maxWidth: "820px",
          lineHeight: 1.5,
        }}
      >
        The iOS app that rewards you with screen time for completing your tasks.
      </p>
    </div>,
    { ...size }
  );
}
