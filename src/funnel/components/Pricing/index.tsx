"use client";

import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { pricingPlans } from "./data";

interface PricingSectionProps {
  variant?: "default" | "compare";
}

export default function PricingSection({ variant = "default" }: PricingSectionProps) {
  const headerTitle =
    variant === "compare" ? "Compare & Choose Your Plan" : "Transparent Pricing";

  return (
    <section
      id="pricing"
      className="bg-white flex flex-col items-center py-20 px-6 text-center text-[#394560]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-5xl mx-auto px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[9rem] md:text-[7rem] sm:text-[48px] font-medium leading-[1.1em] tracking-[-0.05em]"
        >
          {headerTitle.includes("Compare") ? (
            <>
              Compare & Choose{" "}
              <span className="font-['Instrument_Serif'] italic font-normal">
                Your Plan
              </span>
            </>
          ) : (
            <>
              Transparent{" "}
              <span className="font-['Instrument_Serif'] italic font-normal">
                Pricing
              </span>
            </>
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-6 text-gray-400 text-md font-semibold md:text-md leading-relaxed"
        >
          Explore our pricing options below and choose the plan that best fits your needs.
          <br />
          No hidden fees.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-3 mt-10 gap-8 max-w-6xl w-full"
      >
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </motion.div>
    </section>
  );
}
