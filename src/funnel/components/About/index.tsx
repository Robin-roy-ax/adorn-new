"use client";

import { motion } from "framer-motion";
import { aboutContent } from "./data";
import styles from "./style.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      {/* Text Block */}
      <motion.div
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {aboutContent.heading.map((text, idx) => (
          <span
            key={idx}
            className={idx % 2 !== 0 ? styles.gradientText : undefined}
          >
            {text}
          </span>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        className={styles.mt10}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <button className={styles.button}>{aboutContent.buttonText}</button>
      </motion.div>
    </section>
  );
}
