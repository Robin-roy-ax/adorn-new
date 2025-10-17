"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  FEATURED_WORK_PROJECTS,
  FEATURED_WORK_TEXT,
  FEATURED_WORK_ANIMATIONS,
} from "./data";
import styles from "./style.module.css";
import ViewProjectCursor from "./MousePointer";

export default function FeaturedWork() {
  return (
    <section className={styles.featuredWorkSection}>
      {/* Header */}
      <motion.div
        className={styles.featuredWorkContainer}
        initial={FEATURED_WORK_ANIMATIONS.section.initial}
        animate={FEATURED_WORK_ANIMATIONS.section.animate}
        transition={{ duration: FEATURED_WORK_ANIMATIONS.section.duration }}
      >
        <div className={styles.featuredWorkHeader}>
          <h2 className={styles.featuredWorkTitle}>
            {FEATURED_WORK_TEXT.title.part1}{" "}
            <span className={styles.featuredWorkTitleItalic}>
              {FEATURED_WORK_TEXT.title.part2}
            </span>
          </h2>

          <p className={styles.featuredWorkDescription}>
            {FEATURED_WORK_TEXT.description}
          </p>
        </div>
      </motion.div>

      {/* Horizontal Scroll Carousel */}
      <HorizontalScrollCarousel />

      {/* Footer Button */}
      <motion.div
        className={styles.featuredWorkFooter}
        initial={FEATURED_WORK_ANIMATIONS.footerButton.initial}
        animate={FEATURED_WORK_ANIMATIONS.footerButton.animate}
        transition={{
          duration: FEATURED_WORK_ANIMATIONS.footerButton.duration,
        }}
      >
        <button className={styles.featuredWorkButton}>
          {FEATURED_WORK_TEXT.buttonText}
        </button>
      </motion.div>
    </section>
  );
}

function HorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  // 👇 track hover and mouse position
  const [hovering, setHovering] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={targetRef} className={styles.carouselSection}>
      <div className={styles.carouselContainer}>
        <motion.div style={{ x }} className={styles.carouselTrack}>
          {FEATURED_WORK_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className={`${styles.projectCard} group`}
              initial={FEATURED_WORK_ANIMATIONS.projectCards.initial}
              whileInView={FEATURED_WORK_ANIMATIONS.projectCards.animate}
              transition={{
                duration: FEATURED_WORK_ANIMATIONS.projectCards.duration,
                delay: index * FEATURED_WORK_ANIMATIONS.projectCards.staggerDelay,
              }}
              viewport={{ once: true }}
              // 👇 show cursor only while hovering a card
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {/* Image */}
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                />
              </div>

              {/* Overlay */}
              <div className={styles.projectOverlay} />

              {/* Text Content */}
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className={styles.projectTags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.projectTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 👇 MousePointer (only visible when hovering) */}
        {hovering && mousePos && (
          <ViewProjectCursor
            visible={true}
            mousePos={mousePos}
          />
        )}
      </div>
    </section>
  );
}
