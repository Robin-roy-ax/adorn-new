import { notFound } from "next/navigation";
import type { Metadata } from "next";

import AuluxePage from "@/funnel/components/Work/Projects/Auluxe";
import OpulentPage from "@/funnel/components/Work/Projects/Opulent";
import UrbanPage from "@/funnel/components/Work/Projects/Urban";
import NovaPage from "@/funnel/components/Work/Projects/Nova";
import ArchPage from "@/funnel/components/Work/Projects/ArchSphere";
import HarmonyPage from "@/funnel/components/Work/Projects/Harmony";
import { projects } from "@/funnel/components/Work/data";

const projectComponentMap: Record<string, React.ComponentType> = {
  "auluxe": AuluxePage,
  "opulent-interiors": OpulentPage,
  "urban-odyssey": UrbanPage,
  "nova-drive": NovaPage,
  "archsphere": ArchPage,
  "harmony-beats": HarmonyPage,
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const ProjectComponent = projectComponentMap[params.slug];

  if (!ProjectComponent) {
    notFound();
  }

  return <ProjectComponent />;
}
