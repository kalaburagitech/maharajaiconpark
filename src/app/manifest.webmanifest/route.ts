import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  return NextResponse.json({
    name: "Maharaja Ikon Park",
    short_name: "MaharajaIkon",
    description: "Luxury Villas in Devanahalli, Bangalore",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    orientation: "portrait",
    categories: ["real estate", "property", "luxury homes"],
    screenshots: [
      {
        src: "/screenshot1.jpg",
        sizes: "1920x1080",
        type: "image/jpeg",
        form_factor: "wide"
      }
    ],
    shortcuts: [
      {
        name: "View Gallery",
        url: "/gallery",
        description: "View our luxury villa gallery"
      },
      {
        name: "Contact Us",
        url: "/contact",
        description: "Get in touch with us"
      }
    ],
    prefer_related_applications: false
  }, {
    headers: {
      'Content-Type': 'application/manifest+json',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  })
}