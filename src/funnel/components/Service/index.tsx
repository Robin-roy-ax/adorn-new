"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "./data";
import styles from "./style.module.css";

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.heading}
        >
          Our Creative{" "}
          <span>Offerings</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.description}
        >
          We offer a comprehensive suite of creative services designed to
          elevate your brand and captivate your audience.
        </motion.p>

        {/* Services Grid */}
        <section>
          <motion.div
            className={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={styles.card}
              >
                {/* Overlay */}
                <div className={styles.overlay} />

                {/* Image */}
                <div
                  className={styles.cardImage}
                  style={{ transform: `rotate(${service.rotation}deg)` }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={styles.text}
                  style={{ marginTop: "11.5rem" }}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={styles.cardTitle}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: 0.1,
                    }}
                    viewport={{ once: true }}
                    className={styles.cardDesc}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </section>
  );
}
