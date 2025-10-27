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
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: HERO_ANIMATIONS.button1.delay }}
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
        >
          {HERO_BUTTONS.primary}
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: HERO_ANIMATIONS.button2.delay }}
          href="#pricing"
          className="px-6 py-3 rounded-full border border-gray-400 text-gray-200 hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          {HERO_BUTTONS.secondary}
        </motion.a>
      </motion.div>

      {/* Avatars */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: HERO_ANIMATIONS.avatars.delay }}
        className="flex flex-col items-center mt-12"
      >
        <div className="flex -space-x-4 mb-2">
          {AVATAR_IMAGES.map((src, i) => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-white/60 overflow-hidden shadow-md">
              <Image src={src} alt={`Client ${i + 1}`} width={40} height={40} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: HERO_ANIMATIONS.avatarText.delay }}
          className="text-white font-medium"
        >
          {CLIENT_COUNT_TEXT.number}{" "}
          <span className="text-gray-400">{CLIENT_COUNT_TEXT.description}</span>
        </motion.p>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: HERO_ANIMATIONS.scrollText.delay }}
        className="absolute bottom-5 text-gray-400 text-sm"
      >
        {SCROLL_DOWN_TEXT}
      </motion.div>
    </motion.section>
  );
}
