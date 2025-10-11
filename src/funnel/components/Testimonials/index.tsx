"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.css";
import { testimonials, testimonialsHeader } from "./data";

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>
          {testimonialsHeader.title} <br />
          <span className={styles.titleHighlight}>{testimonialsHeader.highlight}</span>
        </h2>
        <p className={styles.description}>{testimonialsHeader.description}</p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <p className={styles.quote}>“{testimonial.quote}”</p>

            {/* Client Info */}
            <div className={styles.clientInfo}>
              <div className={styles.avatarWrapper}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className={styles.clientName}>{testimonial.name}</p>
                <p className={styles.clientTitle}>{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
