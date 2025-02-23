"use client"; // ✅ Required for client-side animations

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-4xl font-bold mb-6 text-indigo-800 dark:text-indigo-300">
              IKON PARK
            </h2>
            <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
              ITíS WHERE YOU THRIVE, SURROUNDED BY LUXURY AND PEACE.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Ikon Park is all about IKONIC DESIGN. It is an English
              Heritage-inspired development, excellently planned according to
              the requirements of a multigenerational home. It is a
              one-of-its-kind development where everyone can enjoy their
              individuality to the fullest along with the convenience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <Image
              src="/Full_image.jpg"
              alt="Luxury Home"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
