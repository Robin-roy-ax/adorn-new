"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
  image: string;
  rotation: number;
}

const benefits: Benefit[] = [
  {
    title: "Creative Expertise",
    description:
      "Our team's creativity and skill ensure your vision is realized just as you imagine.",
      image: "https://framerusercontent.com/images/l3KNSNbkgNv2hJLVWQeFkd4lHpY.png",
      rotation: 0,
  },
  {
    title: "Unlimited Revisions",
    description:
      "Refine your project with as many changes as you need, all included.",
      image: "https://framerusercontent.com/images/IYxqjuIsZKRILxwnpHfCaF5pDU.png",
      rotation: -326,
  },
  {
    title: "Flexibility",
    description:
      "Adjust your project easily as it progresses to fit your evolving needs.",
      image: "https://framerusercontent.com/images/VlpbceWkAaM2u7S64Jp0wgZj78.png",
      rotation: 360,
  },
  {
    title: "Fixed Monthly Rate",
    description:
      "Enjoy peace of mind with a fixed monthly rate — no surprises, just consistent service.",
      image: "https://framerusercontent.com/images/QE1dsl8X4T07kGMEhHvYY8AjZI.png",
      rotation: 35,
  },
  {
    title: "Timely Delivery",
    description:
      "Trust our commitment to timely project completion, ensuring your deadlines are met.",
      image: "https://framerusercontent.com/images/afXs1pv78HA13RYyTc5Talai04.png",
      rotation: -395,
  },
];

export default function Benefits() {
  return (
    <section className="w-full py-24 bg-white">
      <div>
        {/* Section Header */}
         <motion.div 
     className="max-w-[1600px] px-8 ml-24 mr-24 py-24"
     initial={{ opacity: 0, y: 40 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 1 }}>
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
    {/* Title */}
    <h2 className="text-[120px] xl:text-[100px] lg:text-[84px] md:text-[64px] sm:text-[48px] font-medium leading-[1.05em] tracking-[-0.05em] text-[#343E56]">
      Discover your
      <span className="font-['Instrument_Serif'] italic font-normal">
        Benefits
      </span>
    </h2>

    {/* Description */}
    <p className="text-gray-600 text-lg md:text-base lg:max-w-md">
            Explore the exclusive advantages of partnering with Picasso Fusion for all your
            creative needs.
          </p>
  </div>
</motion.div>
        {/* Grid Layout */}
        <div className="ml-20 space-y-10 mr-20">
          {/* First Row: 3 Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-10 h-[31.25rem] w-[100%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {benefits.slice(0, 3).map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </motion.div>

          {/* Second Row: 2 Cards Centered */}
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {benefits.slice(3).map((benefit, index) => (
              <BenefitCard key={index + 3} benefit={benefit} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Individual Card Component */
function BenefitCard({ benefit }: { benefit: Benefit }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      className="relative flex flex-col items-center justify-end text-center bg-[radial-gradient(100%_75%_at_0%_0%,#cbd4e4_0%,#f5f6fa_100%)]
 rounded-3xl shadow-[0_.78363px_.78363px_-.535714px_#dde3eebd,0_1.91965px_1.91965px_-1.07143px_#dde3eeba,0_3.63745px_3.63745px_-1.60714px_#dde3eeb3,0_6.35004px_6.35004px_-2.14286px_#dde3eeab,0_11.0519px_11.0519px_-2.67857px_#dde3ee9c,0_20.2428px_20.2428px_-3.21429px_#dde3ee80,0_40px_40px_-3.75px_#dde3ee40] hover:shadow-lg transition-all duration-700 p-10 overflow-hidden border border-gray-100 group w-[100%] h-[31.25rem]"
    >
      {/* 3D Image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-40 h-40 md:w-48 md:h-48">
        <Image
          src={benefit.image}
          alt={benefit.title}
          width={300}
          height={300}
          style={{rotate: `${benefit.rotation}deg`}}
          className="object-contain group-hover:scale-110 mt-20 transition-transform duration-700 drop-shadow-3xl"
        />
      </div>

      {/* Text */}
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="pt-48 text-center"
>
  <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
    {benefit.title}
  </h3>
  <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md mx-auto">
    {benefit.description}
  </p>
</motion.div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
    </motion.div>
  );
}
