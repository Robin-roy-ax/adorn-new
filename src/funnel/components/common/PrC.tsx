"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
      className={`relative rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between border p-8 text-left h-[600px]
        ${highlight
          ? "bg-gradient-to-b from-indigo-900 to-indigo-800 text-white border-indigo-700 z-30"
          : "bg-gray-100 text-slate-800 border-slate-200"
        }`}
    >
      {/* Badge */}
      {highlight && badge && (
        <span className="absolute right-5 top-5 bg-gradient-to-r from-indigo-500 to-purple-500 text-xs px-3 py-1 rounded-full font-medium shadow-md">
          {badge}
        </span>
      )}

      {/* Header */}
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-4xl font-bold">
          ${price}
          <span className="text-base font-medium">{period}</span>
        </p>
        <p className="text-sm opacity-80 mt-2">{description}</p>
      </div>

      {/* Buttons */}
      <div className="mt-8">
        <button
          className={`w-full py-3 rounded-full font-semibold transition-all duration-300
            ${highlight
              ? "bg-white hover:bg-indigo-700 hover:shadow-[inset_0_0_8px_rgba(255,255,255,0.8)] text-black hover:text-white"
              : "bg-gray-100 hover:bg-gray-300 text-slate-800 border-gray-300 border"
            }`}
        >
          {buttonLabel}
        </button>

        <button
          className={`w-full py-2 mt-3 text-sm underline transition
            ${highlight ? "text-indigo-200 hover:text-indigo-100" : "text-slate-500 hover:text-slate-700"}
          `}
        >
          {secondaryButton}
        </button>
      </div>

      {/* Divider */}
      <hr
        className={`my-6 ${highlight ? "border-indigo-700/50" : "border-slate-200"}`}
      />

      {/* Features */}
      <ul className="space-y-2 text-sm">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check
              className={`w-4 h-4 ${
                highlight ? "text-indigo-300" : "text-indigo-600"
              }`}
            />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
