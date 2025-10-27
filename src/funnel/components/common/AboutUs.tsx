"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

// =================== Counter Component ===================
function Counter({ target, suffix }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500; // total duration in ms
    const increment = target / (duration / 20); // update every 20ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-[72px] font-bold bg-gradient-to-b from-[rgb(0,68,255)] to-white bg-clip-text text-transparent">
      {count}
      {suffix}
    </div>
  );
}

// =================== Main Component ===================
export default function AboutUs() {
  const stats = [
    { value: 100, suffix: "+", label: "Projects completed" },
    { value: 12, suffix: "", label: "Industry awards" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 125, suffix: "K", label: "ROI achieved for clients" },
  ];

  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center bg-white text-center px-6 md:px-12 lg:px-24 py-24"
    >
      {/* ================== Hero Text ================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{delay: 0.2, duration: 0.7 }}
        className="flex mt-45 flex-col items-center justify-center"
      >
        <h2 className="font-inter text-[2.5rem] md:text-[5rem] lg:text-[6rem] font-medium leading-[1.1em] tracking-[-0.05em] text-[rgb(45,55,83)]">
          We&apos;re a{" "}
          <span className="font-[400] italic font-[Instrument_Serif] text-[rgb(45,55,83)]">
            creative studio
          </span>{" "}
          <br />
          based in London
        </h2>

        <p className="mt-6 text-[#8592b1] text-center text-lg md:text-lg max-w-3xl leading-relaxed">
          At Picasso Fusion, creativity is our cornerstone. We&apos;re a dynamic team driven
          by innovation and dedicated to bringing your vision to life.
        </p>
      </motion.div>

      {/* ================== Hero Image ================== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative w-full mt-20"
      >
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
          <Image
            src="https://framerusercontent.com/images/IjRP7RIug6UNzqeHbNO5WxD3FDk.jpg"
            alt="Creative Studio Image"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center rounded-2xl"
          />
        </div>
      </motion.div>

      {/* ================== Overview ================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-24 max-w-4xl mx-auto flex flex-col items-center justify-center"
      >
        <p className="text-[3rem] md:text-[3rem] lg:text-[3rem] text-[rgb(133,146,177)] leading-[1.3em] tracking-[-0.05em] text-center">
          Picasso Fusion is a vibrant creative studio dedicated to crafting exceptional brand experiences. 
          Since 2020, we&apos;ve been shaping digital landscapes and driving meaningful connections worldwide.
        </p>
      </motion.div>

      {/* ================== Mission ================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-24 w-full flex flex-col lg:flex-row items-start justify-start max-w-6xl mx-auto gap-12"
      >
        <div className="lg:w-1/3 flex justify-start pl-6 md:pl-12 lg:pl-24">
          <h3 className="text-xl md:text-2xl font-semibold text-[rgb(40,51,77)]">
            Our Mission
          </h3>
        </div>
        <div className="lg:w-2/3 text-xl font-semibold">
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Empowering brands to thrive in a digital world, we inspire imagination, 
            collaboration, and excellence. Our goal is to elevate brands through impactful 
            storytelling and innovative design solutions.
          </p>
        </div>
      </motion.div>

      {/* ================== Approach ================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-24 w-full flex flex-col lg:flex-row items-start justify-start max-w-6xl mx-auto gap-12"
      >
        <div className="lg:w-1/3 flex justify-start pl-6 md:pl-12 lg:pl-24">
          <h3 className="text-xl md:text-2xl font-semibold text-[rgb(40,51,77)]">
            Our Approach
          </h3>
        </div>
        <div className="lg:w-2/3 text-xl font-semibold">
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            We embrace collaboration, working closely with our clients to
            understand their goals and challenges. Through open dialogue and
            creative exploration, we develop customized solutions that resonate
            with audiences and drive results. Our iterative process ensures every
            aspect of our work is refined and perfected, delivering exceptional
            quality and value.
          </p>
        </div>
      </motion.div>

      {/* ================== Numbers ================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-24 w-full flex flex-col lg:flex-row items-start max-w-6xl mx-auto gap-12"
      >
        {/* Left Header */}
        <div className="lg:w-1/3 flex justify-start pl-6 md:pl-12 lg:pl-24">
          <h3 className="text-xl md:text-2xl font-semibold text-[rgb(40,51,77)]">
            In Numbers
          </h3>
        </div>

        {/* Right Numbers Grid */}
        <div className="lg:w-2/3 grid grid-cols-2 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-lg text-gray-400 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ===== Meet Our Team ===== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="mt-32 w-full flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24"
>
  {/* Heading */}
  <h2 className="font-inter text-[2.5rem] md:text-[5rem] lg:text-[6rem] font-medium leading-[1.1em] tracking-[-0.05em] text-[rgb(45,55,83)]">
    Meet Our{" "}
    <span className="font-[400] italic font-[Instrument_Serif]">
      Team
    </span>
  </h2>

  {/* Sub Description */}
  <p className="mt-6 text-base md:text-lg text-[rgb(133,146,177)] max-w-3xl leading-relaxed">
    Discover the Exceptional Talent Shaping Picasso Fusion&apos;s Innovative Solutions and Remarkable Achievements
  </p>
</motion.div>
{/* ===== Team Grid ===== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1340px] mx-auto"
>
  {[
    {
      name: "Karim Benzema",
      role: "Founder/Creative Director",
      image: "https://framerusercontent.com/images/EmrjuKhlE2MYwMMNxmKiVqqR4.png",
      description:
        "Karim is the visionary behind Picasso Fusion, leading the team with his passion for creativity and innovation. With years of experience in the industry, he drives the company's mission to create exceptional brand experiences.",
    },
    {
      name: "Matthew Davis",
      role: "Brand Strategist",
      image: "https://framerusercontent.com/images/EFyr6qMiyaDXQ7NXQBtz3PZUM.png",
      description:
        "Matthew is a master storyteller who helps our clients build strong and memorable brands. His strategic insights and creative thinking set the foundation for successful brand campaigns.",
    },
    {
      name: "Maqsood",
      role: "Senior Product Designer",
      image: "https://framerusercontent.com/images/KvYpZpFddcRRqVruxUZfmzSh0.png",
      description:
        "Maqsood is a creative powerhouse who brings ideas to life with his impeccable design skills. His user-centric approach ensures that our products not only look great but also deliver exceptional experiences.",
    },
    {
      name: "Daniel Mitchell",
      role: "Digital Marketing Manager",
      image: "https://framerusercontent.com/images/2SxzBFprM3cmjAl5NQvLmgktkY.png",
      description:
        "Daniel is a strategic thinker with a passion for digital marketing. His data-driven approach helps our clients achieve their business goals through targeted campaigns and effective online strategies.",
    },
    {
        name: "Ali Hassan",
        role: "Lead Web Developer",
        image: "https://framerusercontent.com/images/YfiWn0gVlP7wcJSozAnGEpbzYs.png?scale-down-to=1024",
        description: "Ali Hassan is a coding wizard with a knack for turning complex ideas into seamless digital experiences. His attention to detail ensures that every website we create is pixel-perfect.",
    },
    {
        name: "Ryan Johnson",
        role: "Motion Graphics Designer",
        image: "https://framerusercontent.com/images/w3zFIzqHBzSu5Fc9GhlQnPk1Ppc.png",
        description: "Ryan is a creative genius who brings motion to our projects with stunning animations and visuals. His eye for detail and innovative approach make our videos come to life.",
    }
].map((member, idx) => (
    <div
      key={idx}
      className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer w-full h-[32rem]" // increased height
    >
      {/* Background image */}
      <div className="relative w-full h-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="100vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition duration-500 group-hover:bg-slate-800/70"></div>
      </div>

      {/* Name and Role */}
      <div className="absolute bottom-4 left-4 text-left text-white transition-all duration-300">
        <h4 className="text-2xl font-bold">{member.name}</h4>
        <p className="text-lg text-gray-200">{member.role}</p>
      </div>

      {/* Hover description overlay */}
      <div className="absolute top-0 backdrop-blur-sm h-full left-0 space-x-1 space-y-10 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex text-gray-400 text-left">
        <p className="text-base sm:text-lg">{member.description}</p>
      </div>
    </div>
  ))}
</motion.div>
    </section>
  );
}
