import Navbar from "@/funnel/components/Navbar";
import Hero from "@/funnel/components/Hero";
import About from "@/funnel/components/About";
import FeaturedWork from "@/funnel/components/FeaturedWork";
import Testimonials from "@/funnel/components/Testimonials";
import Services from "@/funnel/components/Services";
import Benefits from "@/funnel/components/Benefits";
import PricingSection from "@/funnel/components/PricingSection";
import Faq from "@/funnel/components/Faq";
import Footer from "@/funnel/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedWork />
      <Testimonials />
      <Services />
      <Benefits />
      <PricingSection />
      <Faq />
      <Footer />
    </>
  );
}
