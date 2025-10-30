"use client";

import { motion } from "framer-motion";
import { ABOUT_TEXT, ABOUT_BUTTON_TEXT, ABOUT_ANIMATIONS } from "./data";
import styles from "./style.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      {/* Text Block */}
      <motion.div
        className={styles.aboutTextBlock}
        initial={ABOUT_ANIMATIONS.textBlock.initial}
        animate={ABOUT_ANIMATIONS.textBlock.animate}
        transition={{ duration: ABOUT_ANIMATIONS.textBlock.duration }}
      >
        <h1 className={styles.aboutMainHeading}>
          <span className={styles.aboutTextNormal}>{ABOUT_TEXT.main.part1}</span>{" "}
          <span className={`${styles.aboutTextNormal} ${styles.aboutTextGradient}`}>
            {ABOUT_TEXT.main.part2}
          </span>{" "}
          <span className={styles.aboutTextNormal}>{ABOUT_TEXT.main.part3}</span>{" "}
          <span className={`${styles.aboutTextNormal} ${styles.aboutTextGradient}`}>
            {ABOUT_TEXT.main.part4}
          </span>{" "}
          <span className={styles.aboutTextNormal}>{ABOUT_TEXT.main.part5}</span>{" "}
          <span className={`${styles.aboutTextNormal} ${styles.aboutTextGradient}`}>
            {ABOUT_TEXT.main.part6}
          </span>{" "}
          <span className={styles.aboutTextNormal}>{ABOUT_TEXT.main.part7}</span>
        </h1>
      </motion.div>

      {/* Button */}
      <motion.div
        className={styles.aboutButtonContainer}
        initial={ABOUT_ANIMATIONS.button.initial}
        animate={ABOUT_ANIMATIONS.button.animate}
        transition={{
          delay: ABOUT_ANIMATIONS.button.delay,
          duration: ABOUT_ANIMATIONS.button.duration
        }}
      >
        <button className={styles.aboutButton}>
          {ABOUT_BUTTON_TEXT}
        </button>
      </motion.div>
    </section>
  );
}
