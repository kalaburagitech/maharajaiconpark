import type { Metadata } from "next";
import AboutSection from "@/components/about-section";
import Contact from "@/components/contact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LocationInfo from "@/components/location-info";
import LocationSection from "@/components/location-section";
import PlotConfigurations from "@/components/plot-configurations";
import Pricing from "@/components/pricing";
import ProjectOverview from "@/components/project-overview";
// import Testimonials from "@/components/testimonials"
import WhyInvest from "@/components/why-invest";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MaharajaIkonPark | Luxury Villas in Devanahalli, Bangalore",
  description:
    "Discover Maharaja Ikon Park, a premium residential project offering luxurious 4BHK triplex villas in Devanahalli, Bangalore. Experience world-class amenities and strategic location near Kempegowda International Airport.",
  keywords:
    "Maharaja Ikon Park, luxury villas, Devanahalli, Bangalore, 4BHK triplex, residential project, real estate investment, Kempegowda International Airport",
  openGraph: {
    title: "MaharajaIkonPark | Luxury Villas in Devanahalli, Bangalore",
    description:
      "Premium 4BHK triplex villas with world-class amenities near Kempegowda International Airport, Bangalore.",
    images: [
      {
        url: "https://maharajaiconpark.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Maharaja Ikon Park Villas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maharaja Ikon Park | Luxury Villas in Devanahalli, Bangalore",
    description:
      "Premium 4BHK triplex villas with world-class amenities near Kempegowda International Airport, Bangalore.",
    images: ["https://maharajaiconpark.com/image3.jpeg"],
  },
};

export default function Home() {
  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Maharaja Ikon Park",
            "image": "https://maharajaiconpark.com/image1.jpeg",
            "description": "Luxury 4BHK triplex villas in Devanahalli, Bangalore",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Devanahalli",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "562110",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.2448,
              "longitude": 77.7138
            },
            "url": "https://maharajaiconpark.com/",
            "telephone": "+919945264555",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "priceRange": "₹₹₹"
          }
        `}
      </Script>
      <main className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <Hero />
        <PlotConfigurations />
        <Features />
        <Pricing />
        <LocationSection />
        <Gallery />
        <AboutSection />
        <ProjectOverview />
        <LocationInfo />
        <WhyInvest />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
