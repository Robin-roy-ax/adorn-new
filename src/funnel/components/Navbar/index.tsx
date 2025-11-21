"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS, CTA_BUTTON_TEXT, LOGO_IMAGE } from "./data";
import styles from "./style.module.css";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

interface NavbarProps {
  onMenuClick: (id: string) => void;
  showWorkSection: boolean;
}

export default function Navbar({ onMenuClick, showWorkSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inHero, setInHero] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(true);
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
  }, [showWorkSection, isProjectPage]);

  const menuColor = inHero ? "#fff" : "#000";
  const navbarClass = inHero ? styles.navbarHero : styles.navbarDefault;
  const logoClass = inHero ? styles.logoSectionHero : styles.logoSectionDefault;
  const desktopBtnClass = inHero
    ? `${styles.desktopButton} ${styles.heroButton}`
    : `${styles.desktopButton} ${styles.defaultButton}`;

  const visibilityClass = navbarVisible ? styles.navbarVisible : styles.navbarHidden;

  const handleNavigation = (id: string) => {
    setMobileOpen(false);

    if (pathname !== "/") {
      sessionStorage.setItem("targetSection", id);
      router.push(`/#${id}`);
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    } else {
      router.push(`/#${id}`);
    }

    onMenuClick(id);
  };

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
    }
    
    const fromLogo = sessionStorage.getItem("scrollToHero");
    if (fromLogo) {
      sessionStorage.removeItem("scrollToHero");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }
  }, [pathname]);

  const handleLogoClick = () => {
    setMobileOpen(false);
    onMenuClick("home");
  
    if (pathname !== "/") {
      sessionStorage.setItem("scrollToHero", "true");
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <nav className={`${styles.navbar} ${navbarClass} ${visibilityClass} ${mobileOpen ? styles.navbarExpanded : ''}`}>
      <div className={styles.navbarTop}>
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className={`${styles.logoSection} ${logoClass}`}
        >
          <Image src={LOGO_IMAGE} alt="Logo" width={100} height={100} />
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
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavigation(item.id)}
                  className={styles.mobileMenuItem}
                >
                  {item.label}
                </motion.button>
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