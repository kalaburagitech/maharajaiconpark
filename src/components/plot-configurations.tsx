"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const configurations = [
  {
    size: "30' X 40'",
    area: "2700 SFT",
    description: "Tailored for modern, compact living.",
  },
  {
    size: "30' X 50'",
    area: "3150 SFT",
    description: "A perfect blend of space and style.",
  },
  {
    size: "33' X 50'",
    area: "3500 SFT",
    description: "Spacious villas with grand, luxurious layouts.",
  },
];

export default function PlotConfigurations() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Plot Configurations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {configurations.map((config, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    {config.size}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl mb-2 text-gray-900 dark:text-white">
                    {config.area}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {config.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
