"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { benefits,Benefit } from "./data";
import styles from "./style.module.css";

export default function Benefits() {
  return (
    <section id="benefits" className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 1, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Smooth<span>{" "}</span><span className="italic font-[400] font-[Instrument_Serif]">Process,</span><br />Stunning <span className="italic font-[400] font-[Instrument_Serif]">Outcomes</span>
          </h2>
          <p className={styles.description}>
            At Picasso Fusion, our refined process ensures efficiency, clarity, and exceptional results. From concept to final delivery, we guide you with transparency and precision, turning your vision into impactful, polished designs.
          </p>
        </div>

        {/* Grid Layout */}
        <div className={styles.gridContainer}>
          {/* First Row */}
          <motion.div
            className={`${styles.grid} ${styles.firstRow}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {benefits.slice(0, 3).map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div
            className={`${styles.grid} ${styles.secondRow}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {benefits.slice(3).map((benefit, index) => (
              <BenefitCard key={index + 3} benefit={benefit} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function BenefitCard({ benefit }: { benefit: Benefit }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 1, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      className={styles.card}
    >
      {/* Image */}
      <div
        className={styles.imageWrapper}
        
        style={{
          transform: benefit.title === "Unlimited Revisions"
            ? "translate(-30%, -20%) rotate(-326deg)"
            : `translate(-50%, -1rem) rotate(${benefit.rotation}deg)`
        }}
      >
        <Image
          src={benefit.image}
          alt={benefit.title}
          width={300}
          height={300}
          className="object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
        />
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 1, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className={styles.cardText}
      >
        <h3 className={styles.cardTitle}>{benefit.title}</h3>
        <p className={styles.cardDesc}>{benefit.description}</p>
      </motion.div>

      {/* Hover overlay */}
      <div className={styles.overlay} />
    </motion.div>
  );
}
