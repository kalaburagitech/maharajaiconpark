"use client";

import { motion } from "framer-motion";

interface AnimatedHeroProps {
  title: string;
  description: string;
}

export default function AnimatedHero({
  title,
  description,
}: AnimatedHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
        {title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}
