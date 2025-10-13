"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { navbarItems } from "./data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${
        scrolled ? styles.navScrolled : styles.navTop
      }`}
    >
      {/* Left - Logo */}
<button
  onClick={() => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: scroll to top if the Hero section isn't found
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }}
  className={`flex items-center space-x-2 pr-4 border-r transition-colors duration-500 cursor-pointer focus:outline-none
    ${scrolled ? "border-black/10" : "border-white/20"}`}
  aria-label="Scroll to top / Hero section"
>
  <span className="text-2xl">✻</span>
  <span className="font-semibold text-lg">Picasso Fusion</span>
</button>

      {/* Middle - Menu Links */}
      <div className={styles.menu}>
        {navbarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScrollTo(item.id)}
            className={`${styles.link} ${
              scrolled ? styles.linkScrolled : styles.linkTop
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Right - Button */}
      <div className={`${styles.ctaContainer} ${scrolled ? styles.borderDark : styles.borderLight}`}>
        <button
          className={`${styles.ctaButton} ${
            scrolled ? styles.ctaScrolled : styles.ctaTop
          }`}
        >
          Get it for $49
        </button>
      </div>
    </nav>
  );
}
