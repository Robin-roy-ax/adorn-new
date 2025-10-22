// components/Home/index.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { menuLinks, socialLinks } from "./data";
import styles from "./style.module.css";

export default function HomeSection() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroCard}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Let&apos;s Create Your <br />
              <span>Dream Project</span>
            </h1>
            <p className={styles.heroText}>
              Our team is here to help you succeed. Let&apos;s work together to achieve your goals and elevate your brand to new heights.
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

          {/* Decorative images (hidden/blurred) */}
          <motion.div className="absolute inset-0" style={{ filter: "blur(25px)", opacity: 0 }}>
            <Image
              src="https://framerusercontent.com/images/F7z8b78ieeXJk8cetLjYCwi6gUY.png?scale-down-to=1024"
              alt=""
              fill
              className="object-cover object-center rounded-[20px]"
              aria-hidden
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          {/* Newsletter */}
          <div className="footerSection">
            <h3>Subscribe to our newsletter</h3>
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="name@email.com"
                className="bg-gray-100 text-gray-700 px-5 py-3 rounded-full w-full outline-none focus:ring-2 focus:ring-gray-300 text-base"
              />
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 text-base">
                Subscribe
              </button>
            </div>
          </div>

          {/* Menu */}
          <div className="footerSection">
            <h4>Menu</h4>
            <ul className={styles.footerLinks}>
              {menuLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="footerSection">
            <h4>Follow Us</h4>
            <ul className={styles.socialLinks}>
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a href={social.href}>{social.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© Picasso Fusion 2024. All rights reserved</p>
          <p>
            Designed by{" "}
            <a href="#" className="underline hover:text-gray-700">
              Aalay Rasool
            </a>
          </p>
          <p>Built in Framer</p>
        </div>
      </footer>
    </main>
  );
}
