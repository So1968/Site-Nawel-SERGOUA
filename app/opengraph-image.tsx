import { ImageResponse } from "next/og";

export const alt = "Nawel Sergoua — artiste plasticienne";
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
            "linear-gradient(155deg, #e8d7c8 0%, #cc7b87 42%, #655b78 67%, #273247 68%, #182126 100%)",
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
            <span style={{ fontSize: "28px" }}>Nawel Sergoua</span>
            <span style={{ fontSize: "15px", letterSpacing: "3px", opacity: 0.78 }}>
              ARTISTE PLASTICIENNE
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "760px" }}>
          <span style={{ fontSize: "22px", letterSpacing: "5px", opacity: 0.82 }}>
            ENTRE OBSCURITÉ ET LUMIÈRE
          </span>
          <span style={{ marginTop: "18px", fontSize: "82px", lineHeight: 0.95 }}>
            Le couloir du jour
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ fontSize: "22px", opacity: 0.85 }}>
            Peinture · Paysage · Jardin · Poésie
          </span>
          <span style={{ fontSize: "42px", opacity: 0.52 }}>山水</span>
        </div>
      </div>
    ),
    size,
  );
}
