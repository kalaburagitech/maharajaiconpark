import type { Metadata } from "next";
import Features from "@/components/features";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import AnimatedHero from "@/components/animated-hero";

export const metadata: Metadata = {
  title: "Premium Villa Features in Bangalore | MaharajaIconPark",
  description:
    "Explore premium features of 4BHK triplex villas at Maharaja Icon Park. Modern design, luxury specifications, and world-class amenities in Devanahalli, Bangalore.",
  keywords: [
    "luxury villa features",
    "premium villa specifications",
    "4BHK triplex villas",
    "Devanahalli luxury homes",
    "Bangalore premium properties",
  ],
  alternates: {
    canonical: "https://maharajaiconpark.com/features",
  },
  openGraph: {
    title: "Premium Villa Features in Bangalore | MaharajaIconPark",
    description:
      "Explore premium features of 4BHK triplex villas at Maharaja Icon Park.",
    url: "https://maharajaiconpark.com/features",
    images: [
      {
        url: "https://maharajaiconpark.com/features.png",
        width: 1200,
        height: 630,
        alt: "Premium Features at Maharaja Icon Park",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Script id="features-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Maharaja Icon Park Luxury Villas",
            "description": "Premium 4BHK triplex villas with world-class features",
            "brand": {
              "@type": "Brand",
              "name": "Maharaja Icon Park"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "priceRange": "₹2.5 Cr - ₹3.5 Cr",
              "availability": "https://schema.org/InStock"
            },
            "image": "https://maharajaiconpark.com/features.png",
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Bedrooms",
                "value": "4"
              },
              {
                "@type": "PropertyValue",
                "name": "Property Type",
                "value": "Triplex Villa"
              },
              {
                "@type": "PropertyValue",
                "name": "Location",
                "value": "Devanahalli, Bangalore"
              }
            ]
          }
        `}
      </Script>
      <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedHero
              title="Iconic Features"
              description="Discover the extraordinary features that make Maharaja Icon Park a truly iconic living experience. Our commitment to excellence is reflected in every aspect of this prestigious development, from its strategic location to its luxurious amenities."
            />
            <Features />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
