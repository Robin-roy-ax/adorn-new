import type { Metadata } from "next";
import WorkSection from "@/funnel/components/Work/page";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore our portfolio of stunning digital art and design projects.",
};

export default function WorkPage() {
  return <WorkSection />;
}
