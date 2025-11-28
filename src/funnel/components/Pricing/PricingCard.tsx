"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";
import { SubFeatures } from "./data";
import GlassToggleButton from "../common/GlassButton";
import Link from "next/link";


type PricingCardProps = {
  title: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  credits: number;
  addOns: number;
  subFeatures: SubFeatures;
  buttonLabel: string;
  secondaryButton: string;
  highlight?: boolean;
  badge?: string;
  // New props for controlled expansion
  isExpanded: boolean;
  onToggleExpand: () => void;
};

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  credits,
  addOns,
  subFeatures,
  buttonLabel,
  secondaryButton,
  highlight = false,
  badge,
  isExpanded,
  onToggleExpand,
}: PricingCardProps) {
  const hasSubFeatures = Object.keys(subFeatures).length > 0;
  
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`relative flex w-full flex-col overflow-hidden rounded-2xl shadow-[0_4px_10px_-2px_#64718f60]
        p-6 sm:p-8 text-left
        ${highlight
          ? "bg-[radial-gradient(150%_100%_at_100%_0%,_#1e387b_0%,_#0a1329_100%)] text-white z-30"
          : "bg-gray-100 text-slate-800 border-slate-200 z-20"
        }`}
    >
      {highlight && badge && (
        <span className="absolute font-bold right-4 sm:right-5 top-4 sm:top-5 text-[0.688rem] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full shadow-[0_.796192px_.796192px_-.9375px_#cda9ffba,0_2.41451px_2.41451px_-1.875px_#cda9ffb0,0_6.38265px_6.38265px_-2.8125px_#cda9ff96,0_20px_20px_-3.75px_#cda9ff40]"
          style={{
            background: 'linear-gradient(325deg, #fed6ff 7.34456%, #9b8cfa 38.4923%, #8fe1ff 77.5623%, #87ffe3 86.824%)',
            color: 'black'
          }}
        >
          {badge}
        </span>
      )}

      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            highlight 
              ? "bg-white/20 text-white" 
              : "bg-slate-800 text-white"
          }`}>
            {credits} Credits
          </div>
        </div>
        <p className="text-4xl font-bold sm:text-5xl">
          ${price}
          <span className="text-base sm:text-lg font-medium">{period}</span>
        </p>
        <p className="mt-3 text-sm opacity-80 sm:text-base">{description}</p>
      </div>

      <div className="mt-6 sm:mt-8">
        <Link href="https://app.picassofusion.com/login?_gl=1*18t62o4*_ga*OTE2MzM2MzI1LjE3NjI0MDgyNzg.*_ga_8S104JGWHM*czE3NjM3MDI3MzAkbzgkZzAkdDE3NjM3MDI3MzAkajYwJGwwJGgw"
           target="_blank"
           rel="noopener noreferrer"
           className={`block text-center w-full rounded-full py-3 text-base font-semibold transition-all duration-300 sm:py-3.5 sm:text-lg
            ${highlight
              ? "bg-white hover:bg-[#1d52e5] hover:shadow-[0_8px_15px_rgba(29,82,229,0.4)] relative overflow-hidden text-black hover:text-white shadow-[inset_0_6px_12px_rgba(255,255,255,0.5)] rounded-full"
              : "bg-gray-100 hover:bg-gray-300 text-slate-800 border-gray-300 border"
            }`}
        >
          {buttonLabel}
        </Link>

        

        {/* <a href="https://app.picassofusion.com/login?_gl=1*18t62o4*_ga*OTE2MzM2MzI1LjE3NjI0MDgyNzg.*_ga_8S104JGWHM*czE3NjM3MDI3MzAkbzgkZzAkdDE3NjM3MDI3MzAkajYwJGwwJGgw"
           target="_blank"
           rel="noopener noreferrer"
           className={`block text-center w-full rounded-full py-3 text-base font-semibold transition-all duration-300 sm:py-3.5 sm:text-lg
            ${highlight
              ? "bg-white hover:bg-[#1d52e5] hover:shadow-[0_8px_15px_rgba(29,82,229,0.4)] relative overflow-hidden text-black hover:text-white shadow-[inset_0_6px_12px_rgba(255,255,255,0.5)]"
              : "bg-gray-100 hover:bg-gray-300 text-slate-800 border-gray-300 border"
            }`}
        >
          {secondaryButton}
        </a> */}
      </div>

      <hr
        className={`my-5 sm:my-6 ${highlight ? "border-gray-500" : "border-slate-300"}`}
      />

      <div className="space-y-4">
        <div>
          <h4 className={`text-sm font-bold mb-3 ${highlight ? "text-gray-200" : "text-gray-700"}`}>
            Main Features
          </h4>
          <ul className="space-y-2 text-sm sm:text-base min-h-[185px]">
            {features.map((feature, i) => (
              <li key={i} className={`flex items-start gap-3 font-semibold ${highlight ? "text-gray-300" : "text-gray-600"}`}>
                <Check
                  className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${
                    highlight ? "text-white" : "text-gray-800"
                  }`}
                />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {hasSubFeatures && (
          <div className="pt-2">
            <GlassToggleButton
              expanded={isExpanded}
              onClick={onToggleExpand}
              highlight={highlight}
            />


            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 pt-4">
                    {Object.entries(subFeatures).map(([category, categoryFeatures]) => (
                      <div key={category}>
                        <h4 className={`text-xs font-bold mb-2 uppercase tracking-wide ${
                          highlight ? "text-gray-300" : "text-gray-600"
                        }`}>
                          {category}
                        </h4>
                        <ul className="grid grid-cols-1 gap-1.5 text-xs sm:text-sm">
                          {Object.entries(categoryFeatures).map(([featureName, featureValue]) => {
                            const isEnabled = featureValue === true || (typeof featureValue === 'string' && featureValue.toLowerCase().includes('up to'));
                            const displayValue = typeof featureValue === 'string' ? featureValue : featureName;
                            
                            return (
                              <li key={featureName} className={`flex items-center gap-2 ${
                                highlight ? "text-gray-400" : "text-gray-500"
                              }`}>
                                {isEnabled ? (
                                  <Check className={`w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 ${
                                    highlight ? "text-green-400" : "text-green-600"
                                  }`} />
                                ) : (
                                  <X className={`w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 ${
                                    highlight ? "text-red-400" : "text-red-500"
                                  }`} />
                                )}
                                <span className={!isEnabled ? "opacity-50" : ""}>
                                  {typeof featureValue === 'string' ? displayValue : featureName}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}

                    <div className={`pt-3 mt-3 border-t ${highlight ? "border-gray-600" : "border-slate-300"}`}>
                      <p className={`text-xs sm:text-sm font-semibold ${highlight ? "text-gray-300" : "text-gray-600"}`}>
                        <span className={`${highlight ? "text-white" : "text-gray-800"}`}>Up to {addOns}</span> Add-on Credits can be added
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
}