"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Features from "@/components/features";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

export default function FeaturesPage() {
  useEffect(() => {
    // Update metadata dynamically
    document.title = "Iconic Features | Maharaja Ikon Park";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore the extraordinary features of Maharaja Ikon Park. From strategic location to luxurious amenities, discover what makes our development truly iconic."
      );
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Explore the extraordinary features of Maharaja Ikon Park. From strategic location to luxurious amenities, discover what makes our development truly iconic."
        />
        <meta
          property="og:title"
          content="Iconic Features | Maharaja Ikon Park"
        />
        <meta
          property="og:description"
          content="Discover the extraordinary features that make Maharaja Ikon Park a truly iconic living experience. Explore our strategic location, luxurious amenities, and commitment to excellence."
        />
        <meta
          property="og:url"
          content="https://maharajaiconpark.com/features"
        />
        <meta property="og:site_name" content="Maharaja Ikon Park" />
        <meta
          property="og:image"
          content="https://maharajaiconpark.com/features.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Iconic Features | Maharaja Ikon Park"
        />
        <meta
          name="twitter:description"
          content="Discover the extraordinary features that make Maharaja Ikon Park a truly iconic living experience. Explore our strategic location, luxurious amenities, and commitment to excellence."
        />
        <meta
          name="twitter:image"
          content="https://maharajaiconpark.com/image4.jpeg"
        />
        <link rel="canonical" href="https://maharajaiconpark.com/features" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
                Iconic Features
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover the extraordinary features that make Maharaja Ikon Park
                a truly iconic living experience. Our commitment to excellence
                is reflected in every aspect of this prestigious development,
                from its strategic location to its luxurious amenities.
              </p>
            </motion.div>
            <Features />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
