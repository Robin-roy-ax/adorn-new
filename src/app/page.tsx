"use client";

import { useState, useEffect, useRef } from "react";

import Navbar from "@/funnel/components/Navbar/page";
import Hero from "@/funnel/components/Hero/page";
import About from "@/funnel/components/About/page";
import FeaturedWork from "@/funnel/components/FeaturedWork/page";
import Testimonials from "@/funnel/components/Testimonials/page";
import Service from "@/funnel/components/Benefits/page";
import Benefit from "@/funnel/components/Process/page";
import Pricing from "@/funnel/components/Pricing/index";
import FaqPage from "@/funnel/components/FaqPage/page";
import WorkSection from "@/funnel/components/Work/page";
import Footer from "@/funnel/components/Footer/page";
import AboutUs from "@/funnel/components/AboutUS/page";
// import Dribble from "@/funnel/components/Dribble";

type SectionType = "default" | "work" | "pricing" | "about";

interface ScrollData {
  position: number;
  section: SectionType;
  hash: string;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionType>("default");
  const hasRestoredScroll = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get the hash from URL to determine which section to show
      const hash = window.location.hash.replace("#", "");
      let section: SectionType = "default";
      
      if (hash === "work" || hash === "pricing" || hash === "about") {
        section = hash as SectionType;
      }
      
      setActiveSection(section);

      // Save scroll position before unload
      const handleBeforeUnload = () => {
        const scrollData: ScrollData = {
          position: window.scrollY,
          section: activeSection,
          hash: window.location.hash
        };
        sessionStorage.setItem("scrollData", JSON.stringify(scrollData));
      };
      
      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [activeSection]);

  // Separate effect to restore scroll position after content renders
  useEffect(() => {
    if (typeof window !== "undefined" && !hasRestoredScroll.current) {
      const scrollDataStr = sessionStorage.getItem("scrollData");
      
      if (scrollDataStr) {
        try {
          const scrollData: ScrollData = JSON.parse(scrollDataStr);
          const currentHash = window.location.hash.replace("#", "") || "default";
          const savedSection = scrollData.section || "default";
          
          // Only restore scroll if we're on the same section
          if (currentHash === savedSection || (currentHash === "" && savedSection === "default")) {
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(() => {
              setTimeout(() => {
                window.scrollTo(0, scrollData.position);
                hasRestoredScroll.current = true;
                // Clear the saved position after restoring
                sessionStorage.removeItem("scrollData");
              }, 100);
            });
          } else {
            // Different section, clear saved data
            sessionStorage.removeItem("scrollData");
            hasRestoredScroll.current = true;
          }
        } catch (e) {
          console.error("Error parsing scroll data:", e);
          sessionStorage.removeItem("scrollData");
          hasRestoredScroll.current = true;
        }
      } else {
        hasRestoredScroll.current = true;
      }
    }
  }, [activeSection]);

  const handleMenuClick = (id: string) => {
    // Clear any saved scroll data when navigating
    sessionStorage.removeItem("scrollData");
    
    if (id === "work" || id === "pricing" || id === "about") {
      setActiveSection(id as SectionType);
      window.history.replaceState(null, "", `#${id}`);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    } else if (id === "home") {
      setActiveSection("default");
      window.history.replaceState(null, "", "/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    } else {
      // First switch to default view if not already there
      if (activeSection !== "default") {
        setActiveSection("default");
        window.history.replaceState(null, "", "/");
        
        // Wait for the default sections to render before scrolling
        setTimeout(() => {
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already in default view, just scroll
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.history.replaceState(null, "", "/");
      }
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
          <Service />
          <Benefit />
          <Testimonials />
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
      {/* <Dribble/> */}
    </>
  );
}