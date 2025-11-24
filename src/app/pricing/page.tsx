import type { Metadata } from "next";
import Pricing from "@/funnel/components/Pricing/index";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose the perfect design plan for your needs. Simple, transparent pricing.",
  alternates: {
    canonical: "https://picasso-fusion.vercel.app/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="bg-white">
      <Pricing variant="compare" />
    </div>
  );
}
