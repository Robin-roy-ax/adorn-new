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
import WorkSection from "@/funnel/components/Work/page";
import Foot from "@/funnel/components/Foot/page";
import AboutUs from "@/funnel/components/common/AboutUs";
import Arch from "@/funnel/components/Projects/Arch";

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
      <Nav
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

      {/* Pricing Section */}
      {activeSection === "pricing" && (
        <div id="pricing" className="bg-white">
          <Pricing variant="compare" />
        </div>
      )}

      {/* Faq + Footer */}
      <Faq />
      <Foot />
      <Arch />
    </>
  );
}
