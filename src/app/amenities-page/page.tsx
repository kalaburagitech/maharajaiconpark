import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Amenities from "@/components/amenities";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Luxury Villa Amenities in Bangalore | MaharajaIkonPark",
  description:
    "Experience world-class amenities at Maharaja Ikon Park including clubhouse, swimming pool, gym, and more. Premium facilities for luxury living in Devanahalli, Bangalore.",
  keywords: [
    "luxury villa amenities",
    "Bangalore luxury facilities",
    "premium villa features",
    "Devanahalli residential amenities",
    "MaharajaIkonPark facilities",
  ],
  openGraph: {
    title: "Luxury Villa Amenities in Bangalore | MaharajaIkonPark",
    description:
      "Experience world-class amenities at Maharaja Ikon Park including clubhouse, swimming pool, gym, and more.",
    url: "https://maharajaiconpark.com/amenities-page",
    images: [
      {
        url: "https://maharajaiconpark.com/Full_image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Amenities at Maharaja Ikon Park",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AmenitiesPage() {
  return (
    <>
      <Script id="amenities-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ApartmentComplex",
            "name": "Maharaja Ikon Park",
            "description": "Luxury villa project with world-class amenities in Devanahalli, Bangalore",
            "url": "https://maharajaikonpark.com/amenities-page",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Devanahalli",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "562110",
              "addressCountry": "IN"
            },
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Swimming Pool",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Clubhouse",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Gym",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Security System",
                "value": true
              }
            ]
          }
        `}
      </Script>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <Header />
        <div className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-b from-indigo-100 to-white dark:from-indigo-900 dark:to-gray-900">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6 font-serif text-gray-900 dark:text-white">
                  World-Class Amenities
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-sans">
                  Experience luxury living with our thoughtfully curated
                  collection of premium amenities designed for your comfort and
                  convenience.
                </p>
              </div>
            </div>
          </section>

          {/* Amenities Section */}
          <Amenities />

          {/* Specifications Section */}
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white font-serif">
                Specification Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Structure */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-indigo-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white font-serif">
                    Structure
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-sans">
                    RCC framed Structure Designed seismic compliant. (Zone 02)
                  </p>
                </div>

                {/* Doors and Windows */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-indigo-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white font-serif">
                    Doors and Windows
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-sans">
                    <li>
                      • Main Door of 8 FT height of Teak wood frame & shutter
                      with PU polish
                    </li>
                    <li>• UPVC / Aluminium for all sliding door/windows</li>
                  </ul>
                </div>

                {/* Flooring */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-indigo-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white font-serif">
                    Flooring
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-sans">
                    <li>• 1600mm X 800mm vitrified tiles in living areas</li>
                    <li>• Laminated Wooden flooring in bedrooms</li>
                    <li>• Anti-skid Vitrified tiles in terrace</li>
                  </ul>
                </div>

                {/* Kitchen */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-indigo-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white font-serif">
                    Kitchen
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-sans">
                    <li>• Kitchen-ready to receive Modular Unit</li>
                    <li>• Provision for electrical and plumbing points</li>
                    <li>• Power plugs for all modern appliances</li>
                  </ul>
                </div>

                {/* Electrical */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-indigo-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white font-serif">
                    Electrical
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-sans">
                    <li>• Concealed copper wiring of reputed make</li>
                    <li>• Three phase supply with dual-source energy meter</li>
                    <li>• EV Charging and Solar Power provision</li>
                  </ul>
                </div>

                {/* Security System */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-indigo-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white font-serif">
                    Security System
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-sans">
                    <li>• CCTV surveillance at entry and exit points</li>
                    <li>• Security cabins with 24/7 monitoring</li>
                    <li>• Intercom facility for all units</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
