"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS, LOGO_TEXT, CTA_BUTTON_TEXT, LOGO_SYMBOL } from "./data";
import styles from "./style.module.css";
import { useRouter, usePathname } from "next/navigation";

interface NavbarProps {
  onMenuClick: (id: string) => void;
  showWorkSection: boolean;
}

export default function Navbar({ onMenuClick, showWorkSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inHero, setInHero] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");

  useEffect(() => {
    if (showWorkSection || isProjectPage) {
      setInHero(false);
      return;
    }

    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      setInHero(hero.getBoundingClientRect().bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showWorkSection, isProjectPage]);

  const menuColor = inHero ? "#fff" : "#000";
  const navbarClass = inHero ? styles.navbarHero : styles.navbarDefault;
  const logoClass = inHero ? styles.logoSectionHero : styles.logoSectionDefault;
  const desktopBtnClass = inHero
    ? `${styles.desktopButton} ${styles.heroButton}`
    : `${styles.desktopButton} ${styles.defaultButton}`;
  const mobileBtnClass = inHero
    ? styles.mobileButtonHero
    : styles.mobileButtonDefault;

  // ✅ Updated: Smooth scroll + hash support + instant scroll on home
  const handleNavigation = (id: string) => {
    setMobileOpen(false);

    if (pathname !== "/") {
      // Go home first, store hash in session, then scroll
      sessionStorage.setItem("targetSection", id);
      router.push(`/#${id}`);
      return;
    }

    // On homepage already — just scroll directly
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    } else {
      router.push(`/#${id}`);
    }

    onMenuClick(id);
  };

  // ✅ After returning from project pages — handle auto-scroll to saved section
  useEffect(() => {
    const targetSection = sessionStorage.getItem("targetSection");
    if (targetSection && pathname === "/") {
      sessionStorage.removeItem("targetSection");
      const section = document.getElementById(targetSection);
      if (section) {
        setTimeout(
          () => section.scrollIntoView({ behavior: "smooth" }),
          50
        );
      }
       // ✅ NEW: If user clicked the logo, always scroll to top (Hero)
    const fromLogo = sessionStorage.getItem("scrollToHero");
    if (fromLogo) {
      sessionStorage.removeItem("scrollToHero");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }
    }
  }, [pathname]);

  const handleLogoClick = () => {
    setMobileOpen(false);
    onMenuClick("home");
  
    if (pathname !== "/") {
      // Mark intent to scroll to hero after returning
      sessionStorage.setItem("scrollToHero", "true");
      router.push("/");
    } else {
      // Already on home → scroll immediately
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <nav className={`${styles.navbar} ${navbarClass}`}>
      {/* Logo */}
      <div
        onClick={handleLogoClick}
        className={`${styles.logoSection} ${logoClass}`}
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

      {/* Right Section: CTA + Hamburger */}
      <div className={styles.rightSection}>
        <div
          className={`${styles.desktopButtonSection} ${
            inHero
              ? styles.desktopButtonSectionHero
              : styles.desktopButtonSectionDefault
          }`}
        >
          <a
            href="https://aalayrasool.lemonsqueezy.com/buy/0d653898-9e3c-4899-9612-2b7d950d53f6"
            target="_blank"
            rel="noopener noreferrer"
            className={desktopBtnClass}
          >
            {CTA_BUTTON_TEXT}
          </a>
        </div>

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

      {/* Mobile Menu Dropdown */}
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
              className={mobileBtnClass}
            >
              {CTA_BUTTON_TEXT}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
