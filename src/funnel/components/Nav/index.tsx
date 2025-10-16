"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS, menuVariants, LOGO_TEXT, CTA_BUTTON_TEXT, LOGO_SYMBOL } from "./data";
import styles from "./style.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    handleScroll(); // initial check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        scrolled ? styles.navbarScrolled : styles.navbarTransparent
      }`}
    >
      {/* Logo */}
      <div className={`${styles.logoSection} ${
        scrolled ? styles.logoSectionScrolled : styles.logoSectionTransparent
      }`}>
        <span className={styles.logoSymbol}>{LOGO_SYMBOL}</span>
        <span className={styles.logoText}>{LOGO_TEXT}</span>
      </div>

      {/* Desktop Menu */}
      <div className={styles.desktopMenu}>
        {MENU_ITEMS.map((item) => (
          <Link
            key={item}
            href="#"
            className={`${styles.menuLink} ${
              scrolled ? styles.menuLinkScrolled : styles.menuLinkTransparent
            }`}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right Section: Desktop Button + Mobile Hamburger */}
      <div className={styles.rightSection}>
        {/* Desktop Button */}
        <div className={styles.desktopButtonSection}>
          <button
            className={`${styles.desktopButton} ${
              scrolled ? styles.desktopButtonScrolled : styles.desktopButtonTransparent
            }`}
          >
            {CTA_BUTTON_TEXT}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          className={styles.mobileHamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`${styles.hamburgerLine} ${
            mobileOpen ? styles.hamburgerLineOpen1 : ""
          }`} />
          <span className={`${styles.hamburgerLine} ${
            mobileOpen ? styles.hamburgerLineOpen2 : ""
          }`} />
          <span className={`${styles.hamburgerLine} ${
            mobileOpen ? styles.hamburgerLineOpen3 : ""
          }`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
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
              <motion.a
                key={item}
                custom={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                href="#"
                className={styles.mobileMenuLink}
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </motion.a>
            ))}

            {/* Mobile Button */}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: MENU_ITEMS.length * 0.1, type: "spring", stiffness: 300 }}
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
