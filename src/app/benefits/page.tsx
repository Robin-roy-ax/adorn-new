import type { Metadata } from "next";
import Benefits from "@/funnel/components/Benefits/page";

export const metadata: Metadata = {
  title: "Benefits",
  description: "Discover the exclusive benefits of a Picasso Fusion design membership.",
  alternates: {
    canonical: "https://picasso-fusion.vercel.app/benefits",
  },
};

export default function ServicesPage() {
  return <Benefits />;
}
