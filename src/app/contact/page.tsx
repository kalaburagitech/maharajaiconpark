import type { Metadata } from "next";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Maharaja Ikon Park | Luxury Villas in Bangalore",
  description:
    "Connect with Maharaja Ikon Park for premium villa bookings in Devanahalli, Bangalore. Expert assistance for your luxury home investment near Kempegowda International Airport.",
  keywords: [
    "contact Maharaja Ikon Park",
    "luxury villa booking",
    "Devanahalli property enquiry",
    "Bangalore real estate contact",
    "premium villa sales",
  ],
  alternates: {
    canonical: "https://maharajaiconpark.com/contact",
  },
  openGraph: {
    title: "Contact Maharaja Ikon Park | Luxury Villas in Bangalore",
    description:
      "Connect with us for premium villa bookings in Devanahalli, Bangalore.",
    url: "https://maharajaiconpark.com/contact",
    images: [
      {
        url: "https://maharajaiconpark.com/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Maharaja Ikon Park",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Script id="contact-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Maharaja Ikon Park",
            "image": "https://maharajaiconpark.com/logo.png",
            "description": "Luxury villa project in Devanahalli, Bangalore",
            "@id": "https://maharajaiconpark.com",
            "url": "https://maharajaiconpark.com/contact",
            "telephone": "+919945264555",
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
            "openingHoursSpecification": {
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
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919945264555",
              "contactType": "sales",
              "areaServed": "Bangalore",
              "availableLanguage": ["English", "Hindi", "Kannada"]
            }
          }
        `}
      </Script>
      <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
                  Contact Us
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  We&apos;re here to answer any questions you may have about
                  Maharaja Ikon Park. Our dedicated team is committed to
                  providing you with exceptional service and guiding you through
                  every step of your journey towards luxury living. Reach out to
                  us today and experience the Maharaja difference.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Address
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Devanahalli, Bangalore,
                        <br />
                        Karnataka - 562110
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Phone
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a
                          href="tel:+919945264555"
                          className="hover:text-primary"
                        >
                          +91 99452 64555
                        </a>
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Email
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a
                          href="mailto:info@maharajaikonpark.com"
                          className="hover:text-primary"
                        >
                          info@maharajaikonpark.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Business Hours
                  </h2>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>Monday - Sunday: 9:00 AM - 6:00 PM</p>
                    <p>Site Visits: By Appointment</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Contact />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
