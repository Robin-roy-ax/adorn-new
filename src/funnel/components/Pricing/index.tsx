"use client";

import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { pricingPlans } from "./data";
import styles from "./style.module.css";

interface PricingSectionProps {
  variant?: "default" | "compare";
}

export default function PricingSection({ variant = "default" }: PricingSectionProps) {
  const headerTitle =
    variant === "compare" ? "Compare & Choose Your Plan" : "Transparent Pricing";

  return (
    <section id="pricing" className={styles.pricingSection}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={styles.pricingContainer}
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.pricingTitle}
        >
          {headerTitle.includes("Compare") ? (
            <div>
              Compare & Choose{" "}
              <br />
              <span className={styles.titleSerif}>
               Your Plan
              </span>
            </div>
          ) : (
            <div>
              Flexible Plans Tailored to{" "}
              <span className={styles.titleSerif}>
                <br />
                Your Needs
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
          className={styles.pricingSubtitle}
        >
          Find the plan that fits your needs best with no surprises and
          <br className={styles.subtitleBreak} />
          No hidden fees.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={styles.pricingGrid}
      >
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </motion.div>
    </section>
  );
}