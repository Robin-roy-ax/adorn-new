"use client";

import { motion } from "framer-motion";
import styles from "./style.module.css";
import { heroSection, footerSections } from "./data";

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.hero}
      >
        <h1 className={styles.heroTitle}>
          {heroSection.title} <span className={styles.heroHighlight}>{heroSection.highlight}</span>
        </h1>
        <p className={styles.heroDescription}>{heroSection.description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.heroButton}
        >
          {heroSection.buttonText}
        </motion.button>
      </motion.section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          {/* Newsletter */}
          <div>
            <h3 className={styles.footerTitle}>{footerSections.newsletter.title}</h3>
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder={footerSections.newsletter.placeholder}
                className={styles.footerInput}
              />
              <button className={styles.footerButton}>{footerSections.newsletter.buttonText}</button>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className={styles.footerSubtitle}>Menu</h4>
            <ul className="space-y-3">
              {footerSections.menu.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className={styles.footerLink}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className={styles.footerSubtitle}>Follow Us</h4>
            <ul className="space-y-3">
              {footerSections.social.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className={styles.footerLink}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p>{footerSections.copyright}</p>
          <p>
            Designed by{" "}
            <a href={footerSections.designedBy.href} className={styles.footerLink}>
              {footerSections.designedBy.name}
            </a>
          </p>
          <p>{footerSections.builtWith}</p>
        </div>
      </footer>
    </main>
  );
}
