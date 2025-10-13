"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: ["400"] });


const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center justify-center text-center min-h-[800px] h-screen w-full 
                 px-[60px] py-[30px] overflow-hidden 
                 bg-[radial-gradient(100%_100%_at_50%_0%,#0f1c3e_0%,#050915_100%)]
                 text-white font-sans"
    >
      {/* Vertical divider lines */}
      <div className="absolute inset-0 flex justify-between items-center max-w-6xl mx-auto -z-0">
        <div className="absolute left-0 top-0 w-px h-full bg-white/10" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-white/10 -translate-x-1/2" />
        <div className="absolute right-0 top-0 w-px h-full bg-white/10" />
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-md font-semibold tracking-wide mt-10 bg-gradient-to-r from-pink-200 to-emerald-300 bg-clip-text text-transparent"
      >
        Your Gateway to Creative Excellence
      </motion.p>

      {/* Main Heading */}
      {/* Main Heading */}
<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="
    text-center mt-10 font-sans font-bold text-white leading-[1.1em]
    tracking-[-0.05em] whitespace-pre
    text-[clamp(3rem,8vw,9rem)]    /* increased base and max */
    md:text-[clamp(4rem,7vw,10rem)] 
    lg:text-[clamp(5rem,6vw,12rem)] /* very large on big screens */
  "
  style={{
    color: "var(--token-bb3680e9-7fc2-4dd0-b6fe-fcde212acb17, #fff)",
    textAlign: "center",
    fontFamily:
      "Inter, Inter Placeholder, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
  }}
>
  Your On-Demand{" "}
  <br />
  <span
    className={`
      italic font-normal text-white
      ${instrumentSerif.className}
      block sm:inline
    `}
    style={{
      fontStyle: "italic",
      color:
        "var(--token-bb3680e9-7fc2-4dd0-b6fe-fcde212acb17, rgb(255, 255, 255))",
      letterSpacing: "0em",
    }}
  >
    Creative
  </span>{" "}
  <span
    className="
      text-white font-sans font-normal
      leading-[1.1em] tracking-[-0.05em]
      block sm:inline
    "
    style={{
      fontFamily: '"Inter", sans-serif',
      letterSpacing: "-0.05em",
      color: "#fff",
    }}
  >
    Studio
  </span>
</motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 text-[#a8a9ad] max-w-xl text-2rem"
      >
        We are a design and development studio dedicated to crafting innovative
        digital solutions that shape the future.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.10 }}
        className="flex gap-4 mt-8"
      >
       <motion.button
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="
    bg-white text-black px-6 py-3 rounded-full font-medium
    transition-all duration-300 ease-in-out
    hover:bg-[#1d52e5]        /* blue background on hover */
    hover:text-white          /* text white on hover */
    hover:shadow-[0_8px_15px_rgba(29,82,229,0.4)] /* drop shadow */
    relative
    overflow-hidden
  "
>
  <span className="relative z-10">Book a discovery call</span>
  {/* Stronger inner shadow at the top */}
  <span className="absolute inset-0 rounded-full pointer-events-none 
                   shadow-[inset_0_6px_12px_rgba(255,255,255,0.5)]"></span>
</motion.button>

<motion.button
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  whileHover={{
    backgroundColor: "rgba(107, 114, 128, 0.7)", // gray-500/70
    borderColor: "transparent",
    color: "#ffffff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // optional shadow
  }}
  className="
    border border-[#8592b1]
    text-[#f5f6fa]
    px-6 py-3
    rounded-full
    font-medium
    transition-all
    duration-300
  "
>
  See pricing plans
</motion.button>


      </motion.div>

      {/* Avatars + Text */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-[#ccd5e8] text-sm flex flex-col items-center"
      >
        <div className="flex -space-x-4 mb-3">
          {[
            "https://framerusercontent.com/images/iBem3bM7DskP1qLkV8JoHMLH68.jpg",
            "https://framerusercontent.com/images/wKRLfgb6vJIipselilRPIp7O8k.jpg",
            "https://framerusercontent.com/images/Zm7VMv3qkNTsNCEbJUrRSLM6yKQ.jpg",
            "https://framerusercontent.com/images/9nYExwEqKiZOxikoZuzMhPzlIX8.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full border border-white/60 shadow-md overflow-hidden"
            >
              <Image
                src={src}
                alt={`Client ${i + 1}`}
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <motion.p
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="text-white font-medium"
        >1,000+ <span className="text-gray-400">satisfied clients</span></motion.p>
      </motion.div>

      {/* Scroll down text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 mt-28 text-[#8592b1] text-sm mb-5"
      >
        <p>Scroll down to explore</p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
