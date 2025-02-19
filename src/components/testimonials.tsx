"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "John Doe",
    avatar: "/placeholder-user.jpg",
    content:
      "Maharaja Icon Park offers an unparalleled living experience. The amenities are top-notch, and the location is perfect for my family.",
  },
  {
    name: "Jane Smith",
    avatar: "/placeholder-user.jpg",
    content:
      "I'm impressed by the attention to detail in every aspect of this project. It truly feels like a premium living space.",
  },
  {
    name: "Mike Johnson",
    avatar: "/placeholder-user.jpg",
    content:
      "The community atmosphere at Maharaja Icon Park is fantastic. It's not just a home, it's a lifestyle.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What Our Residents Say
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-4">
                      <AvatarImage
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                      />
                      <AvatarFallback>
                        {testimonials[currentIndex].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Resident
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {testimonials[currentIndex].content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 text-gray-900 dark:text-white"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 text-gray-900 dark:text-white"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
