"use client";

import FaqPage from "@/funnel/components/FaqPage/page";

export default function ProjectClient({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FaqPage />
    </>
  );
}
