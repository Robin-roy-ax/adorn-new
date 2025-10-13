"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#0b1120] text-white rounded-2xl shadow-2xl w-full mt-16 p-20 text-center mx-auto max-w-[1400px]"
      >
        <h1 className="text-6xl font-bold mb-6">
          Let&apos;s Create Your{" "}
          <span className="italic font-serif">Dream Project</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Our team is here to help you succeed. Let&apos;s work together to achieve your goals
          and elevate your brand to new heights.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-4 rounded-full font-medium shadow-md text-lg"
        >
          Book a discovery call
        </motion.button>
      </motion.section>

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
