import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/siteConfig";

export const alt = "Lunamar Digital — Websites. Marketing. Growth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded 1200×630 social card, generated as a real PNG at build time.
 * Replaces the old SVG (which most platforms wouldn't render).
 */
export default function OpengraphImage() {
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
          background: "#070912",
          backgroundImage:
            "radial-gradient(55% 55% at 50% 32%, rgba(63,107,255,0.28), rgba(7,9,18,0))",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Crescent mark */}
        <div style={{ position: "relative", display: "flex", width: 150, height: 150 }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 9999,
              background: "linear-gradient(135deg, #dfe7ff, #6f9bff)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -12,
              left: 32,
              width: 150,
              height: 150,
              borderRadius: 9999,
              background: "#070912",
            }}
          />
        </div>

        <div style={{ display: "flex", marginTop: 54, fontSize: 70, fontWeight: 700, letterSpacing: 6 }}>
          <span style={{ color: "#ffffff" }}>LUNAMAR</span>
          <span style={{ color: "#6f9bff", marginLeft: 20 }}>DIGITAL</span>
        </div>

        <div style={{ marginTop: 22, fontSize: 30, color: "#aeb6c9" }}>
          Websites. Marketing. Growth.
        </div>
        <div style={{ marginTop: 14, fontSize: 22, color: "#7f8aa3" }}>
          No upfront website cost · Plans from £149/month
        </div>
      </div>
    ),
    { ...size }
  );
}
