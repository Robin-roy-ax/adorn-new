"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

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
      "Absolutely! We welcome your feedback and offer unlimited revisions to ensure your complete satisfaction with the final design. Your input is invaluable in achieving the desired outcome for your project.",
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Yes, we believe in building long-term relationships with our clients. We offer post-project support to address any questions or issues that may arise, ensuring a seamless experience even after project completion.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Certainly! We have a portfolio showcasing our past projects and client testimonials. Feel free to explore our portfolio to see the quality of our work and the level of satisfaction among our clients.",
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
        <motion.div
      className="flex flex-col justify-start items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="font-inter text-[105px] font-medium leading-[1.1em] tracking-[-0.05em] text-[rgb(45,55,83)]">
        Clearing Up Common{" "}
        <span className="font-['Instrument_Serif'] italic font-normal">
          Queries
        </span>
      </h2>
    </motion.div>
    <motion.div
      className="flex flex-col justify-start items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <p className="text-gray-400 mt-7 align-middle justify-center text-[1rem] md:text-[1rem] leading-relaxed max-w-3xl">
        Dive into our FAQ section for insights into our services. We&apos;ve compiled answers to common questions to ensure you&apos;re well-informed.
      </p>
    </motion.div>
    </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto w-full px-6 py-16">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={i} className="mb-3">
            {/* Question Row */}
            <motion.button
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, delay: i * 0.1 }}
  viewport={{ once: true }}
  onClick={() => setOpenIndex(isOpen ? null : i)}
  whileHover={{ scale: 1.05 }} 
  whileTap={{ scale: 0.98 }}   
  className="flex w-[100%] justify-between items-center py-4 px-4 rounded-md transition-transform duration-300 ease-out border-b border-gray-200"
>
  <p className="text-md font-medium text-[#343E56] text-left">
    {faq.question}
  </p>
  {isOpen ? (
    <X className="w-7 h-7 text-[#343E56]" />
  ) : (
    <Plus className="w-7 h-7 text-[#343E56]" />
  )}
</motion.button>
            {/* Animated Answer */}
            <AnimatePresence initial={true}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 mt-3 px-4 pb-4 leading-relaxed">
                    {faq.answer}
                  </p>
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
