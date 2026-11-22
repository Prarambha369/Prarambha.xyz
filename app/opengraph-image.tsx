import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Prarambha Bashyal: ecosystem founder and open-source builder from Butwal, Nepal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const pfp = await readFile(join(process.cwd(), "public", "pfp.jpg"));
  const pfpSrc = `data:image/jpeg;base64,${pfp.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px",
          background: "radial-gradient(circle at 85% 0%, rgba(255,102,17,0.28), #0A0A0A 60%)",
          color: "#F5F5F5",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#FF6611", fontFamily: "monospace", marginBottom: 28 }}>
            ECOSYSTEM FOUNDER · BUTWAL, NEPAL
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, marginBottom: 28 }}>Prarambha Bashyal</div>
          <div style={{ fontSize: 30, color: "#A0A0A0", lineHeight: 1.35 }}>
            Founder of Butwal Hacks · GNOME Nepal maintainer · Open-source builder
          </div>
          <div style={{ fontSize: 24, color: "#FF6611", fontFamily: "monospace", marginTop: 40 }}>prarambha.xyz</div>
        </div>
        <img
          src={pfpSrc}
          alt=""
          width={300}
          height={300}
          style={{ borderRadius: 32, objectFit: "cover", objectPosition: "top", border: "2px solid #2A2A2A" }}
        />
      </div>
    ),
    size,
  );
}
