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
  className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
>
  {/* Title */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="
      font-medium leading-[1.1em] mt-6rem tracking-[-0.05em]
      text-[2.5rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[7rem]
    "
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

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="
      mt-6rem text-gray-500 font-semibold leading-relaxed
      text-[0.9rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1.1rem]
      max-w-2xl mx-auto
    "
  >
    Explore our pricing options below and choose the plan that best fits your needs.
    <br className="hidden sm:block" />
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
