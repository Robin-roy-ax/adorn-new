"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.css";
import { benefits, sectionHeader, Benefit } from "./data";

export default function Benefits() {
  return (
    <section id="benefits" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            {sectionHeader.title.split(sectionHeader.highlight)[0]}
            <span className={styles.titleHighlight}>{sectionHeader.highlight}</span>
            {sectionHeader.title.split(sectionHeader.highlight)[1]}
          </h2>
          <p className={styles.description}>{sectionHeader.description}</p>
        </motion.div>

        {/* Grid Layout */}
        <div className="flex flex-col items-center gap-10">
          <motion.div
            className={`${styles.gridRow} ${styles.grid3}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {benefits.slice(0, 3).map((b, i) => (
              <BenefitCard key={i} benefit={b} />
            ))}
          </motion.div>

          <motion.div
            className={`${styles.gridRow} ${styles.grid2}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {benefits.slice(3).map((b, i) => (
              <BenefitCard key={i + 3} benefit={b} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit }: { benefit: Benefit }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      className={styles.card}
    >
      <div className={styles.cardImageWrapper}>
        <Image
          src={benefit.image}
          alt={benefit.title}
          width={300}
          height={300}
          className={styles.cardImage}
        />
      </div>

      <div className={styles.cardText}>
        <h3 className={styles.cardTitle}>{benefit.title}</h3>
        <p className={styles.cardDescription}>{benefit.description}</p>
      </div>

      <div className={styles.cardGlow}></div>
    </motion.div>
  );
}
