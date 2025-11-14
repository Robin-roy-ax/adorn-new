"use client";

import { useState, useEffect } from "react";

import Navbar from "@/funnel/components/Navbar/page";
import Hero from "@/funnel/components/Hero/page";
import About from "@/funnel/components/About/page";
import FeaturedWork from "@/funnel/components/FeaturedWork/page";
import Testimonials from "@/funnel/components/Testimonials/page";
import Service from "@/funnel/components/Service/page";
import Benefit from "@/funnel/components/Benefit/page";
import Pricing from "@/funnel/components/Pricing/index";
import FaqPage from "@/funnel/components/FaqPage/page";
import WorkSection from "@/funnel/components/Work/page";
import Footer from "@/funnel/components/Footer/page";
import AboutUs from "@/funnel/components/AboutUS/page";



export default function Home() {
  const [activeSection, setActiveSection] = useState<
    "default" | "work" | "pricing" | "about"
  >("default");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPosition = sessionStorage.getItem("scrollPosition");
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }

      const hash = window.location.hash.replace("#", "");
      if (hash === "work" || hash === "pricing" || hash === "about") {
        setActiveSection(hash as "work" | "pricing" | "about");
      } else {
        setActiveSection("default");
      }

      const handleBeforeUnload = () => {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString());
      };
      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);

  const handleMenuClick = (id: string) => {
    if (id === "work" || id === "pricing" || id === "about") {
      setActiveSection(id as "work" | "pricing" | "about");
      window.history.replaceState(null, "", `#${id}`);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    } else if (id === "home") {
      setActiveSection("default");
      window.history.replaceState(null, "", "/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    } else {
      setActiveSection("default");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.history.replaceState(null, "", " ");
    }
  };

  return (
    <>
      <Navbar
        onMenuClick={handleMenuClick}
        showWorkSection={
          activeSection === "work" ||
          activeSection === "pricing" ||
          activeSection === "about"
        }
      />

      {/* Default Home View */}
      {activeSection === "default" && (
        <>
          <Hero />
          <About />
          <FeaturedWork />
          <Testimonials />
          <Service />
          <Benefit />
          <Pricing />
        </>
      )}

      {/* Work Section */}
      {activeSection === "work" && <WorkSection />}

      {/* About Section */}
      {activeSection === "about" && <AboutUs />}

      {/* Pricing Section */}
      {activeSection === "pricing" && (
        <div id="pricing" className="bg-white">
          <Pricing variant="compare" />
        </div>
      )}

      {/* Faq + Footer */}
      <FaqPage />
      <Footer />
    </>
  );
}
