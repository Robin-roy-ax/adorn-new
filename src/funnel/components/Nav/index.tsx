"use client";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  MENU_ITEMS,
  menuVariants,
  LOGO_TEXT,
  CTA_BUTTON_TEXT,
  LOGO_SYMBOL,
} from "./data";
import styles from "./style.module.css";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll to section smoothly
  const handleNavigation = (id: string) => {
    setMobileOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  // ✅ Logo click — scroll to top + refresh
const handleLogoClick = () => {
  if (pathname === "/") {
    // Instant scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

  } else {
    router.push("/"); // Navigate to homepage if not already
  }
};

  return (
    <nav
      className={`${styles.navbar} ${
        scrolled ? styles.navbarScrolled : styles.navbarTransparent
      }`}
    >
      {/* ✅ Logo */}
      <div
        onClick={handleLogoClick}
        className={`${styles.logoSection} ${
          scrolled ? styles.logoSectionScrolled : styles.logoSectionTransparent
        }`}
        style={{ cursor: "pointer" }}
      >
        <span className={styles.logoSymbol}>{LOGO_SYMBOL}</span>
        <span className={styles.logoText}>{LOGO_TEXT}</span>
      </div>

      {/* ✅ Desktop Menu */}
      <div className={styles.desktopMenu}>
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className={`${styles.menuLink} ${
              scrolled ? styles.menuLinkScrolled : styles.menuLinkTransparent
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ✅ Right Section */}
      <div className={styles.rightSection}>
        {/* Desktop Button */}
        <div className={styles.desktopButtonSection}>
          <button
            className={`${styles.desktopButton} ${
              scrolled
                ? styles.desktopButtonScrolled
                : styles.desktopButtonTransparent
            }`}
          >
            {CTA_BUTTON_TEXT}
          </button>
        </div>

        {/* ✅ Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          className={styles.mobileHamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`${styles.hamburgerLine} ${
              mobileOpen ? styles.hamburgerLineOpen1 : ""
            }`}
          />
          <span
            className={`${styles.hamburgerLine} ${
              mobileOpen ? styles.hamburgerLineOpen2 : ""
            }`}
          />
          <span
            className={`${styles.hamburgerLine} ${
              mobileOpen ? styles.hamburgerLineOpen3 : ""
            }`}
          />
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.4 }}
            className={styles.mobileMenu}
          >
            {MENU_ITEMS.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                custom={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                className={styles.mobileMenuLink}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: MENU_ITEMS.length * 0.1,
                type: "spring",
                stiffness: 300,
              }}
              className={styles.mobileButton}
              onClick={() => setMobileOpen(false)}
            >
              {CTA_BUTTON_TEXT}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
