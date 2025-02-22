import { ImageResponse } from "next/og";

export const runtime = "edge";
export const dynamic = "force-static";
export const revalidate = false;

export const alt = "Maharaja Icon Park - Luxury Villas in Bangalore";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #fff, #f5f5f5)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://maharajaiconpark.com/logo.png"
          alt="Logo"
          width={200}
          height={200}
        />
        <h1 style={{ fontSize: 60, textAlign: "center", margin: "20px 0" }}>
          Luxury Villas in Devanahalli
        </h1>
        <p style={{ fontSize: 30, opacity: 0.8 }}>
          Premium 4BHK Triplex Villas
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
