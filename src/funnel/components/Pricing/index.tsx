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
      className="bg-white flex w-full flex-col items-center px-4 py-16 text-center text-[#394560] sm:px-6 lg:px-8 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto w-full max-w-5xl px-2 text-center sm:px-6 lg:px-8"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            font-small leading-[1.1em] tracking-[-0.05em]
            text-[2rem] sm:text-[2.75rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem]
          "
        >
          {headerTitle.includes("Compare") ? (
            <div>
              Compare & Choose{" "}
              <span className="font-['inter'] font-normal">
                Your {" "}
              </span>
              <span className="font-['instrument-serif'] italic font-normal">
                Plan
              </span>
            </div>
          ) : (
            <div>
              Transparent{" "}
              <span className="font-['Instrument_Serif'] italic font-normal">
                Pricing
              </span>
            </div>
          )}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            mt-6 text-gray-500 font-semibold leading-relaxed
            text-sm sm:text-base md:text-[1.05rem] lg:text-[1.1rem]
            mx-auto max-w-2xl px-2
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
        className="mt-10 grid w-full max-w-6xl gap-6 grid-cols-1 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </motion.div>
    </section>
  );
}
