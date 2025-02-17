"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

const words = ["Maharaja", "Ikon", "Park"];
const colors = ["#2F2890", "#10B981", "#F59E0B"]; // Indigo, Emerald, Amber

const wordVariants = {
  initial: { y: 20, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
      delay: i * 0.2,
    },
  }),
};

const letterVariants = {
  initial: { y: 20, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
      delay: i * 0.1,
    },
  }),
};

export default function AnimatedLogo() {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isMediumScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Link href="/">
      <motion.div
        className="flex items-center space-x-1 sm:space-x-2 p-1 sm:p-2 rounded-lg cursor-pointer"
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow:
            "0 0 10px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.1)",
        }}
      >
        {words.map((word, wordIndex) => (
          <motion.div
            key={wordIndex}
            variants={wordVariants}
            custom={wordIndex}
            className="flex"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                variants={letterVariants}
                custom={letterIndex}
                className={`font-bold inline-block ${
                  isSmallScreen
                    ? "text-sm"
                    : isMediumScreen
                    ? "text-base"
                    : "text-lg sm:text-xl md:text-2xl"
                }`}
                style={{
                  color: colors[wordIndex],
                  textShadow: `0 0 10px ${colors[wordIndex]}80`,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </Link>
  );
}
