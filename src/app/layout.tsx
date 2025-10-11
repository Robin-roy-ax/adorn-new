import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
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

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Picasso",
  description: "Picasso Fusion is a platform that allows users to create their own digital art.",
};

export default function RootLayout({
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
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
      </body>
    </html>
  );
}