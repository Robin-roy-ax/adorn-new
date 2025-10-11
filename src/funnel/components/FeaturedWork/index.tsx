"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import styles from "./style.module.css";
import { projects, sectionHeader } from "./data";

export default function FeaturedWork() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {sectionHeader.title} <span className={styles.titleHighlight}>{sectionHeader.highlight}</span>
          </h2>
          <p className={styles.description}>{sectionHeader.description}</p>
        </div>
      </div>

      {/* Horizontal Scroll Carousel */}
      <HorizontalScrollCarousel />

      {/* Footer Button */}
      <div className="text-center mt-16">
        <button className="border border-gray-300 text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-full transition">
          See more of our work
        </button>
      </div>
    </section>
  );
}

function HorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={targetRef} className={styles.carouselWrapper}>
      <div className={styles.stickyWrapper}>
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {/* Image */}
              <div className={styles.imageWrapper}>
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700"/>
              </div>

              {/* Overlay */}
              <div className={styles.overlay}></div>

              {/* Text Content */}
              <div className={styles.textContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>

              {/* Tags */}
              <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Cursor */}
        <motion.div
          className={styles.cursor}
          style={{
            x: mousePos.x - 60,
            y: mousePos.y - 60,
            width: 120,
            height: 120,
            opacity: hovering ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          View <span className="font-light italic"> Project</span>
        </motion.div>
      </div>
    </section>
  );
}
