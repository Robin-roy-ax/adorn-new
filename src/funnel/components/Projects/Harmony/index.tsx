// app/page.tsx or components/HarmonyPage.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function HarmonyPage() {
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
Harmony Beats™
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
        Setting new standards in the music industry with innovative sounds and creative prowess
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 border text-gray-400 border-gray-300 rounded-full text-sm md:text-base">Web Design & Development</span>
          <span className="px-4 py-2 border text-gray-400 border-gray-300 rounded-full text-sm md:text-base">Digital Marketing</span>
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
          src="https://framerusercontent.com/images/JPLGJwzN5KlpBsFfWV1GAeJdbE.jpg"
          alt="Harmony Hero"
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
        Harmony Beats, an avant-garde force in the music industry, partnered with Picasso Fusion to embark on a transformative journey towards revolutionizing its digital presence and customer engagement strategies. With a vision centered on creativity and innovation, Harmony Beats aimed to establish itself as a trendsetter in the music landscape by leveraging cutting-edge technology and strategic branding initiatives.
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
            src="https://framerusercontent.com/images/1VZOaC663QnbJRbKitOfxuyRLo.jpg"
            alt="Landscape"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full md:w-1/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/saHrYjjyANJUao2JRpyTngQobw.jpg?scale-down-to=1024"
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
        Harmony Beats faced the challenge of effectively communicating its unique vision and dedication to artistic expression through its digital platforms. The existing branding and online infrastructure fell short in resonating with the evolving preferences of music enthusiasts, impeding Harmony Beats&apos; ability to connect and captivate audiences in a competitive industry landscape.
         </p>
      </motion.div>

      {/* 7. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[780px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/9dPQNXK2ycdQik6yU3VyojuILY.jpg"
          alt="Full Section Image"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>

      {/* 8. Heading left and description right */}
      <motion.div className="w-full flex flex-col md:flex-row gap-150" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="text-[17px] font-medium leading-[1.3] tracking-[-0.05em] text-[#324267]">Process/Methodology</h2>
        <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
        To tackle Harmony Beats&apos; challenges, Picasso Fusion initiated an extensive analysis of the brand&apos;s identity, audience demographics, and the competitive landscape within the music industry. This comprehensive assessment formed the foundation for a holistic strategy aimed at enhancing Harmony Beats&apos; digital footprint and amplifying its brand narrative across various touchpoints.


        </p>
      </motion.div>

      {/* 9. Two images: left portrait, right landscape */}
      <motion.div className="w-full flex flex-col md:flex-row gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="relative w-full md:w-1/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/Ph5nGFoBIlJNTywj5jEyLKlDM.jpg?scale-down-to=1024"
            alt="Portrait"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full md:w-2/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/x64FiqRFHUKrwuwlpktQo0pbEqc.jpg"
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
    Design & Development
    </h3>
    <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
    Picasso Fusion crafted a cutting-edge website for Harmony Beats, featuring immersive visuals, seamless navigation, and compelling content that showcases the brand&apos;s diverse portfolio of music and artists. The website was meticulously designed to deliver an exceptional user experience across all devices, ensuring seamless interaction for visitors.


    </p>

    {/* Motion Graphics */}
    <h3 className="text-[34px] md:text-[40px] font-semibold text-[#324267] leading-[1.2]">
    Digital Marketing
    </h3>
    <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
    Picasso Fusion devised and implemented a comprehensive digital marketing strategy for Harmony Beats, leveraging a mix of social media campaigns, email marketing, and content creation to enhance brand visibility and drive engagement. Through targeted outreach and strategic messaging, Picasso Fusion aimed to expand Harmony Beats&apos; audience reach and foster deeper connections with music enthusiasts.
    </p>
  </div>
</motion.div>

      {/* 12. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[700px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/y3nyD4QJwcmweTDfAVJaBiX8AQ.jpg"
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
            <h3 className="text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Elevated Brand Visibility
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            Harmony Beats witnessed a substantial enhancement in its digital presence, leading to heightened brand visibility and recognition within the music industry.
            </p>
          </div>
          <div>
            <h3 className="mt-6 text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Enhanced Audience Engagement
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            The revamped website and strategic digital marketing initiatives enabled Harmony Beats to foster deeper connections with its audience, resulting in increased interaction and affinity towards the brand.
            </p>
          </div>
          <div>
            <h3 className="mt-6 text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Improved Conversion Rates
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            Harmony Beats experienced a surge in lead generation and conversion rates, translating into tangible business growth and a substantial return on investment.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 14. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[700px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/pTdUu0EcqLnSSQKFuDTNjzvDb0w.jpg"
          alt="Full Section Image"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}
