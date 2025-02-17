"use client"; // ✅ Required for client-side animations

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Majestic Entrance Plaza with imposing archway & cobblestone pavers",
  "Pergolas & Leisure Trails",
  "The Avenue is flanked by rows of trees and shrubs creating a tranquil ambience",
  "Rain water harvesting system (as per site requirement)",
  "Security booth equipped with a boom barrier at entrance and exit",
  "Concrete/Paver finish roads as per architectís design",
];

export default function ProjectOverview() {
  return (
    <section id="project-overview" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          PROJECT OVERVIEW AT A GLANCE
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
