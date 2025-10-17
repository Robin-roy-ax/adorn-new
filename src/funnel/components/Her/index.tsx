"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import {
  HERO_SUBTITLE,
  HERO_MAIN_HEADING,
  HERO_DESCRIPTION,
  HERO_BUTTONS,
  AVATAR_IMAGES,
  CLIENT_COUNT_TEXT,
  SCROLL_DOWN_TEXT,
  HERO_ANIMATIONS,
  CSS_TOKENS
} from "./data";
import styles from "./style.module.css";

const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: HERO_ANIMATIONS.container.duration }}
      className={styles.heroSection}
    >
      {/* Vertical divider lines */}
      <div className={styles.heroDividerLines}>
        <div className={`${styles.dividerLine} ${styles.dividerLineLeft}`} />
        <div className={`${styles.dividerLine} ${styles.dividerLineCenter}`} />
        <div className={`${styles.dividerLine} ${styles.dividerLineRight}`} />
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: HERO_ANIMATIONS.subtitle.duration }}
        className={styles.heroSubtitle}
      >
        {HERO_SUBTITLE}
      </motion.p>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: HERO_ANIMATIONS.mainHeading.duration }}
        className={styles.heroMainHeading}
        style={{
          color: CSS_TOKENS.primaryColor,
          textAlign: "center",
          fontFamily: "Inter, Inter Placeholder, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        {HERO_MAIN_HEADING.part1}{" "}
        <br />
        <span
          className={`${styles.heroHeadingItalic} ${instrumentSerif.className}`}
          style={{
            fontStyle: "italic",
            color: CSS_TOKENS.primaryColor,
            letterSpacing: "0em",
          }}
        >
          {HERO_MAIN_HEADING.part2}
        </span>{" "}
        <span
          className={styles.heroHeadingNormal}
          style={{
            fontFamily: '"Inter", sans-serif',
            letterSpacing: "-0.05em",
            color: "#fff",
          }}
        >
          {HERO_MAIN_HEADING.part3}
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: HERO_ANIMATIONS.description.duration,
          delay: HERO_ANIMATIONS.description.delay
        }}
        className={styles.heroDescription}
      >
        {HERO_DESCRIPTION}
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: HERO_ANIMATIONS.buttons.delay }}
        className={styles.heroButtons}
      >
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: HERO_ANIMATIONS.button1.delay }}
          className={styles.heroButtonPrimary}
        >
          <span className="relative z-10">{HERO_BUTTONS.primary}</span>
          <span className="absolute inset-0 rounded-full shadow-[inset_0_6px_12px_rgba(255,255,255,0.5)]"></span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: HERO_ANIMATIONS.button2.delay }}
          className={styles.heroButtonSecondary}
        >
          {HERO_BUTTONS.secondary}
        </motion.button>
      </motion.div>

      {/* Avatars + Text */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: HERO_ANIMATIONS.avatars.delay }}
        className={styles.heroAvatarsSection}
      >
        <div className={styles.heroAvatars}>
          {AVATAR_IMAGES.map((src, i) => (
            <div
              key={i}
              className={styles.heroAvatar}
            >
              <Image
                src={src}
                alt={`Client ${i + 1}`}
                width={40}
                height={40}
                className={styles.heroAvatarImage}
              />
            </div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: HERO_ANIMATIONS.avatarText.delay }}
          className={styles.heroClientCount}
        >
          {CLIENT_COUNT_TEXT.number}{" "}
          <span className={styles.heroClientDescription}>
            {CLIENT_COUNT_TEXT.description}
          </span>
        </motion.p>
      </motion.div>

      {/* Scroll down text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: HERO_ANIMATIONS.scrollText.delay }}
        className={styles.heroScrollText}
      >
        <p>{SCROLL_DOWN_TEXT}</p>
      </motion.div>
    </motion.section>
  );
}
