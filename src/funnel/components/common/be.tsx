"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
  image: string;
}

const benefits: Benefit[] = [
  {
    title: "Creative Expertise",
    description:
      "Our team's creativity and skill ensure your vision is realized just as you imagine.",
    image: "/images/benefits/creative-expertise.png",
  },
  {
    title: "Unlimited Revisions",
    description:
      "Refine your project with as many changes as you need, all included.",
    image: "/images/benefits/unlimited-revisions.png",
  },
  {
    title: "Flexibility",
    description:
      "Adjust your project easily as it progresses to fit your evolving needs.",
    image: "/images/benefits/flexibility.png",
  },
  {
    title: "Fixed Monthly Rate",
    description:
      "Enjoy peace of mind with a fixed monthly rate — no surprises, just consistent service.",
    image: "/images/benefits/fixed-monthly.png",
  },
  {
    title: "Timely Delivery",
    description:
      "Trust our commitment to timely project completion, ensuring your deadlines are met.",
    image: "/images/benefits/timely-delivery.png",
  },
];

export default function Benefits() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900">
            Why <span className="italic font-serif text-gray-800">Choose Us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We blend creativity, reliability, and design precision to bring your
            ideas to life — beautifully and efficiently.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="flex flex-col items-center gap-10">
          {/* First Row: 3 Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-10 w-full"
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
            className="grid md:grid-cols-2 gap-10 w-full max-w-5xl"
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
      className="relative flex flex-col items-center justify-end text-center bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-700 p-10 overflow-hidden border border-gray-100 group"
    >
      {/* 3D Image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-40 h-40 md:w-48 md:h-48">
        <Image
          src={benefit.image}
          alt={benefit.title}
          width={300}
          height={300}
          className="object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Text */}
      <div className="pt-48">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          {benefit.title}
        </h3>
        <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
    </motion.div>
  );
}
