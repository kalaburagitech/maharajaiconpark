"use client";

import Contact from "@/components/contact";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We&apos;re here to answer any questions you may have about
              Maharaja Ikon Park. Our dedicated team is committed to providing
              you with exceptional service and guiding you through every step of
              your journey towards luxury living. Reach out to us today and
              experience the Maharaja difference.
            </p>
          </motion.div>
          <Contact />
        </div>
      </section>
      <Footer />
    </main>
  );
}
