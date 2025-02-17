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
// import Testimonials from "@/components/testimonials";
import WhyInvest from "@/components/why-invest";

export default function Home() {
  return (
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
  );
}
