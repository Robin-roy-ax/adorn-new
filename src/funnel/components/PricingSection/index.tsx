"use client";

import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { pricingPlans } from "./data";
import styles from "./style.module.css";

export default function PricingSection() {
  return (
    <section id="pricing" className={styles.section}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.heading}
      >
        Transparent <span className={styles.italic}>Pricing</span>
      </motion.h1>

      <p className={styles.subHeading}>
        Explore our pricing options below and choose the plan that best fits your needs. No hidden fees.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={styles.grid}
      >
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </motion.div>
    </section>
  );
}
