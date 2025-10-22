// app/page.tsx or components/NovaPage.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function NovaPage() {
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
NovaDrive™
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
        Leading the automotive industry with cutting-edge technology and sustainable innovation.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 border text-gray-400 border-gray-300 rounded-full text-sm md:text-base">Branding</span>
          <span className="px-4 py-2 border text-gray-400 border-gray-300 rounded-full text-sm md:text-base">Web Design & Development</span>
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
          src="https://framerusercontent.com/images/4vWXJkfkxtU2VxkFCO8Yhkjjj5k.jpg"
          alt="Nova Drive Hero"
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
        NovaDrive™ Motors, an innovative player in the automotive industry, collaborated with Picasso Fusion to undertake a comprehensive digital transformation aimed at revolutionizing its online presence and customer engagement strategies. With a strategic focus on innovation and sustainability, NovaDrive™ sought to position itself as a trailblazer in the automotive sector by harnessing cutting-edge technology and strategic branding initiatives.


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
            src="https://framerusercontent.com/images/Zadbit4WNji2nKBgMJub0M382A.jpg"
            alt="Landscape"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full md:w-1/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/hrOJVAMRhKfkJsrOAiILeEjRA.jpg?scale-down-to=2048"
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
        NovaDrive™ Motors faced the challenge of effectively conveying its innovative vision and commitment to sustainability through its digital channels. The existing branding and digital infrastructure failed to resonate with the evolving expectations of consumers, hindering NovaDrive™&apos;s ability to engage and attract customers effectively in a competitive market landscape.


        </p>
      </motion.div>

      {/* 7. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[780px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/OgeZ09qCYfIxfuAhGA5cYisC4nw.jpg"
          alt="Full Section Image"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>

      {/* 8. Heading left and description right */}
      <motion.div className="w-full flex flex-col md:flex-row gap-150" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="text-[17px] font-medium leading-[1.3] tracking-[-0.05em] text-[#324267]">Process/Methodology</h2>
        <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
        To address NovaDrive™&apos;s challenges, Picasso Fusion initiated an in-depth analysis of the company&apos;s brand identity, target audience demographics, and the competitive landscape within the automotive industry. This thorough examination laid the groundwork for a holistic strategy that would enhance NovaDrive™&apos;s digital presence and amplify its brand messaging across various touchpoints.


        </p>
      </motion.div>

      {/* 9. Two images: left portrait, right landscape */}
      <motion.div className="w-full flex flex-col md:flex-row gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="relative w-full md:w-1/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/8mhH2JLzCutk1zasj8KIpiErI8.jpg?scale-down-to=2048"
            alt="Portrait"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full md:w-2/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/dCfNihOQzdyiVpuqp2W9I9wec.jpg"
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
    Branding
    </h3>
    <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
    Picasso Fusion crafted a modern and dynamic brand identity for NovaDrive™ Motors, capturing the essence of innovation, sustainability, and forward-thinking design. The NovaDrive™ logo embodies the brand&apos;s commitment to illuminating the future of automotive innovation, with sleek lines and vibrant colors symbolizing progress and innovation.


    </p>

    {/* Motion Graphics */}
    <h3 className="text-[34px] md:text-[40px] font-semibold text-[#324267] leading-[1.2]">
    Web Design and Development
    </h3>
    <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
    Picasso Fusion designed and developed a state-of-the-art website for NovaDrive™ Motors, featuring immersive visuals, intuitive navigation, and engaging content that showcases the brand&apos;s products and values. The website was optimized for performance across devices, ensuring a seamless user experience for visitors.
    </p>
  </div>
</motion.div>

      {/* 12. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[700px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/C4PbO3eJQqNxHfyoaLR3aWcKFM.jpg"
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
            <h3 className="text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Increased Brand Visibility
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            NovaDrive™ Motors&apos; digital presence was significantly strengthened, leading to increased brand visibility and recognition in the automotive industry.
            </p>
          </div>
          <div>
            <h3 className="mt-6 text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Enhanced Customer Engagement
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            The revamped website and digital marketing initiatives helped NovaDrive™ Motors engage with customers more effectively, driving higher levels of interaction and brand affinity.
            </p>
          </div>
          <div>
            <h3 className="mt-6 text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Improved Conversion Rates
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            NovaDrive™ Motors experienced a boost in lead generation and conversion rates, resulting in tangible business growth and ROI.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 14. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[700px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/ew7FYuuQOFT6whO8xe1H8iSls.jpg"
          alt="Full Section Image"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}
