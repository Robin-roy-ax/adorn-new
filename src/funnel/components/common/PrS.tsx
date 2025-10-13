"use client";

import { motion } from "framer-motion";
import PricingCard from "./PrC";

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
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl text-gray-900 font-bold mb-4"
      >
        Transparent <span className="italic font-light">Pricing</span>
      </motion.h1>
      <p className="text-slate-500 mb-16 max-w-xl">
        Explore our pricing options below and choose the plan that best fits your needs. No hidden fees.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-3 gap-8 max-w-6xl w-full"
      >
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </motion.div>
    </section>
  );
}
