/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Ensures proper routing for static hosting
  images: {
    unoptimized: true, // Fixes images when using "next export"
  },
  reactStrictMode: true, // Optional but recommended
};

module.exports = nextConfig;
