"use client";
import Features from "@/components/features";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function FeaturesPage() {
  return (
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
              Discover the extraordinary features that make Maharaja Ikon Park a
              truly iconic living experience. Our commitment to excellence is
              reflected in every aspect of this prestigious development, from
              its strategic location to its luxurious amenities.
            </p>
          </motion.div>
          <Features />
        </div>
      </section>
      <Footer />
    </main>
  );
}
