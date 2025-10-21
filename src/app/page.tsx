"use client";

import { useState, useEffect } from "react";

import Nav from "@/funnel/components/Nav/page";
import Her from "@/funnel/components/Her/page";
import Abo from "@/funnel/components/Abo/page";
import FeaturedWork from "@/funnel/components/FeaturedWork/page";
import Test from "@/funnel/components/Test/page";
import Service from "@/funnel/components/Service/page";
import Benefit from "@/funnel/components/Benefit/page";
import Pricing from "@/funnel/components/Pricing/index";
import Faq from "@/funnel/components/Faq/page";
import WorkSection from "@/funnel/components/common/WorkSection";
import Foot from "@/funnel/components/Foot/page";
import AboutUs from "@/funnel/components/common/AboutUs";


export default function Home() {
  const [activeSection, setActiveSection] = useState<"default" | "work" | "pricing" | "about">("default");

  // ✅ Check URL hash on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash === "work") setActiveSection("work");
      if (hash === "pricing") setActiveSection("pricing");
      if (hash === "about") setActiveSection("about");
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuClick = (id: string) => {
    if (id === "work") {
      setActiveSection("work");
      window.history.replaceState(null, "", "#work");
      // scroll to top of new view
      setTimeout(() => scrollToTop(), 50);
    } else if (id === "pricing") {
      setActiveSection("pricing");
      window.history.replaceState(null, "", "#pricing");
      // scroll to top of pricing view
      setTimeout(() => scrollToTop(), 50);
    } else if (id === "about") {
      setActiveSection("about");
      window.history.replaceState(null, "", "#about");
      // scroll to top of about view
      setTimeout(() => scrollToTop(), 50);
    } else {
      setActiveSection("default");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        scrollToTop();
      }
      window.history.replaceState(null, "", " ");
    }
  };

  return (
    <>
      <Nav
        onMenuClick={handleMenuClick}
        showWorkSection={activeSection === "work" || activeSection === "pricing" || activeSection === "about"}
      />

      
      

      {/* Default View */}
      {activeSection === "default" && (
        <>
          <Her />
          <Abo />
          <FeaturedWork />
          <Test />
          <Service />
          <Benefit />
          <Pricing />
        </>
      )}

      {/* Work Section */}
      {activeSection === "work" && <WorkSection />}

      {/* About Section */}
      {activeSection === "about" && <AboutUs />}

      {/* Pricing Section behaves like WorkSection */}
      {activeSection === "pricing" && (
        <div id="pricing" className="bg-white">
          <Pricing variant="compare" />
        </div>
      )}

      {/* Faq + Footer always below work/pricing */}
      {(activeSection === "work" || activeSection === "pricing" || activeSection === "about") && (
        <>
          <Faq />
          <Foot />
        </>
      )}

      {/* Default footer + faq at end of page */}
      {activeSection === "default" && (
        <>
          <Faq />
          <Foot />
        </>
      )}
    </>
  );
}
