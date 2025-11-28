"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface GlassButtonProps {
  expanded: boolean;
  onClick: () => void;
  highlight?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({ 
  expanded, 
  onClick, 
  highlight = false 
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
        highlight
          ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
          : "bg-slate-200/60 hover:bg-slate-300/60 text-slate-800 border border-slate-300"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="font-semibold">
        {expanded ? "Hide" : "Show"} Additional Features
      </span>
      <motion.div
        animate={{ rotate: expanded ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.button>
  );
};

export default GlassButton;
