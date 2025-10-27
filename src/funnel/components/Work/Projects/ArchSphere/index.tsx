// app/page.tsx or components/ArchPage.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function ArchPage() {
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
ArchSphere™
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
        A leading architectural firm, known for its visionary designs and commitment to excellence in the field.
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
          src="https://framerusercontent.com/images/O29DpdvIy6flDurZSMSm66nM8.jpg"
          alt="ArchSphere Hero"
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
        ArchSphere™ aims to elevate its online presence and communicate its dedication to architectural excellence through a captivating digital platform. Focused on branding and web design and development, the objective is to create an immersive website that reflects the firm&apos;s ethos and attracts clients who value architectural mastery.
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
            src="https://framerusercontent.com/images/rxAu618BDngEk5wiAszoeSYwCoU.jpg"
            alt="Landscape"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full md:w-1/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/aOAea9tp32RK1DeISIJUCGFoasU.jpg?scale-down-to=2048"
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
        Despite its reputation for architectural brilliance, ArchSphere™&apos;s current digital presence lacks cohesion and fails to capture the essence of its brand effectively. The existing website lacks visual appeal and does not showcase the firm&apos;s portfolio in a manner befitting its stature, resulting in missed opportunities to engage potential clients.
         </p>
      </motion.div>

      {/* 7. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[780px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/W94gbq3FkXkeogcNd3F8bw7bBCg.jpg"
          alt="Full Section Image"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>

      {/* 8. Heading left and description right */}
      <motion.div className="w-full flex flex-col md:flex-row gap-150" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="text-[17px] font-medium leading-[1.3] tracking-[-0.05em] text-[#324267]">Process/Methodology</h2>
        <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
        Picasso Fusion Creative Studio conducts an in-depth analysis of ArchSphere™&apos;s brand identity and values. Through collaborative workshops and meticulous planning, a tailored approach is developed to refine the firm&apos;s branding and create a visually stunning website that resonates with its audience.
         </p>
      </motion.div>

      {/* 9. Two images: left portrait, right landscape */}
      <motion.div className="w-full flex flex-col md:flex-row gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="relative w-full md:w-1/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/PNlhylAXUQI64sd3VSGeDUDC5Lk.jpg?scale-down-to=2048"
            alt="Portrait"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full md:w-2/3 h-[500px] md:h-[600px]">
          <Image
            src="https://framerusercontent.com/images/GfGXfubougPfqsKp64rLBPwOTUg.jpg"
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
    Branding Refinement
    </h3>
    <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
    Picasso Fusion refines ArchSphere™&apos;s brand identity to encapsulate its dedication to architectural excellence and innovation. The updated branding exudes sophistication and sets the tone for a cohesive digital experience.
    </p>

    {/* Motion Graphics */}
    <h3 className="text-[34px] md:text-[40px] font-semibold text-[#324267] leading-[1.2]">
    Website Redesign and Development
    </h3>
    <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
    Picasso Fusion redesigns and develops ArchSphere™&apos;s website with a focus on showcasing its portfolio of architectural marvels. The new website features sleek design elements, intuitive navigation, and high-resolution imagery to provide visitors with an immersive journey through the firm&apos;s projects.
    </p>
  </div>
</motion.div>

      {/* 12. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[700px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/w2RSwp9P8ZfNwgFeDmr7FtmQO8.jpg"
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
            <h3 className="text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Elevated Brand Presence
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            With the refined branding and redesigned website, ArchSphere™ establishes a more compelling digital presence that accurately reflects its ethos of architectural elegance and excellence.
            </p>
          </div>
          <div>
            <h3 className="mt-6 text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">Enhanced User Experience
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            The new website, characterized by its intuitive design and captivating visuals, engages visitors and enables them to explore ArchSphere™&apos;s portfolio with ease, fostering a deeper appreciation for the firm&apos;s architectural prowess.
            </p>
          </div>
          <div>
            <h3 className="mt-6 text-[34px] md:text-[40px] py-2 font-semibold text-[#324267] leading-[1.2]">IIncreased Client Engagement
            </h3>
            <p className="text-[25px] font-semibold leading-[1.3] tracking-[-0.05em] text-gray-400">
            By effectively showcasing its portfolio of architectural marvels, ArchSphere™ attracts increased interest from potential clients, leading to heightened engagement and inquiries about the firm&apos;s services.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 14. Full Image */}
      <motion.div className="w-full h-[500px] md:h-[700px] relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <Image
          src="https://framerusercontent.com/images/6qjIxtN9s6WJB5UmLE7K4lbxcCA.jpg"
          alt="Full Section Image"
          fill
          className="object-bottom object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}
