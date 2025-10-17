// components/FAQ/index.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "./data";
import styles from "./style.module.css";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.header}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Clearing Up Common{" "}
          <span>Queries</span>
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Dive into our FAQ section for insights into our services. We&apos;ve compiled answers to common questions to ensure you&apos;re well-informed.
        </motion.p>
      </div>

      <div className={styles.faqContainer}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={styles.faqItem}>
              <motion.button
                className={styles.question}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                whileTap={{ scale: 0.98 }}
              >
                <span>{faq.question}</span>
                {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </motion.button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className={styles.answer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
