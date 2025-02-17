"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";

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
      className="w-full overflow-x-hidden"
    >
      <body className={`${inter.className} w-full overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full max-w-full overflow-hidden">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
