import type { Metadata } from "next";
import Hero from "@/funnel/components/Hero/page";
import About from "@/funnel/components/About/page";
import Testimonials from "@/funnel/components/Testimonials/page";
import Service from "@/funnel/components/Benefits/page";
import Benefit from "@/funnel/components/Process/page";
import Pricing from "@/funnel/components/Pricing/index";
import FaqPage from "@/funnel/components/FaqPage/page";
import Footer from "@/funnel/components/Footer/page";
import Navbar from "@/funnel/components/Navbar/page";

export const metadata: Metadata = {
  title: "Hero",
  description: "Welcome to Picasso Fusion. Create, explore, and innovate with our digital art platform.",
  alternates: {
    canonical: "https://picasso-fusion.vercel.app/hero",
  },
};

export default function HeroPage() {
  return <>
    <Navbar />
    <Hero />
    <About />
    <Testimonials />
    <Service />
    <Benefit />
    <Pricing />
    <FaqPage />
    <Footer />
    </>;
}
