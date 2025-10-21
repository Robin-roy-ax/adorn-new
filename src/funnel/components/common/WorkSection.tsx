"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ViewProjectCursor from "@/funnel/components/FeaturedWork/MousePointer"; // ✅ Import custom cursor

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "Auluxe™",
    description:
      "Redefining luxury in audio with advanced technology and exquisite design.",
    image: "https://framerusercontent.com/images/PasykLOKcBfLT5yRCJy3BP5w.jpg",
    tags: ["Product Design", "Motion Graphics"],
    href: "/work/auluxe",
  },
  {
    title: "Opulent Interiors™",
    description:
      "A luxury interior design firm specializing in bespoke designs and curated furnishings for discerning clients.",
    image: "https://framerusercontent.com/images/UV0kfsR1WzRkqCK4mMW1O9t0.jpg",
    tags: ["Web Design & Development", "Motion Graphics"],
    href: "/work/opulent-interiors",
  },
  {
    title: "Urban Odyssey™",
    description:
      "A travel agency passionate about unlocking the hidden gems of city exploration.",
    image: "https://framerusercontent.com/images/TnTieucPuc0WFxg1tIh4JTPmp4.jpg",
    tags: ["Branding", "Digital Marketing"],
    href: "/work/urban-odyssey",
  },
  {
    title: "NovaDrive™",
    description:
      "Leading the automotive industry with cutting-edge technology and sustainable innovation.",
    image: "https://framerusercontent.com/images/4vWXJkfkxtU2VxkFCO8Yhkjjj5k.jpg",
    tags: ["Branding", "Web Design & Development"],
    href: "/work/novadrive",
  },
  {
    title: "ArchSphere™",
    description:
      "A leading architectural firm, known for its visionary designs and commitment to excellence in the field.",
    image: "https://framerusercontent.com/images/O29DpdvIy6flDurZSMSm66nM8.jpg",
    tags: ["Branding", "Web Design & Development"],
    href: "/work/archsphere",
  },
  {
    title: "Harmony Beats™",
    description:
      "Setting new standards in the music industry with innovative sounds and creative prowess.",
    image: "https://framerusercontent.com/images/JPLGJwzN5KlpBsFfWV1GAeJdbE.jpg",
    tags: ["Web Design & Development", "Digital Marketing"],
    href: "/work/harmony-beats",
  },
];

export default function WorkSection() {
  const [cursorVisible, setCursorVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // ✅ Track mouse position when cursor is visible
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (cursorVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorVisible]);

  return (
    <section
      id="work"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-20 py-24 bg-white text-gray-900 overflow-hidden"
    >
      {/* ✅ Custom Cursor */}
      <AnimatePresence>
        {cursorVisible && (
          <ViewProjectCursor visible={cursorVisible} mousePos={mousePos} />
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-[64px] md:text-[96px] font-medium leading-[1.1em] tracking-[-0.05em] text-[#2D3753]">
          Our Finest{" "}
          <span className="font-[400] italic font-serif">Works</span>
        </h2>
        <p className="text-[#939CAD] mt-6 max-w-2xl mx-auto text-lg">
          Discover our curated selection of standout projects. Each one represents
          our dedication to creativity and excellence.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1440px]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            {/* ✅ Image Card (hover activates custom cursor) */}
            <div
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              className="relative w-full cursor-none"
            >
              <Link
                href={project.href}
                className="block rounded-3xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_45px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-none"
              >
                <div className="relative w-full h-[420px] cursor-none">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center cursor-none"
                  />
                </div>
              </Link>
            </div>

            {/* ✅ Content (below card, not clickable) */}
            <div className="mt-6">
  {/* Title */}
  <h3 className="text-2xl font-semibold text-[#2D3753] mb-3">
    {project.title}
  </h3>

  {/* Tags below title */}
  <div className="flex flex-wrap gap-3 mb-4">
    {project.tags.map((tag, i) => (
      <span
        key={i}
        className="border border-gray-300 px-3 py-1 text-sm text-gray-600 rounded-full"
      >
        {tag}
      </span>
    ))}
  </div>

  {/* Description */}
  <p className="text-[#8592B1] leading-relaxed mt-2">
    {project.description}
  </p>
</div>          </motion.div>
        ))}
      </div>
    </section>
  );
}
