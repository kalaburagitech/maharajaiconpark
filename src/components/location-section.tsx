"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const handleGetDirections = () => {
    window.open(
      "https://maps.app.goo.gl/BpxLsZ5pFB4chv3T9",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Prime Location
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5453557565056!2d77.70299731482266!3d13.13980699074731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d8e8f41e2b7%3A0xb4f6b2b07a8e609d!2sDevanahalli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1645518145769!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Devanahalli – Bengaluru&apos;s fast-growing hub of connectivity
              and luxury living
            </h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Located in the heart of Devanahalli, Maharaja Ikon Park offers
              unparalleled connectivity and access to Bengaluru&apos;s most
              sought-after destinations.
            </p>
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Button
                onClick={handleGetDirections}
                className="bg-blue-600 hover:bg-blue-700 text-white relative group overflow-hidden"
              >
                <span className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                  <motion.span
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <ExternalLink className="h-3 w-3" />
                  </motion.span>
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
