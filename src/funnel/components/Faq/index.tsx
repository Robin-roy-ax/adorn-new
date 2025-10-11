"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./style.module.css";
import { faqs, faqHeader } from "./data";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={styles.section}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>{faqHeader.title}</h1>
          <h2 className={styles.subtitle}>{faqHeader.subtitle}</h2>
          <p className={styles.description}>{faqHeader.description}</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={styles.faqItem}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={styles.questionButton}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={styles.icon}
                  >
                    {isOpen ? "×" : "+"}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.answer}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
