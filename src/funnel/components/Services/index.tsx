"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.css";
import { services, servicesHeader } from "./data";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>
          {servicesHeader.title} <span className={styles.titleHighlight}>{servicesHeader.highlight}</span>
        </h2>
        <p className={styles.description}>{servicesHeader.description}</p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className={styles.card}
          >
            <div className={styles.cardGradient} />
            <div className={styles.cardImage}>
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
