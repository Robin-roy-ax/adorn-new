import type { Metadata } from "next";
import Process from "@/funnel/components/Process/page";

export const metadata: Metadata = {
  title: "Our Process",
  description: "See how we bring your vision to life with our streamlined design process.",
  alternates: {
    canonical: "https://picasso-fusion.vercel.app/process",
  },
};

export default function ProcessPage() {
  return <Process />;
}
