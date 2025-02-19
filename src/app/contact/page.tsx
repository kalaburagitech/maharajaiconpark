"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

export default function ContactPage() {
  useEffect(() => {
    // Update metadata dynamically
    document.title = "Contact Us | Maharaja Icon Park";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get in touch with Maharaja Icon Park for inquiries about our luxury villas in Devanahalli, Bangalore. Our team is ready to assist you with your journey towards exceptional living."
      );
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get in touch with Maharaja Icon Park for inquiries about our luxury villas in Devanahalli, Bangalore. Our team is ready to assist you with your journey towards exceptional living."
        />
        <meta property="og:title" content="Contact Maharaja Icon Park" />
        <meta
          property="og:description"
          content="Reach out to us for information about our luxury villas in Devanahalli, Bangalore."
        />
        <meta
          property="og:url"
          content="https://maharajaiconpark.com/contact"
        />
        <meta property="og:site_name" content="Maharaja Icon Park" />
        <meta
          property="og:image"
          content="https://maharajaiconpark.com/contact.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Maharaja Icon Park" />
        <meta
          name="twitter:description"
          content="Reach out to us for information about our luxury villas in Devanahalli, Bangalore."
        />
        <meta
          name="twitter:image"
          content="https://maharajaiconpark.com/logo.png"
        />
        <link rel="canonical" href="https://maharajaiconpark.com/contact" />
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We&apos;re here to answer any questions you may have about
                Maharaja Icon Park. Our dedicated team is committed to providing
                you with exceptional service and guiding you through every step
                of your journey towards luxury living. Reach out to us today and
                experience the Maharaja difference.
              </p>
            </motion.div>
            <Contact />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
