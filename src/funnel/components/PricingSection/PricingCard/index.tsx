"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import styles from "./style.module.css";

type PricingCardProps = {
  title: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  buttonLabel: string;
  secondaryButton: string;
  highlight?: boolean;
  badge?: string;
};

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonLabel,
  secondaryButton,
  highlight = false,
  badge,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`${styles.card} ${highlight ? styles.highlight : styles.default}`}
    >
      {highlight && badge && <span className={styles.badge}>{badge}</span>}

      <div>
        <h3>{title}</h3>
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
          ${price}
          <span style={{ fontSize: "1rem", fontWeight: 500 }}>{period}</span>
        </p>
        <p style={{ opacity: 0.8, fontSize: "0.875rem", marginTop: "0.5rem" }}>
          {description}
        </p>
      </div>

      <div>
        <button
          className={`${styles.buttonPrimary} ${
            highlight ? styles.highlight : styles.default
          }`}
        >
          {buttonLabel}
        </button>
        <button
          className={`${styles.buttonSecondary} ${
            highlight ? styles.highlight : styles.default
          }`}
        >
          {secondaryButton}
        </button>
      </div>

      <hr style={{ margin: "1.5rem 0", opacity: 0.3 }} />

      <ul className={styles.features}>
        {features.map((feature, i) => (
          <li key={i} className={styles.featureItem}>
            <Check size={16} color={highlight ? "#c7d2fe" : "#4f46e5"} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
