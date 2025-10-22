"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS, LOGO_TEXT, CTA_BUTTON_TEXT, LOGO_SYMBOL } from "./data";
import styles from "./style.module.css";
import { useRouter, usePathname } from "next/navigation";

interface NavbarProps {
  onMenuClick: (id: string) => void;
  showWorkSection: boolean; // true for work, pricing, about
}

export default function Navbar({ onMenuClick, showWorkSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inHero, setInHero] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (showWorkSection) {
      setInHero(false); // dark nav for work/pricing/about
      return;
    }

    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (!heroSection) return;
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      setInHero(heroBottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showWorkSection]);

  const menuColor = inHero ? "#fff" : "#000";
  const navbarClass = inHero ? styles.navbarHero : styles.navbarDefault;
  const logoSectionClass = inHero ? styles.logoSectionHero : styles.logoSectionDefault;

  const desktopButtonClass = inHero
    ? `${styles.desktopButton} ${styles.heroButton}`
    : `${styles.desktopButton} ${styles.defaultButton}`;

  const mobileButtonClass = inHero
    ? `${styles.mobileButtonHero}`
    : `${styles.mobileButtonDefault}`;

  const handleNavigation = (id: string) => {
    setMobileOpen(false);
    onMenuClick(id);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    else router.push(`/#${id}`);
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
    onMenuClick("home"); // ✅ Now triggers Hero scroll
  };

  return (
    <nav className={`${styles.navbar} ${navbarClass}`}>
      {/* Logo */}
      <div
        onClick={handleLogoClick}
        className={`${styles.logoSection} ${logoSectionClass}`}
        style={{ color: menuColor }}
      >
        <span>{LOGO_SYMBOL}</span>
        <span>{LOGO_TEXT}</span>
      </div>

      {/* Desktop Menu */}
      <div className={styles.desktopMenu}>
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className={styles.menuLink}
            style={{ color: menuColor }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* CTA + Hamburger */}
      <div className={styles.rightSection}>
        <div className={styles.desktopButtonSection}>
          <a
            href="https://aalayrasool.lemonsqueezy.com/buy/0d653898-9e3c-4899-9612-2b7d950d53f6"
            target="_blank"
            rel="noopener noreferrer"
            className={desktopButtonClass}
          >
            {CTA_BUTTON_TEXT}
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className={styles.mobileHamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineOpen1 : ""}`} />
          <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineOpen2 : ""}`} />
          <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineOpen3 : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
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
            {MENU_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={styles.mobileMenuLink}
                style={{ color: menuColor }}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.a
              href="https://aalayrasool.lemonsqueezy.com/buy/0d653898-9e3c-4899-9612-2b7d950d53f6"
              target="_blank"
              rel="noopener noreferrer"
              className={mobileButtonClass}
            >
              {CTA_BUTTON_TEXT}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
