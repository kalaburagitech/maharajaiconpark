"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Mail, User, MessageSquare, Send, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  subject: z.string().min(2, { message: "Subject is required." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const inputVariants = {
  focus: { scale: 1.05, boxShadow: "0 0 0 2px rgba(255,255,255,0.5)" },
};

const colors = ["#FFD700", "#FFA500", "#FF4500", "#FF6347"];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rotation, setRotation] = useState(0);
  const controls = useAnimation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 5) % 360); // Increased rotation speed
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      background: `conic-gradient(from ${rotation}deg, ${colors.join(", ")})`,
      boxShadow: `0 0 20px rgba(255, 215, 0, 0.6), 
                   0 0 40px rgba(255, 165, 0, 0.4), 
                   0 0 60px rgba(255, 69, 0, 0.2)`,
    });
  }, [rotation, controls]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
        const response = await fetch("https://maharajaiconpark.com/contact.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        const data = await response.json();
        if (data.success) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }
    } catch {
        alert("Failed to send message.");
    }

    setIsSubmitting(false);
}


  return (
    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative p-1 rounded-lg"
        style={{ height: "450px" }} // Reduced height
      >
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={controls}
          transition={{ duration: 0 }}
        />
        <motion.div
          className="relative bg-white p-8 rounded-lg h-full overflow-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <motion.div
                        whileFocus="focus"
                        variants={inputVariants}
                        className="relative"
                      >
                        <Input
                          placeholder="Email *"
                          {...field}
                          className="pl-10 border-gray-300 focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <motion.div
                        whileFocus="focus"
                        variants={inputVariants}
                        className="relative"
                      >
                        <Input
                          placeholder="Name *"
                          {...field}
                          className="pl-10 border-gray-300 focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <motion.div
                        whileFocus="focus"
                        variants={inputVariants}
                        className="relative"
                      >
                        <Input
                          placeholder="Subject"
                          {...field}
                          className="pl-10 border-gray-300 focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                        />
                        <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <motion.div whileFocus="focus" variants={inputVariants}>
                        <Textarea
                          placeholder="Message"
                          {...field}
                          className="min-h-[120px] border-gray-300 focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative bg-yellow-500 rounded-lg overflow-hidden shadow-lg"
        style={{ height: "450px" }} // Reduced height
      >
        <motion.div
          className="absolute inset-0 bg-yellow-400"
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.h2
            className="font-bold text-4xl mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            GET IN TOUCH
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="text-white text-2xl" />
              <div>
                <p className="font-semibold">Maharaja Ikon Park</p>
                <p>Devanahalli, Bangalore North</p>
                <p>Karnataka, India</p>
                <p>Pin: 562110</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="text-white text-2xl" />
              <p className="font-semibold">+91 9945264555</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
