import type { Metadata } from "next";
import Benefits from "@/funnel/components/Benefits/page";

export const metadata: Metadata = {
  title: "Benefits",
  description: "Discover the exclusive benefits of a Picasso Fusion design membership.",
};

export default function ServicesPage() {
  return <Benefits />;
}
