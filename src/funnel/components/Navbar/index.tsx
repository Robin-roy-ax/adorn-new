"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS, CTA_BUTTON_TEXT, LOGO_IMAGE } from "./data";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inHero, setInHero] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");

  useEffect(() => {
    // Check if we are on the home page
    const isHomePage = pathname === "/";
    
    if (!isHomePage) {
      setInHero(false);
      return;
    }

    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      setInHero(hero.getBoundingClientRect().bottom > 0);

      const workSection = document.getElementById("work");
      const footerSection = document.querySelector("footer");

      let shouldHide = false;

      if (workSection) {
        const workRect = workSection.getBoundingClientRect();
        if (workRect.top <= 0 && workRect.bottom > window.innerHeight * 0.5) {
          shouldHide = true;
        }
      }

      if (footerSection) {
        const footerRect = footerSection.getBoundingClientRect();
        if (footerRect.top >= 0 && footerRect.top < window.innerHeight) {
          shouldHide = true;
        }
      }

      setNavbarVisible(!shouldHide);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isProjectPage]);

  const menuColor = inHero ? "#fff" : "#000";
  const navbarClass = inHero ? styles.navbarHero : styles.navbarDefault;
  const logoClass = inHero ? styles.logoSectionHero : styles.logoSectionDefault;
  const desktopBtnClass = inHero
    ? `${styles.desktopButton} ${styles.heroButton}`
    : `${styles.desktopButton} ${styles.defaultButton}`;

  const visibilityClass = navbarVisible ? styles.navbarVisible : styles.navbarHidden;

  // Navigation logic replaced by Next.js Link
  // sessionStorage logic removed as Next.js Link handles hash navigation

  return (
    <nav className={`${styles.navbar} ${navbarClass} ${visibilityClass} ${mobileOpen ? styles.navbarExpanded : ''}`}>
      <div className={styles.navbarTop}>
        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            setMobileOpen(false);
          }}
          className={`${styles.logoSection} ${logoClass}`}
        >
          <Image src={LOGO_IMAGE} alt="Logo" width={100} height={100} />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={styles.menuLink}
              style={{ color: menuColor }}
            >
              {item.label}
            </Link>
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
              href="https://app.picassofusion.com/login?_gl=1*18t62o4*_ga*OTE2MzM2MzI1LjE3NjI0MDgyNzg.*_ga_8S104JGWHM*czE3NjM3MDI3MzAkbzgkZzAkdDE3NjM3MDI3MzAkajYwJGwwJGgw"
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
      </div>

      {/* Mobile Menu Expanded Content */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.mobileMenuExpanded}
          >
            <div className={styles.mobileMenuDivider} />
            
            <div className={styles.mobileMenuLinks}>
              {MENU_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setMobileOpen(false);
                    }}
                    className={styles.mobileMenuItem}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              href="https://app.picassofusion.com/login?_gl=1*18t62o4*_ga*OTE2MzM2MzI1LjE3NjI0MDgyNzg.*_ga_8S104JGWHM*czE3NjM3MDI3MzAkbzgkZzAkdDE3NjM3MDI3MzAkajYwJGwwJGgw"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileMenuCTA}
            >
              {CTA_BUTTON_TEXT}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}