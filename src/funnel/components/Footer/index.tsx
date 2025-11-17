"use client";

import { motion } from "framer-motion";
import { menuLinks, socialLinks } from "./data";
import styles from "./style.module.css";

export default function HomeSection() {
  return (
    <main className={styles.main}>
      {/* ===== HERO ===== */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroCard}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Your Next Big Idea <br />
              <span>Starts Here</span>
            </h1>
            <p className={styles.heroText}>
              From concept to final design, we collaborate closely to bring your vision to life with clarity, creativity, and purpose.
            </p>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroButton}
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </motion.div>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          {/* LEFT: Newsletter */}
          <div className={styles.footerLeft}>
            <h3
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "40px",
                fontWeight: 500,
                letterSpacing: "-0.05em",
                lineHeight: "1.2em",
                color: "#28334d",
                margin: 0,
              }}
            >
              Subscribe to our newsletter
            </h3>

            <div className="flex items-center gap-3 w-full max-w-md mt-4">
              <input
                type="email"
                placeholder="name@email.com"
                className="bg-[#f5f6fa] text-[#28334d] px-5 py-3 rounded-full w-full outline-none focus:ring-2 focus:ring-[#dde3ee] placeholder-[#8592b1] text-base transition-all duration-200"
              />
              <button className="bg-[#000000] text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>

          {/* RIGHT: Menu + Social + Floating Button */}
          <div className={styles.footerRight}>
            {/* MENU */}
            <div className={styles.footerMenu}>
              <h4 className={styles.footerTitle}>Menu</h4>
              <ul className="flex flex-col gap-3 items-start list-none m-0 p-0">
                {menuLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-[#8592b1] hover:text-[#bababaed] transition-all duration-200 text-[16px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOCIAL */}
            <div className={styles.footerSocial}>
              <h4 className={styles.footerTitle}>Follow Us</h4>
              <ul className="flex flex-col gap-3 items-center list-none m-0 p-0">
                {socialLinks.map((social, idx) => (
                  <li key={idx}>
                    <a
                      href={social.href}
                      className="text-[#8592b1] hover:text-[#bababaed] transition-all duration-200 text-[16px]"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* FLOATING BUTTON */}
            <div className={styles.footerButton}>
              <a
                href="#hero"
                className="bg-black hover:bg-[#3c3c3c] text-white w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p>© Picasso Fusion 2024. All rights reserved</p>
          <p>Designed for you by Picasso Fusion</p>
        </div>
      </footer>
    </main>
  );
}
