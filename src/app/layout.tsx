import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://maharajaiconpark.com"),
  title: {
    default: "MaharajaIkonPark | Luxury Villas in Devanahalli, Bangalore",
    template: "%s | MaharajaIkonPark",
  },
  description:
    "Premium residential project offering luxurious 4BHK triplex villas in Devanahalli, Bangalore near Kempegowda International Airport.",
  manifest: "/manifest.webmanifest", // Add this line
  keywords: [
    "Maharaja Ikon Park",
    "luxury villas",
    "Devanahalli",
    "Bangalore",
    "4BHK triplex",
    "residential project",
    "real estate investment",
  ],
  authors: [{ name: "Maharaja Ikon Park" }],
  creator: "Maharaja Ikon Park",
  publisher: "Maharaja Ikon Park",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "1JeAaWRscUPIKmCkI-43PIJSrA3xFPUuxOV971IFqjs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="w-full overflow-x-hidden light"
    >
      <body className={`${inter.className} w-full overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="w-full max-w-full overflow-hidden">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
