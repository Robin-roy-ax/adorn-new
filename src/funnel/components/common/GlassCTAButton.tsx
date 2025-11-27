import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Glassmorphism CTA Button Component
const GlassCTAButton: React.FC<{
  href: string;
  text: string;
}> = ({ href, text }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for shine effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for shine position
  const springConfig = { damping: 25, stiffness: 200 };
  const shineX = useSpring(mouseX, springConfig);
  const shineY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Handle touch for mobile devices
  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-2 sm:gap-3 cursor-pointer touch-manipulation"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Glass Button Container */}
      <motion.div
        className="relative flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full overflow-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 0, 0, 0.25)",
        //   boxShadow: isHovered
        //     ? "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.1)"
        //     : "0 4px 16px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
          background: isHovered
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(255, 255, 255, 0.1)",
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Animated Gradient Border */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
            backgroundSize: "200% 100%",
          }}
          animate={
            isHovered
              ? { backgroundPosition: ["200% 0%", "-200% 0%"] }
              : { backgroundPosition: "200% 0%" }
          }
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "linear",
          }}
        />

        {/* Cursor-following Shine Effect - Hidden on touch devices for performance */}
        <motion.div
          className="absolute pointer-events-none hidden sm:block"
          style={{
            x: shineX,
            y: shineY,
            width: 150,
            height: 150,
            marginLeft: -75,
            marginTop: -75,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Floating Particles - Reduced on mobile for performance */}
        {isHovered && (
          <>
            {[...Array(typeof window !== 'undefined' && window.innerWidth < 640 ? 3 : 6)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-white/40"
                initial={{
                  x: Math.random() * 100,
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: -20,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.15,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}

        {/* Text - Responsive font sizes */}
        <span className="relative z-10 text-[#1d2029] font-medium text-sm sm:text-base md:text-lg tracking-wide whitespace-nowrap">
          <motion.span
            className="inline-block"
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.span>
        </span>

        {/* Glass Icon Circle - Responsive sizing */}
        <motion.span
          className="relative z-10 inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
            background: isHovered
              ? "rgba(29, 32, 41, 0.9)"
              : "rgba(255, 255, 255, 0.2)",
          }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Icon Shine */}
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)",
            }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Arrow Icon - Responsive sizing */}
          <motion.span
            animate={{
              x: isHovered ? 2 : 0,
              y: isHovered ? -2 : 0,
              rotate: isHovered ? 45 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <ArrowUpRight
              className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-colors duration-300"
              style={{ color: isHovered ? "#fff" : "#1d2029" }}
            />
          </motion.span>
        </motion.span>
      </motion.div>

      {/* Outer Glow on Hover */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        // style={{
        //   background:
        //     "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
        //   filter: "blur(20px)",
        // }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.a>
  );
};

export default GlassCTAButton;