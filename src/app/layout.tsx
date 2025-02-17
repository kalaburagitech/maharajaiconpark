"use client";

import type React from "react";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";
    }
  }, []);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="w-full overflow-x-hidden light"
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://maharajaikonpark.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maharajaikonpark.com/" />
        <meta property="og:site_name" content="Maharaja Ikon Park" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://maharajaikonpark.com/" />

        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Maharaja Ikon Park" />
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
      </Head>
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
