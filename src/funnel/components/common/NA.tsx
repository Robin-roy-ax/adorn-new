"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Work", "Testimonials", "Services", "Benefits", "Pricing", "About Us"];

  const menuVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 300 },
    }),
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50
        flex items-center justify-between px-6 py-3
        rounded-full w-[57%] h-18 transition-all duration-500
        border shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]
        backdrop-blur-md
        ${scrolled
          ? "bg-white/70 border-black/10 text-black"
          : "bg-white/10 border-white/20 text-white"
        }`}
    >
      {/* Left - Logo */}
      <div
        className={`flex items-center space-x-2 pr-4 border-r transition-colors duration-500 
        ${scrolled ? "border-black/10" : "border-white/20"}`}
      >
        <span className="text-2xl">✻</span>
        <span className="font-semibold text-lg">Picasso Fusion</span>
      </div>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex space-x-8 px-6">
        {menuItems.map((item) => (
          <Link
            key={item}
            href="#"
            className={`transition-colors duration-300 ${
              scrolled ? "text-gray-800 hover:text-black" : "text-gray-300 hover:text-white"
            }`}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right - Desktop button + Mobile hamburger */}
      <div className="flex items-center space-x-4">
        {/* Desktop Button */}
        <div className="hidden md:block pl-4 border-l transition-colors duration-500">
          <button
            className={`font-medium px-5 py-2 rounded-full transition-all duration-300 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]
            ${scrolled
              ? "bg-black text-white hover:bg-blue-600"
              : "bg-white text-black hover:bg-blue-600 hover:text-white"
            }`}
          >
            Get it for $49
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`block h-0.5 w-full bg-current transform transition duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transform transition duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[98%] md:hidden bg-white/30 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-start p-4 space-y-2 z-40 overflow-hidden"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                href="#"
                className="w-full text-left px-2 py-2 text-black hover:bg-white/20 rounded transition"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            {/* Button at end */}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: menuItems.length * 0.1, type: "spring", stiffness: 300 }}
              className="mt-2 w-full px-5 py-2 rounded-full font-medium bg-black text-white hover:bg-blue-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              Get it for $49
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
