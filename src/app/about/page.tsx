import type { Metadata } from "next";
import AboutUs from "@/funnel/components/AboutUS/page";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Picasso Fusion and our mission to empower digital artists.",
};

export default function AboutPage() {
  return <AboutUs />;
}
