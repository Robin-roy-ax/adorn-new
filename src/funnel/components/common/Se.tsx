"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Branding",
    description:
      "From logo design to brand messaging, we'll help you establish a distinct brand presence that sets you apart from the competition.",
    image: "/images/services/branding.png",
  },
  {
    title: "Web Design & Development",
    description:
      "We'll work with you to build a website that not only looks great but also converts visitors into customers.",
    image: "/images/services/web-design.png",
  },
  {
    title: "Product Design",
    description:
      "We'll guide you through every step of the process to ensure your product stands out in the market.",
    image: "/images/services/product-design.png",
  },
  {
    title: "Digital Marketing",
    description:
      "We'll develop a custom strategy that aligns with your business goals and target audience to deliver measurable results.",
    image: "/images/services/digital-marketing.png",
  },
  {
    title: "Illustration",
    description:
      "Our illustrations add depth and personality to your projects, enhancing storytelling and creating memorable visual experiences.",
    image: "/images/services/illustration.png",
  },
  {
    title: "Motion Graphics",
    description:
      "Through captivating animations, we turn ideas into immersive experiences, helping you convey your message effectively and creatively.",
    image: "/images/services/motion-graphics.png",
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900">
            Our Creative <span className="italic font-serif">Offerings</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive suite of creative services designed to elevate your brand and captivate your audience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative bg-[#0d153a] text-white rounded-3xl p-10 overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              {/* Background gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Image */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-80 pointer-events-none">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 mt-40">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
