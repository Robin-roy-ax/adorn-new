"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Picasso Fusion took our brand to new heights with their innovative designs and strategic approach. Their team's creativity and attention to detail truly set them apart.",
    name: "John Smith",
    title: "CEO of Bright Ideas Co.",
    image:
      "https://framerusercontent.com/images/iBem3bM7DskP1qLkV8JoHMLH68.jpg?scale-down-to=512",
  },
  {
    quote:
      "Working with Picasso Fusion was a game-changer for our business. Their expertise in web design helped us create a stunning online presence that resonated with our audience.",
    name: "Michael Johnson",
    title: "Founder of Tech Trends Inc.",
    image:
      "https://framerusercontent.com/images/9nYExwEqKiZOxikoZuzMhPzlIX8.jpg?scale-down-to=512",
  },
  {
    quote:
      "Picasso Fusion's content creation services exceeded our expectations. Their team crafted compelling copy and visuals that perfectly captured our brand's essence.",
    name: "David Brown",
    title: "HR Manager at Sparkle",
    image:
      "https://framerusercontent.com/images/xcVsFcFg7M5SkoOkJX5lUfdBUN4.jpg",
  },
  {
    quote:
      "From branding to digital marketing, Picasso Fusion delivered exceptional results every step of the way. Their dedication to our project and creative solutions were unmatched.",
    name: "Alex Thompson",
    title: "CEO of NextGen Solutions",
    image:
      "https://framerusercontent.com/images/mKwxopbnEeNzwo0LzcvyHC5RdMM.jpg",
  },
  {
    quote:
      "Picasso Fusion's branding services gave our startup the identity it needed to stand out in a competitive market. Their team's passion and dedication were evident in every aspect of the project.",
    name: "Matthew Miller",
    title: "Co-founder of Bloom",
    image:
      "https://framerusercontent.com/images/a5SO6bWYO9JGc90jHykGK0g78.jpg",
  },
  {
    quote:
      "We were blown away by Picasso Fusion's creativity and vision. Their environmental graphics transformed our office space and created a vibrant, inspiring atmosphere.",
    name: "Christopher Harris",
    title: "HR Manager at Evergreen",
    image:
      "https://framerusercontent.com/images/lyyanOkQwdFqEmTN9vhLsdsi0.jpg",
  },
];

// Animation variant for cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom,
      // cubic-bezier for an ease-out feel
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[90.625rem] mx-auto px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-center text-[120px] xl:text-[110px] lg:text-[90px] md:text-[72px] sm:text-[52px] font-normal tracking-[-0.06em] text-[#2D3753] leading-[1.05em]">
            Words From Our
            <br />
            <span className="font-['Instrument_Serif'] italic font-normal">
              Partners
            </span>
          </h2>

          <p className="mt-8 text-center text-[#6F80A8] text-lg md:text-base sm:text-sm leading-relaxed max-w-2xl mx-auto">
            See what our clients have to say about their experience with{" "}
            <span className="font-semibold text-[#2D3753]">Picasso Fusion</span>.
            Their stories speak volumes about the quality of our work and the
            satisfaction of our clients.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center">
          {testimonials.map((testimonial, index) => {
            // Determine column position for stagger timing
            const column = index % 3; // 0 = left, 1 = center, 2 = right
            let delay = 0;

            // Left and right cards come first, center cards slightly delayed
            if (column === 1) delay = 0.3;
            else delay = 0.1;

            return (
              <motion.div
                key={index}
                className="relative bg-gray-100 rounded-2xl p-8 border border-gray-200 
                shadow-[0_8px_20px_rgba(0,0,0,0.05)] 
                before:content-[''] before:absolute before:inset-0 before:rounded-2xl 
                before:shadow-inner before:shadow-gray-300/40 before:pointer-events-none
                flex flex-col justify-between 
                hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)] transition-all duration-500 
                h-[14rem] w-[27rem] mx-auto"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={delay}
              >
                <p className="text-gray-400 text-[1rem] mb-4 font-medium leading-relaxed">
                  “{testimonial.quote}”
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-300">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold text-black leading-tight">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 leading-tight">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
