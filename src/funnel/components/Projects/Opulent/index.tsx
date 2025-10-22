// app/page.tsx or components/OpulentPage.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function OpulentPage() {
  return (
    <div className="w-full bg-white flex flex-col items-start px-6 md:px-12 lg:px-24 space-y-24">

      {/* 1. Big Header */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-[5rem] md:text-[8rem] font-semibold text-left text-[#394560]"
      >
        Opulent Interiors™
      </motion.h1>

      {/* 2. Description left and tags right */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="w-full flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12"
      >
        <p className="text-xl md:text-2xl font-semibold max-w-xl text-left text-gray-400">
        A luxury interior design firm specializing in bespoke designs and curated furnishings for discerning clients.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 border text-gray-400 border-gray-300 rounded-full text-sm md:text-base">Web Design & Development</span>
          <span className="px-4 py-2 border text-gray-400 border-gray-300 rounded-full text-sm md:text-base">Motion Graphics</span>
        </div>
      </motion.div>

      {/* 3. Full Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="w-full h-[500px] md:h-[780px] relative"
      >
        <Image
          src="https://framerusercontent.com/images/UV0kfsR1WzRkqCK4mMW1O9t0.jpg"
          alt="Opulent Interiors Hero"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>

      {/* 4. Heading left and description right */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="w-full flex flex-col md:flex-row gap-150"
      >
        <h2 className="text-[17px] font-medium leading-[1.3] tracking-[-0.05em] text-[#324267]">Project Overview</h2>
        <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
        Opulent Interiors enlists top-tier professionals to elevate its digital presence and deliver unparalleled experiences to its discerning clientele. With a focus on luxury living, Opulent Interiors seeks to create a digital platform that showcases its exquisite collections and interior design services in the most captivating and immersive manner.
        </p>
      </motion.div>

      {/* 5. Two images: left landscape, right portrait */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="w-full flex flex-col md:flex-row gap-6"
      >
        <div className="relative w-full md:w-2/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/dYRwxaLPmpEYiUn9V0l3JnpWXuY.jpg"
            alt="Landscape"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full md:w-1/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/g5hLe7r0vimHpdYTHCloqPT4u3E.jpg?scale-down-to=2048"
            alt="Portrait"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </motion.div>

      {/* 6. Heading left and description right */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="w-full flex flex-col md:flex-row gap-150"
      >
        <h2 className="text-[17px] font-medium leading-[1.3] tracking-[-0.05em] text-[#324267]">Problem Statement</h2>
        <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
        Despite offering unparalleled luxury in interior design and furnishings, Opulent Interiors&apos; digital presence does not effectively convey the elegance and sophistication of its offerings. The current website lacks visual appeal and fails to engage potential customers, resulting in missed opportunities for conversions.
        </p>
      </motion.div>

      {/* 7. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[780px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/Fuir8Ewe1kSfTXfOb07xw2j1T1s.jpg"
          alt="Full Section Image"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>

      {/* 8. Heading left and description right */}
      <motion.div className="w-full flex flex-col md:flex-row gap-150" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="text-[17px] font-medium leading-[1.3] tracking-[-0.05em] text-[#324267]">Process/Methodology</h2>
        <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
        Our team will conduct a comprehensive analysis of Opulent Interiors&apos; brand identity, target audience demographics, and competitive landscape within the luxury interiors industry. Through collaborative workshops and strategic planning sessions, we&apos;ll develop a tailored digital strategy focused on enhancing brand visibility, driving engagement, and increasing conversions.
        </p>
      </motion.div>

      {/* 9. Two images: left portrait, right landscape */}
      <motion.div className="w-full flex flex-col md:flex-row gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="relative w-full md:w-1/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/rxedBCWz0nC5dqp7OLBgBdeG3U.jpg"
            alt="Portrait"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full md:w-2/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/dXbZKpsgaQMnxQ4qWhCt0uBrU.jpg"
            alt="Landscape"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </motion.div>

     {/* 10 & 11. Implementation & Motion Graphics */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeIn}
  className="w-full flex flex-col md:flex-row gap-150"
>
  {/* Left Heading */}
  <div className="flex-shrink-0 flex flex-col justify-start">
    <p className="text-[17px] font-medium leading-[1.3] tracking-[-0.05em] text-[#324267]">
      Implementation
    </p>
  </div>

  {/* Right Content */}
  <div className="flex-1 flex flex-col gap-6">
    {/* Product Design */}
    <h3 className="text-[34px] md:text-[40px] font-semibold text-[#324267] leading-[1.2]">
    Website Redesign
    </h3>
    <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
    We will redesign Opulent Interiors&apos; website to reflect its brand identity and showcase its luxurious collections in a visually compelling manner. The new website will feature high-quality imagery, intuitive navigation, and immersive content to captivate visitors and inspire them to explore Opulent Interiors&apos; offerings.
    </p>

    {/* Motion Graphics */}
    <h3 className="text-[34px] md:text-[40px] font-semibold text-[#324267] leading-[1.2]">
      Motion Graphics Integration
    </h3>
    <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
    Our team will incorporate captivating motion graphics into the website to enhance user engagement and create an immersive browsing experience. From subtle animations to dynamic visual effects, motion graphics will elevate the presentation of Opulent Interiors&apos; products and services.
    </p>
  </div>
</motion.div>

      {/* 12. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[700px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/L1aQhfGwKByTlyN77zra4SgrEI.jpg"
          alt="Full Section Image"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>

      {/* 13. Results/Outcomes */}
      <motion.div className="w-full flex flex-col md:flex-row gap-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="flex-1">
          <h2 className="text-[17px] font-medium leading-[1.3] tracking-[-0.05em] text-[#324267]">Results/Outcomes</h2>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h3 className="text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Enhanced Brand Visibility</h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            With our expertise, Opulent Interiors will establish a stronger digital presence and increase brand visibility among affluent clientele seeking luxury interior design and furnishings.
            </p>
          </div>
          <div>
            <h3 className="mt-6 text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Increased Engagement and Conversions
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            The redesigned website and integrated motion graphics will drive higher levels of engagement and conversions, resulting in increased inquiries and sales for Opulent Interiors
            </p>
          </div>
          <div>
            <h3 className="mt-6 text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Improved Customer Satisfaction
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            By delivering personalized and immersive digital experiences, Opulent Interiors will enhance customer satisfaction and loyalty, fostering long-term relationships with its discerning clientele.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 14. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[700px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/yy7jlhlzutsRn6bsQg1O1NezNM0.jpg"
          alt="Full Section Image"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}
