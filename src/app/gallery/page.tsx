"use client";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function GalleryPage() {
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
              Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Immerse yourself in the visual splendor of Maharaja Ikon Park. Our
              gallery showcases the exquisite architecture, lush landscapes, and
              luxurious interiors that define our iconic development. Each image
              tells a story of elegance, comfort, and unparalleled living
              experiences.
            </p>
          </motion.div>
          <Gallery />
        </div>
      </section>
      <Footer />
    </main>
  );
}
