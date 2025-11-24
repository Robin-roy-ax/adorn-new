"use client";

import Hero from "@/funnel/components/Hero/page";
import About from "@/funnel/components/About/page";
import FeaturedWork from "@/funnel/components/FeaturedWork/page";
import Testimonials from "@/funnel/components/Testimonials/page";
import Service from "@/funnel/components/Benefits/page";
import Benefit from "@/funnel/components/Process/page";
import Pricing from "@/funnel/components/Pricing/index";
import FaqPage from "@/funnel/components/FaqPage/page";

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
      <FaqPage />
    </>
  );
}