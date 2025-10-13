"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    title: "Auluxe™",
    description:
      "Redefining luxury in audio with advanced technology and exquisite design.",
    tags: ["Product Design", "Motion Graphics"],
    image: "https://framerusercontent.com/images/PasykLOKcBfLT5yRCJy3BP5w.jpg",
  },
  {
    title: "Opulent Interiors™",
    description:
      "A luxury interior design firm specializing in bespoke designs and curated furnishings for discerning clients.",
    tags: ["Web Design & Development", "Motion Graphics"],
    image: "https://framerusercontent.com/images/UV0kfsR1WzRkqCK4mMW1O9t0.jpg",
  },
  {
    title: "Urban Odyssey™",
    description:
      "A travel agency passionate about unlocking the hidden gems of the city exploration",
    tags: ["Brand Identity", "Motion Graphics"],
    image: "https://framerusercontent.com/images/TnTieucPuc0WFxg1tIh4JTPmp4.jpg",
  },
  {
    title: "NovaDrive™",
    description:
      "Leading the automotive industry with the cutting-edge technology and sustainable innovations",
    tags: ["Concept Art", "3D Design"],
    image: "	https://framerusercontent.com/images/4vWXJkfkxtU2VxkFCO8Yhkjjj5k.jpg",
  },
];

export default function FeaturedWork() {
  return (
    <section className="w-full py-20 bg-white text-gray-900">
     <div className="max-w-[1600px] mx-auto px-8 py-24">
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
    {/* Title */}
    <h2 className="text-[120px] xl:text-[100px] lg:text-[84px] md:text-[64px] sm:text-[48px] font-medium leading-[1.05em] tracking-[-0.05em] text-[#343E56]">
      Featured{" "}
      <span className="font-['Instrument_Serif'] italic font-normal">
        Work
      </span>
    </h2>

    {/* Description */}
    <p className="text-[#6F80A8] text-2xl md:text-xl leading-relaxed max-w-xl lg:max-w-2xl">
      Dive into a world of creativity and inspiration with our portfolio.
      Explore our work and imagine the possibilities for your brand.
    </p>
  </div>
</div>

      {/* Horizontal Scroll Carousel */}
      <HorizontalScrollCarousel />

      {/* Footer Button */}
      <div className="text-center mt-16">
        <button className="border border-gray-300 text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-full transition">
          See more of our work
        </button>
      </div>
    </section>
  );
}

function HorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group flex-shrink-0 w-[750px] h-[560px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-700 bg-gray-100 cursor-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Text Content */}
              <div className="absolute flex  gap-3 bottom-0 p-8 text-white">
                <h3 className="text-3xl font-semibold">{project.title}</h3>
                <p className="text-base text-gray-200 mt-3">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="absolute top-5 left-5 flex flex-wrap flex-end justify-content align-items gap-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-white/30 backdrop-blur-md text-white px-4 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Cursor */}
        <motion.div
          className="pointer-events-none fixed z-50 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-lg text-white border border-white/40 text-sm font-medium uppercase"
          style={{
            x: mousePos.x - 60,
            y: mousePos.y - 60,
            width: 120,
            height: 120,
            opacity: hovering ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          View <span className="font-light italic"> Project</span>
        </motion.div>
      </div>
    </section>
  );
}
