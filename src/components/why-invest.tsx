"use client"; // ✅ Required for client-side animations

import { motion } from "framer-motion";
import { TrendingUp, Briefcase, MapPin, Building } from "lucide-react";

const reasons = [
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
    title: "Emerging Hub",
    description:
      "Devanahalli is evolving into a thriving employment center and technological hub.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-green-500" />,
    title: "Business Opportunities",
    description:
      "Proximity to key business hubs in North Bengaluru, attracting numerous companies.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-red-500" />,
    title: "Strategic Location",
    description:
      "Close to Kempegowda International Airport and well-connected to Bengaluru city.",
  },
  {
    icon: <Building className="h-8 w-8 text-purple-500" />,
    title: "Real Estate Growth",
    description:
      "Rapid real estate development with essential amenities and infrastructure.",
  },
];

export default function WhyInvest() {
  return (
    <section
      id="why-invest"
      className="py-20 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          WHY INVEST IN DEVANAHALLI
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {reason.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
