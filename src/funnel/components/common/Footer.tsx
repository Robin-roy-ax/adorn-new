"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <motion.div
      className="w-[103rem] mt-24 px-12 md:px-24 py-16 p-8"
      style={{ perspective: 1200 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div
        tabIndex={0}
        className="relative w-full rounded-[20px] overflow-hidden"
        style={{
          background: "radial-gradient(50% 100% at 50% 100%, rgb(10,19,41) 0%, rgb(10,19,41) 51.8018%, rgb(10,19,41) 100%)",
          boxShadow:
            "rgba(221, 227, 238, 0.74) 0px 0.78363px 0.78363px -0.535714px, rgba(221, 227, 238, 0.725) 0px 1.91965px 1.91965px -1.07143px, rgba(221, 227, 238, 0.706) 0px 3.63745px 3.63745px -1.60714px, rgba(221, 227, 238, 0.67) 0px 6.35004px 6.35004px -2.14286px, rgba(221, 227, 238, 0.61) 0px 11.0519px 11.0519px -2.67857px, rgba(221, 227, 238, 0.498) 0px 20.2428px 20.2428px -3.21429px, rgba(221, 227, 238, 0.25) 0px 40px 40px -3.75px",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 py-20 px-8 h-[28rem] text-center">
          <h1 className="text-[80px] leading-[1.1] tracking-[-0.05em] text-white font-['Inter'] md:text-[80px] sm:text-[56px]">
            Let&apos;s Create Your <br /><span className="italic font-serif">Dream Project</span>
          </h1>

          <p className="text-[17px] text-white/60 max-w-2xl">
            Our team is here to help you succeed. Let&apos;s work together to achieve your goals and elevate your brand to new heights.
          </p>

          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-[26px] bg-white px-6 py-3 shadow-none hover:bg-[#1d52e5] hover:text-white hover:shadow-[0_8px_15px_rgba(29,82,229,0.4)] hover:inner-shadow-[inset_0_5px_12px_rgba(255,255,255,0.5)] hover:"
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span className="font-semibold text-[17px] tracking-[-0.03em]">Book a discovery call</span>
          </a>
        </div>

        {/* Decorative / 3D render layers — kept for visual parity but hidden/blurred to match original */}
        <motion.div
          className="absolute inset-0"
          style={{ filter: "blur(25px)", opacity: 0 }}
          initial={{ rotate: 270 }}
        >
          <Image
            src="https://framerusercontent.com/images/F7z8b78ieeXJk8cetLjYCwi6gUY.png?scale-down-to=1024"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover object-center rounded-[20px]"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{ filter: "blur(25px)", opacity: 0 }}
          initial={{ rotate: 180 }}
        >
          <Image
            src="https://framerusercontent.com/images/F7z8b78ieeXJk8cetLjYCwi6gUY.png?scale-down-to=1024"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover object-center rounded-[20px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.div>
      {/* Footer */}
      <footer className="w-full mt-24 px-12 md:px-24 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1400px] mx-auto">
          {/* Newsletter */}
          <div>
            <h3 className="text-3xl font-semibold mb-4 leading-tight">
              Subscribe to our <br /> newsletter
            </h3>
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="name@email.com"
                className="bg-gray-100 text-gray-700 px-5 py-3 rounded-full w-full outline-none focus:ring-2 focus:ring-gray-300 text-base"
              />
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 text-base">
                Subscribe
              </button>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Menu</h4>
            <ul className="space-y-3 text-gray-600 text-base">
              <li><a href="#home" className="hover:text-black">Home</a></li>
              <li><a href="#work" className="hover:text-black">Work</a></li>
              <li><a href="#testimonials" className="hover:text-black">Testimonials</a></li>
              <li><a href="#services" className="hover:text-black">Services</a></li>
              <li><a href="#benefits" className="hover:text-black">Benefits</a></li>
              <li><a href="#pricing" className="hover:text-black">Pricing</a></li>
              <li><a href="#about" className="hover:text-black">About Us</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Follow Us</h4>
            <ul className="space-y-3 text-gray-600 text-base">
              <li><a href="#" className="hover:text-black">X / Twitter</a></li>
              <li><a href="#" className="hover:text-black">LinkedIn</a></li>
              <li><a href="#" className="hover:text-black">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm max-w-[1400px] mx-auto">
          <p>© Adorn 2024. All rights reserved</p>
          <p>
            Designed by{" "}
            <a href="#" className="underline hover:text-gray-700">
              Aalay Rasool
            </a>
          </p>
          <p>Built in Framer</p>
        </div>
      </footer>
    </main>   
  );
}
