// app/page.tsx or components/AuluxePage.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function AuluxePage() {
  return (
    <div id="Auluxe" className="w-full bg-white flex flex-col items-start px-6 md:px-12 lg:px-24 space-y-24">

      {/* 1. Big Header */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-[5rem] md:text-[8rem] font-semibold text-left text-[#394560]"
      >
        Auluxe™
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
          Redefining luxury in audio with advanced technology and exquisite design.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 border text-gray-400 border-gray-300 rounded-full text-sm md:text-base">Product Design</span>
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
          src="https://framerusercontent.com/images/PasykLOKcBfLT5yRCJy3BP5w.jpg"
          alt="Auluxe Hero"
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
        Auluxe™ is not just a brand; it&apos;s a testament to the fusion of artistry and technology. Our meticulously crafted audio solutions combine exquisite product design with dynamic motion graphics to create an immersive auditory experience like no other. From sleek speakers to mesmerizing visualizations, each Auluxe™ product is a masterpiece of innovation and elegance.
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
            src="https://framerusercontent.com/images/dF1dIzWRL0zCTRrSPHf6Yf0W1g.jpg"
            alt="Landscape"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full md:w-1/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/jJOiDAqPKitVLjXCHO7zG0368.jpg"
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
        In a world inundated with audio products, Auluxe™ recognized the need for a brand that could elevate the listening experience to new heights. Traditional sound systems lacked the visual appeal and immersive qualities demanded by modern consumers, prompting Auluxe™ to embark on a journey to redefine luxury audio.
        </p>
      </motion.div>

      {/* 7. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[780px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/mWOQghkxD31QHLV7txexZVkBzc.jpg"
          alt="Full Section Image"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>

      {/* 8. Heading left and description right */}
      <motion.div className="w-full flex flex-col md:flex-row gap-150" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="text-[17px] font-medium leading-[1.3] tracking-[-0.05em] text-[#324267]">Process/Methodology</h2>
        <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
        To achieve this goal, Auluxe™ assembled a team of experts in product design, motion graphics, and audio technology. Through meticulous research and experimentation, we developed a range of audio solutions that seamlessly integrate stunning visuals with superior sound quality. Our products undergo rigorous testing and refinement to ensure they meet the highest standards of performance and aesthetics.
        </p>
      </motion.div>

      {/* 9. Two images: left portrait, right landscape */}
      <motion.div className="w-full flex flex-col md:flex-row gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="relative w-full md:w-1/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/oOuiL5ULnLALt9Spi9sOiBzDcA.jpg"
            alt="Portrait"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full md:w-2/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/NXhKB66xce5oo1vajFFPtkVBXuA.jpg"
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
      Product Design
    </h3>
    <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
      Auluxe™ products are a testament to the marriage of form and function. Each speaker, amplifier, and audio device is crafted with precision and care, using premium materials and innovative design techniques to achieve both visual elegance and acoustic excellence.
    </p>

    {/* Motion Graphics */}
    <h3 className="text-[34px] md:text-[40px] font-semibold text-[#324267] leading-[1.2]">
      Motion Graphics
    </h3>
    <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
      In addition to exceptional sound quality, Auluxe™ products feature dynamic motion graphics that enhance the auditory experience. Our motion visualizations respond to the music in real-time, creating a mesmerizing audio-visual spectacle that captivates the senses and elevates the listening experience.
    </p>
  </div>
</motion.div>

      {/* 12. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[700px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/OHcLVMW3Ix7Y8q4kwjGKFad8dnw.jpg"
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
            <h3 className="text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Unparalleled Sensory Experience</h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            Auluxe™ products have redefined luxury audio, offering consumers a sensory journey that transcends traditional sound systems. With stunning visuals and superior sound quality, our products engage the eyes and ears in a symphony of sensation.
            </p>
          </div>
          <div>
            <h3 className="mt-6 text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Brand Recognition</h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            Auluxe™ has quickly become synonymous with luxury and innovation in the audio industry, earning accolades and recognition from consumers and critics alike. Our commitment to excellence has solidified our position as a leader in the field of premium audio.
            </p>
          </div>
          <div>
            <h3 className="mt-6 text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Customer Satisfaction
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            Above all, Auluxe™ is dedicated to delighting our customers. With products that exceed expectations and a commitment to customer service, we have earned the trust and loyalty of audiophiles around the world.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 14. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[700px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/NXhKB66xce5oo1vajFFPtkVBXuA.jpg"
          alt="Full Section Image"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}
