import type { Metadata } from "next";
import Hero from "@/funnel/components/Hero/page";
import About from "@/funnel/components/About/page";
import FeaturedWork from "@/funnel/components/FeaturedWork/page";
import Testimonials from "@/funnel/components/Testimonials/page";
import Service from "@/funnel/components/Benefits/page";
import Benefit from "@/funnel/components/Process/page";
import Pricing from "@/funnel/components/Pricing/index";
import FaqPage from "@/funnel/components/FaqPage/page";
// import Dribble from "@/funnel/components/Dribbble/Dribble";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Picasso Fusion. Create, explore, and innovate with our digital art platform.",
  alternates: {
    canonical: "https://picasso-fusion.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedWork />
      <Service />
      <Benefit />
      <Testimonials />
      <Pricing />
      {/* <Dribble /> */}
    </>
  );
}