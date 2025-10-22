"use client";

import { motion } from "framer-motion";

interface ViewProjectCursorProps {
  visible: boolean;
  mousePos: { x: number; y: number };
}

export default function ViewProjectCursor({ visible, mousePos }: ViewProjectCursorProps) {
  // 🛑 Only render when visible and we have a mouse position
  if (!visible || !mousePos) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[1000] pointer-events-none rounded-full
                 backdrop-blur-md bg-[rgba(90,90,90,0.4)]
                 shadow-[inset_0_0.12px_0.6px_-0.625px_rgba(255,255,255,0.31),
                 inset_0_1px_5px_-1.25px_rgba(255,255,255,0.75),
                 0_30px_40px_rgba(0,0,0,0.2)]
                 flex items-center justify-center text-white italic font-[Instrument_Serif]
                 text-[17px] w-[110px] h-[110px]"
      initial={{ x: mousePos.x - 55, y: mousePos.y - 55, opacity: 0, scale: 0.8 }}
      animate={{ x: mousePos.x - 55, y: mousePos.y - 55, opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <span className="font-inter not-italic tracking-[-0.05em]">View</span>&nbsp;Project
    </motion.div>
  );
}
