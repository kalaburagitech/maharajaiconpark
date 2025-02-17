"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Features", href: "/features" },
  { name: "Amenities", href: "/amenities-page" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

interface NavMenuProps {
  onItemClick?: () => void;
  isMobile?: boolean;
}

export default function NavMenu({
  onItemClick,
  isMobile = false,
}: NavMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <nav className={`flex ${isMobile ? "flex-col" : "items-center space-x-6"}`}>
      {navItems.map((item) => (
        <div key={item.name} className={`relative ${isMobile ? "py-2" : ""}`}>
          <Link
            href={item.href}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={handleItemClick}
          >
            {item.name}
          </Link>
          {hoveredItem === item.name && !isMobile && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              layoutId="underline"
            />
          )}
        </div>
      ))}
    </nav>
  );
}
