import type { Metadata } from "next";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Luxury Villa Gallery in Bangalore | MaharajaIconPark",
  description:
    "View our gallery of luxury 4BHK triplex villas at Maharaja Icon Park. Explore premium interiors, modern architecture, and world-class amenities in Devanahalli, Bangalore.",
  keywords: [
    "luxury villa gallery",
    "premium villa images",
    "Devanahalli property photos",
    "Bangalore luxury homes pictures",
    "MaharajaIconPark gallery",
  ],
  alternates: {
    canonical: "https://maharajaiconpark.com/gallery",
  },
  openGraph: {
    title: "Luxury Villa Gallery in Bangalore | MaharajaIconPark",
    description:
      "View our gallery of luxury 4BHK triplex villas at Maharaja Icon Park.",
    url: "https://maharajaiconpark.com/gallery",
    images: [
      {
        url: "https://maharajaiconpark.com/Full_image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Villas at Maharaja Icon Park",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Script id="gallery-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Maharaja Icon Park Villa Gallery",
            "description": "Gallery of luxury villas at Maharaja Icon Park, Devanahalli",
            "url": "https://maharajaiconpark.com/gallery",
            "image": [
              {
                "@type": "ImageObject",
                "url": "https://maharajaiconpark.com/gallery/Full_image.jpg",
                "name": "Villa Exterior View",
                "description": "Luxurious exterior view of Maharaja Icon Park villas"
              },
              {
                "@type": "ImageObject",
                "url": "https://maharajaiconpark.com/gallery/Full_image.jpg",
                "name": "Luxury Interior",
                "description": "Premium interior finishes of our 4BHK villas"
              }
            ],
            "about": {
              "@type": "RealEstateListing",
              "name": "Maharaja Icon Park Luxury Villas",
              "description": "Premium 4BHK triplex villas in Devanahalli, Bangalore"
            }
          }
        `}
      </Script>
      <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
                Gallery
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Immerse yourself in the visual splendor of Maharaja Icon Park.
                Our gallery showcases the exquisite architecture, lush
                landscapes, and luxurious interiors that define our iconic
                development. Each image tells a story of elegance, comfort, and
                unparalleled living experiences.
              </p>
            </AnimatedSection>

            {/* Gallery Grid */}
            <div className="mb-20">
              <Gallery />
            </div>

            {/* Virtual Tour Section
            <AnimatedSection className="mt-20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Take a Virtual Tour
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Experience our luxury villas from the comfort of your home with
                our immersive virtual tour.
              </p>
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/Full_image.jpg"
                  alt="Virtual Tour of Maharaja Icon Park"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                  className="object-cover cursor-pointer transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Start Virtual Tour
                  </button>
                </div>
              </div>
            </AnimatedSection> */}

            {/* Download Brochure */}
            <AnimatedSection className="mt-20 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Download Brochure
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Get detailed information about our luxury villas and amenities
                in our comprehensive brochure.
              </p>
              <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Download Brochure
              </button>
            </AnimatedSection>

            {/* Image Optimization Notice for SEO */}
            <div className="sr-only">
              <h2>Image Gallery Information</h2>
              <p>
                Our gallery features high-resolution images of luxury villas in
                Devanahalli, Bangalore. View our premium 4BHK triplex villas,
                including exterior designs, interior layouts, and world-class
                amenities. Each image is optimized for quality and fast loading.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
