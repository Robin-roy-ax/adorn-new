"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-white">
      {/* Text Block */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-medium leading-snug text-gray-900">
          Picasso Fusion{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-400 to-gray-400">
            is a hub of
          </span>{" "}
          creativity and innovation.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-400">
            We&apos;re dedicated to
          </span>{" "}
          bringing your brand to life through unique, impactful design solutions.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-400">
            Dive into our world and discover the magic of
          </span>{" "}
           collaboration and creativity.
        </h1>
      </motion.div>

      {/* Button */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <button
          className="border border-gray-300 rounded-full px-8 py-3 text-gray-700 font-medium 
          hover:bg-gray-200 transition-colors duration-300"
        >
          Discover more about us
        </button>
      </motion.div>
    </section>
  );
}
