import { ImageResponse } from "next/og";
import { business } from "@/config/business";

export const alt = "Holiday Imaginarium";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#10211c",
          color: "#f4efe6",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 6, color: "#d4b483" }}>
          WILLAMETTE VALLEY
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 900 }}>
            Outdoor holiday decorating without the hassle.
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#eadcc4" }}>
            {business.businessName}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
