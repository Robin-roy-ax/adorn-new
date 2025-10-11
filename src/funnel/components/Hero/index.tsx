"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.css";
import { heroData } from "./data";

const Hero = () => {
  const { tagline, title, description, buttons, clients, scrollText } = heroData;

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Background lines */}
      <div className={styles.linesWrapper}>
        <div className={styles.lineLeft} />
        <div className={styles.lineCenter} />
        <div className={styles.lineRight} />
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.tagline}
      >
        {tagline}
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.title}
      >
        {title.main} <br />
        <span className={styles.titleCreative}>{title.creative}</span>{" "}
        <span className={styles.titleStudio}>{title.studio}</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className={styles.description}
      >
        {description}
      </motion.p>

      {/* Buttons */}
      <div className={styles.buttons}>
        {buttons.map((btn, i) => (
          <button
            key={i}
            className={btn.type === "primary" ? styles.primaryBtn : styles.secondaryBtn}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Avatars + clients text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className={styles.clients}
      >
        <div className={styles.avatars}>
          {clients.avatars.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Client ${i + 1}`}
              width={40}
              height={40}
              className={styles.avatar}
            />
          ))}
        </div>
        <p>{clients.text}</p>
      </motion.div>

      {/* Scroll down text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className={styles.scrollText}
      >
        <p>{scrollText}</p>
      </motion.div>
    </section>
  );
};

export default Hero;
