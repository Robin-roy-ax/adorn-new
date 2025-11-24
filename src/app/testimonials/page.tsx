import type { Metadata } from "next";
import Testimonials from "@/funnel/components/Testimonials/page";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what our satisfied clients have to say about Picasso Fusion.",
  alternates: {
    canonical: "https://picasso-fusion.vercel.app/testimonials",
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
