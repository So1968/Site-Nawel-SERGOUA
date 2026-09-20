import { ImageResponse } from "next/og";
import { nawelProfile } from "@/lib/nawel-content";

export const dynamic = "force-static";
export const alt = `${nawelProfile.name} — ${nawelProfile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          color: "#fffaf5",
          background:
            "radial-gradient(ellipse at 76% 22%, rgba(255, 222, 193, .48), transparent 23%), linear-gradient(135deg, #d9c6ba 0%, #b2767c 32%, #454656 64%, #182126 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "58px",
              height: "58px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,.75)",
              borderRadius: "6px",
              color: "#fffaf5",
              background: "#a63b35",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            NS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "28px" }}>{nawelProfile.name}</span>
            <span style={{ fontSize: "15px", letterSpacing: "3px", opacity: 0.78 }}>
              {nawelProfile.role.toUpperCase()}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "760px" }}>
          <span style={{ fontSize: "22px", letterSpacing: "5px", opacity: 0.82 }}>
            MÉMOIRE · MATIÈRE · TRANSMISSION
          </span>
          <span style={{ marginTop: "18px", fontSize: "82px", lineHeight: 0.95 }}>
            {nawelProfile.title}
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ fontSize: "22px", opacity: 0.85 }}>
            Sculpture · Relief · Collage · Matière
          </span>
        </div>
      </div>
    ),
    size,
  );
}
