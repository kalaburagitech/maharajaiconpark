"use client"; // ✅ Required for client-side animations

import Image from "next/image";
import { motion } from "framer-motion";

export default function LocationInfo() {
  return (
    <section id="location" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          ABOUT DEVANAHALLI LOCATION
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src="/location_map.jpg"
              alt="Devanahalli Map"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 md:pl-8"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Devanahalli, situated in the northern part of Bengaluru, is
              evolving into a satellite town and a growing real estate hub. The
              micro market's advantageous location and proximity to Nandi Hills
              along the commerce route that connects Karnataka with the northern
              region have aided the region's development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Following the establishment of Kempegowda International Airport,
              the micro market is attracting real estate investors due to the
              availability of large land parcels, attracting both local and
              global investors.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              NH 44, a six-lane signal-free road that connects to the Outer Ring
              Road (ORR), and NH 648 provides optimal connectivity from
              Devanahalli to various parts of Bengaluru.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
