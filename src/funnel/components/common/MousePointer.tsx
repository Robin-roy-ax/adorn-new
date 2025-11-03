"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useCursor } from "@/funnel/components/common/CursorContext";

interface ViewProjectCursorProps {
  visible: boolean;
  mousePos: { x: number; y: number };
}

export default function ViewProjectCursor({ visible, mousePos }: ViewProjectCursorProps) {
  const { setIsCustomCursorActive } = useCursor();

  useEffect(() => {
    if (visible) setIsCustomCursorActive(false);
    else setIsCustomCursorActive(true);

    return () => setIsCustomCursorActive(true);
  }, [visible, setIsCustomCursorActive]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-[30px] left-[-40px] z-[1000] pointer-events-none rounded-full
                     backdrop-blur-md bg-[rgba(90,90,90,0.45)]
                     flex items-center justify-center text-white font-[Instrument_Serif]
                     text-[17px] w-[150px] h-[150px]
                     shadow-[inset_0_50px_20px_rgba(229, 228, 226,0.4),
                             inset_0_-50px_20px_rgba(229, 228, 226,0.6),
                             0_0_25px_rgba(229, 228, 226,0.35),
                             0_50px_40px_rgba(229, 228, 226,0.25)]"
          initial={{
            x: mousePos.x - 75,
            y: mousePos.y - 75,
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            x: mousePos.x - 75,
            y: mousePos.y - 75,
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <span className="not-italic font-inter tracking-[0.0em]">View</span>&nbsp;
          <span className="font-inter italic tracking-[-0.05em]">Project</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
