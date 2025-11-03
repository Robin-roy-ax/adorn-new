"use client";

import { useState, useEffect } from "react";
import Navbar from "@/funnel/components/Navbar/page";
import FaqPage from "@/funnel/components/FaqPage/page";
import Footer from "@/funnel/components/Footer";

export default function ProjectClient({ ProjectComponent }: { ProjectComponent: React.ComponentType }) {
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
      <ProjectComponent />
      <FaqPage />
      <Footer />
    </>
  );
}
