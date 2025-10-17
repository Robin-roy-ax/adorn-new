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
      className={`relative rounded-2xl shadow-[0_4px_10px_-2px_#64718f60]
 overflow-hidden flex flex-col justify-between p-8 text-left h-[570px]
        ${highlight
          ? "bg-[radial-gradient(150%_100%_at_100%_0%,_#1e387b_0%,_#0a1329_100%)] z-30 w-[370px]"
          : "bg-gray-100 text-slate-800 border-slate-200 w-[370px] z-20"
        }`}
    >
      {/* Badge */}
      {highlight && badge && (
        <span className="absolute text-black font-bold right-5 top-5 bg-[linear-gradient(325deg,#fed6ff_7.34456%,#9b8cfa_38.4923%,#8fe1ff_77.5623%,#87ffe3_86.824%)] text-xs px-3 py-1 rounded-full shadow-[0_.796192px_.796192px_-.9375px_#cda9ffba,0_2.41451px_2.41451px_-1.875px_#cda9ffb0,0_6.38265px_6.38265px_-2.8125px_#cda9ff96,0_20px_20px_-3.75px_#cda9ff40]">
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
              ? "bg-white hover:bg-[#1d52e5] hover:shadow-[0_8px_15px_rgba(29,82,229,0.4)] relative overflow-hidden text-black hover:text-white shadow-[inset_0_6px_12px_rgba(255,255,255,0.5)] rounded-full"
              : "bg-gray-100 hover:bg-gray-300 text-slate-800 border-gray-300 border"
            }`}
        >
          {buttonLabel}
        </button>

        <button
          className={`w-full py-2 mt-3 text-sm underline underline-offset-4 transition
            ${highlight ? "font-bold text-[1.1rem] text-indigo-200 hover:text-indigo-100" : "font-bold text-[1.1rem] text-slate-500 hover:text-slate-700"}
          `}
        >
          {secondaryButton}
        </button>
      </div>

      {/* Divider */}
      <hr
        className={`${highlight ? "border-gray-500" : "border-slate-300"}`}
      />

      {/* Features */}
      <ul className="space-y-2 text-sm">
        {features.map((feature, i) => (
          <li key={i} className={`flex items-center gap-2 font-semibold ${highlight ? "text-gray-400" : "text-gray-400"}`}>
            <Check
              className={`w-4 h-4 ${
                highlight ? "text-white" : "text-gray-800"
              }`}
            />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
