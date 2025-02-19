"use client";

import { motion } from "framer-motion";
import {
  Home,
  PocketIcon as Pool,
  Dumbbell,
  TurtleIcon as Tennis,
  Trees,
  Baby,
  GamepadIcon,
  Route,
  PartyPopper,
  Building,
  Wifi,
  Shield,
  Tv,
  Droplets,
  Recycle,
  Car,
  Plus,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const amenities = [
  {
    icon: <Home className="w-12 h-12" />,
    title: "Clubhouse",
    description:
      "Modern clubhouse with premium facilities and entertainment areas",
  },
  {
    icon: <Pool className="w-12 h-12" />,
    title: "Swimming Pool",
    description: "Temperature-controlled pool with dedicated kids&apos; area",
  },
  {
    icon: <Dumbbell className="w-12 h-12" />,
    title: "Gymnasium",
    description: "State-of-the-art fitness center with modern equipment",
  },
  {
    icon: <Tennis className="w-12 h-12" />,
    title: "Sport Courts",
    description:
      "Multiple sports facilities including tennis and basketball courts",
  },
  {
    icon: <Trees className="w-12 h-12" />,
    title: "Garden",
    description: "Beautifully landscaped gardens with walking paths",
  },
  {
    icon: <Baby className="w-12 h-12" />,
    title: "Kids Play Area",
    description: "Safe and engaging play areas for children of all ages",
  },
  {
    icon: <GamepadIcon className="w-12 h-12" />,
    title: "Indoor Games",
    description: "Entertainment zone with various indoor gaming options",
  },
  {
    icon: <Route className="w-12 h-12" />,
    title: "Jogging Track",
    description: "Well-designed track for walking and jogging enthusiasts",
  },
  {
    icon: <PartyPopper className="w-12 h-12" />,
    title: "Banquet Hall",
    description: "Elegant space for hosting events and gatherings",
  },
  {
    icon: <Building className="w-12 h-12" />,
    title: "Security",
    description: "24/7 security with CCTV surveillance",
  },
  {
    icon: <Wifi className="w-12 h-12" />,
    title: "Internet Ready",
    description: "Fiber optic connectivity for high-speed internet",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Gated Community",
    description: "Secure access control with intercom facility",
  },
  {
    icon: <Tv className="w-12 h-12" />,
    title: "Entertainment",
    description: "DTH & TV services in key areas",
  },
  {
    icon: <Droplets className="w-12 h-12" />,
    title: "Water Treatment",
    description: "Advanced water treatment plant for pure water supply",
  },
  {
    icon: <Recycle className="w-12 h-12" />,
    title: "Eco-Friendly",
    description: "Sustainable features including rainwater harvesting",
  },
  {
    icon: <Car className="w-12 h-12" />,
    title: "EV Charging",
    description: "Electric vehicle charging infrastructure",
  },
  {
    icon: <Plus className="w-12 h-12" />,
    title: "More+",
    description: "Discover additional premium amenities",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Amenities() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-indigo-950 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 font-serif text-gray-900 dark:text-white">
            Amenities
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-200 italic mb-8 font-sans">
            A host of thoughtful amenities for unlimited happiness
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans">
            One thing you&apos;ll always have at Maharaja Icon Park is ample
            amounts of time. And with our world-class amenities, you&apos;ll
            never have trouble figuring out how to spend your time. In other
            words, the amenities are one more way to help you make the right
            connections. Starting with yourself!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {amenities.map((amenity, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative overflow-hidden bg-white dark:bg-gray-800 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="mb-4 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300 bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full"
                    >
                      {amenity.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-700 dark:text-gray-100 dark:group-hover:text-indigo-300 transition-colors duration-300 font-serif">
                      {amenity.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300 font-sans">
                      {amenity.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
