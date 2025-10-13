"use client";

import { motion } from "framer-motion";
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
      "Adorn took our brand to new heights with their innovative designs and strategic approach. Their team's creativity and attention to detail truly set them apart.",
    name: "John Smith",
    title: "CEO of Bright Ideas Co.",
    image: "https://framerusercontent.com/images/iBem3bM7DskP1qLkV8JoHMLH68.jpg?scale-down-to=512",
  },
  {
    quote:
      "Working with Adorn was a game-changer for our business. Their expertise in web design helped us create a stunning online presence that resonated with our audience.",
    name: "Michael Johnson",
    title: "Founder of Tech Trends Inc.",
    image: "https://framerusercontent.com/images/9nYExwEqKiZOxikoZuzMhPzlIX8.jpg?scale-down-to=512",
  },
  {
    quote:
      "Adorn's content creation services exceeded our expectations. Their team crafted compelling copy and visuals that perfectly captured our brand's essence.",
    name: "David Brown",
    title: "HR Manager at Sparkle",
    image: "https://framerusercontent.com/images/xcVsFcFg7M5SkoOkJX5lUfdBUN4.jpg",
  },
  {
    quote:
      "From branding to digital marketing, Adorn delivered exceptional results every step of the way. Their dedication to our project and creative solutions were unmatched.",
    name: "Alex Thompson",
    title: "CEO of NextGen Solutions",
    image: "https://framerusercontent.com/images/mKwxopbnEeNzwo0LzcvyHC5RdMM.jpg",
  },
  {
    quote:
      "Adorn's branding services gave our startup the identity it needed to stand out in a competitive market. Their team's passion and dedication were evident in every aspect of the project.",
    name: "Matthew Miller",
    title: "Co-founder of Bloom",
    image: "https://framerusercontent.com/images/a5SO6bWYO9JGc90jHykGK0g78.jpg",
  },
  {
    quote:
      "We were blown away by Adorn's creativity and vision. Their environmental graphics transformed our office space and created a vibrant, inspiring atmosphere.",
    name: "Christopher Harris",
    title: "HR Manager at Evergreen",
    image: "https://framerusercontent.com/images/lyyanOkQwdFqEmTN9vhLsdsi0.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="mb-28"
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
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-500 border border-gray-100"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-gray-700 mb-6 leading-relaxed">
                “{testimonial.quote}”
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
