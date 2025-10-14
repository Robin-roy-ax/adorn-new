"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
  rotation: number;
}

const services: Service[] = [
  {
    title: "Branding",
    description:
      "From logo design to brand messaging, we'll help you establish a distinct brand presence that sets you apart from the competition.",
    image: "https://framerusercontent.com/images/svgULmsLIR41ZA5On0KPuibbbc.png",
    rotation: 0,
  },
  {
    title: "Web Design & Development",
    description:
      "We'll work with you to build a website that not only looks great but also converts visitors into customers.",
    image: "https://framerusercontent.com/images/6IP97ZRD4NSJGtkCPoY45z48PJI.png",
    rotation: 326,
  },
  {
    title: "Product Design",
    description:
      "We'll guide you through every step of the process to ensure your product stands out in the market.",
    image: "https://framerusercontent.com/images/BeD6z3moFk0VK8rfQi47fcnvNXU.png",
    rotation: -87,
  },
  {
    title: "Digital Marketing",
    description:
      "We'll develop a custom strategy that aligns with your business goals and target audience to deliver measurable results.",
    image: "https://framerusercontent.com/images/eGQ39KbasgFve63JkjG1lWcG8fg.png",
    rotation: -48,
  },
  {
    title: "Illustration",
    description:
      "Our illustrations add depth and personality to your projects, enhancing storytelling and creating memorable visual experiences.",
    image: "https://framerusercontent.com/images/jHGkE4ck4SwPCnW5Y2feEa4.png",
    rotation: -43,
  },
  {
    title: "Motion Graphics",
    description:
      "Through captivating animations, we turn ideas into immersive experiences, helping you convey your message effectively and creatively.",
    image: "https://framerusercontent.com/images/BHHyLryf6P4LFzyZBFOzquLQGkQ.png",
    rotation: -381,
  },
];

export default function Services() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[90.625rem] mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.h2
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-center text-[120px] xl:text-[100px] lg:text-[80px] md:text-[60px] sm:text-[40px] font-medium leading-[1.05em] tracking-[-0.05em] text-[#343E56]"
>
  Our Creative{" "}
  <span className="font-['Instrument_Serif'] italic font-normal tracking-normal">
    Offerings
  </span>
</motion.h2>


        {/* Description */}
        <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center text-[#6F80A8] text-lg md:text-md leading-relaxed max-w-3xl mx-auto mt-8"
    >
      We offer a comprehensive suite of creative services designed to elevate
      your brand and captivate your audience.
    </motion.p>

   {/* Services Grid */}
<section className="w-full py-24">
  <motion.div
    className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-center max-w-[95rem] mx-auto "
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: { transition: { staggerChildren: 0.2 } },
    }}
  >
    {services.map((service, index) => (
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
        key={index}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="relative w-[28rem] h-[28rem] bg-[#111a3b] rounded-3xl overflow-hidden group
                   text-white p-10 shadow-lg hover:shadow-2xl transition-all duration-700 mx-auto"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

        {/* Rotated Image */}
        <div
          className="absolute top-0 right-0 w-[15rem] h-[15rem] opacity-80 pointer-events-none"
          style={{ transform: `rotate(${service.rotation}deg)` }}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 mt-48 text-left"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white text-[38px] md:text-[32px] sm:text-[26px] font-semibold mb-3 leading-tight"
          >
            {service.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed text-lg md:text-base max-w-md"
          >
            {service.description}
          </motion.p>
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
</section>

      </div>
    </section>
  );
}
