"use client";

import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Web Design & Development",
      price: 985,
      period: "/month",
      description:
        "Craft a captivating landing page tailored to your brand.",
      features: [
        "Framer Development",
        "Responsive Design",
        "Unlimited Revision",
        "SEO optimization",
        "Interactive contact forms",
      ],
      buttonLabel: "Get Started",
      secondaryButton: "Book a call",
      highlight: false,
    },
    {
      title: "Design Subscription",
      price: 1895,
      period: "/month",
      description:
        "Access unlimited design tasks and priority support.",
      features: [
        "2 Requests at a time",
        "3 Senior designers",
        "Unlimited Revision",
        "Unlimited Requests",
        "Pause or cancel anytime",
      ],
      buttonLabel: "Subscribe Now",
      secondaryButton: "Book a call",
      highlight: true,
      badge: "Most Popular",
    },
    {
      title: "One-Off Project",
      price: 1295,
      period: "+",
      description:
        "Personalized design services tailored to your project’s needs.",
      features: [
        "Personalised Design Solution",
        "Comprehensive consultation",
        "Framer Development",
        "Unlimited Revision",
        "Fixed deadline",
      ],
      buttonLabel: "Get Started",
      secondaryButton: "Book a call",
      highlight: false,
    },
  ];

  return (
    <section className="bg-white flex flex-col items-center py-20 px-6 text-center">
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center max-w-5xl mx-auto px-6"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-[9rem] md:text-[7rem] sm:text-[48px] font-medium leading-[1.1em] tracking-[-0.05em] text-[#394560]"
      >
        Transparent{" "}
        <span className="font-['Instrument_Serif'] italic font-normal">
          Pricing
        </span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-6 text-gray-400 text-md font-semibold md:text-md leading-relaxed"
      >
        Explore our pricing options below and choose the plan that best fits your
        needs.<br />No hidden fees.
      </motion.p>
    </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-3 mt-10 gap-8 max-w-6xl w-full"
      >
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </motion.div>
    </section>
  );
}
