"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "The duration varies depending on the scope and complexity of the project. We strive to deliver high-quality work within a reasonable timeframe, ensuring both efficiency and excellence.",
  },
  {
    question: "What is your design process like?",
    answer:
      "Our design process is collaborative and transparent. It typically involves initial consultation, concept development, feedback iterations, and finalization. We prioritize client input and strive to exceed expectations at every stage.",
  },
  {
    question: "Can I request revisions to the design?",
    answer:
      "Absolutely. We encourage feedback and offer revisions to ensure the final design aligns perfectly with your vision.",
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Yes, we provide post-launch support and maintenance options to ensure everything continues to run smoothly after the project is delivered.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Certainly! We’re happy to share our portfolio showcasing past projects upon request.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center px-6 py-24 bg-white text-slate-800"
    >
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold text-slate-900 mb-2 leading-tight">
            Clearing Up Common
          </h1>
          <h2 className="text-6xl italic text-slate-700 mb-8 leading-tight">
            Queries
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Dive into our FAQ section for insights into our services. We&apos;ve
            compiled answers to common questions to ensure you&apos;re well-informed.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full justify-between items-center text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl text-slate-500"
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
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-slate-600 text-sm leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
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
