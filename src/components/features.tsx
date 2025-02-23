"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, TrendingUp, Car, Leaf } from "lucide-react";

const features = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Ikonic Address",
    description:
      "Perfectly positioned near major business hubs, renowned educational institutions, leading healthcare facilities, and vibrant shopping and entertainment centers.",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Ikonic Ambience",
    description:
      "Surrounded by nature's tranquility, relish expansive green spaces and serene landscapes, with the prestigious Brigade Orchards adding to the charm of this exceptional community.",
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Ikonic Architecture",
    description:
      "Our English Heritage-inspired villas offer thoughtful multigenerational living, complete with private lifts, servant quarters, and spacious, Vaastu-compliant designs.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Ikonic Appreciation",
    description:
      "Strategically located near Kempegowda International Airport, this is not just a home, but a legacy—a future-proof investment poised for significant growth.",
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Ikonic Connectivity",
    description:
      "Seamlessly connected to Nandi Hills, Yelahanka, Hoskote, and other prime locations.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Project Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
                    <span className="text-blue-600 dark:text-blue-400">
                      {feature.icon}
                    </span>
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
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
