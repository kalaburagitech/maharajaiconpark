"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  "/images/image1.jpeg",
  "/images/image2.jpeg",
  "/images/image3.jpeg",
  "/images/image4.jpeg",
  "/images/image5.jpeg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <section
      id="gallery"
      className="relative py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Property Gallery
        </h2>

        {/* Main Image Container */}
        <div className="relative w-full max-w-6xl mx-auto h-[600px] mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative w-full h-full ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={toggleZoom}
            >
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`Property image ${currentIndex + 1}`}
                fill
                priority
                className={`rounded-lg ${
                  isZoomed ? "object-contain" : "object-cover"
                }`}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 dark:bg-black/50 hover:bg-white/70 dark:hover:bg-black/70 rounded-full text-gray-900 dark:text-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 dark:bg-black/50 hover:bg-white/70 dark:hover:bg-black/70 rounded-full text-gray-900 dark:text-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Zoom Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-4 right-4 bg-white/50 dark:bg-black/50 hover:bg-white/70 dark:hover:bg-black/70 rounded-full text-gray-900 dark:text-white"
            onClick={toggleZoom}
          >
            {isZoomed ? (
              <ZoomOut className="h-6 w-6" />
            ) : (
              <ZoomIn className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 w-4"
                  : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Preview */}
        <div className="hidden md:flex justify-center gap-2 mt-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-20 h-20 cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-blue-500"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
