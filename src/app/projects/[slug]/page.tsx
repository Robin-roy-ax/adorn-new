import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Auluxe from "@/funnel/components/Work/Projects/Auluxe/page";
import Opulent from "@/funnel/components/Work/Projects/Opulent/page";
import Urban from "@/funnel/components/Work/Projects/Urban/page";
import Nova from "@/funnel/components/Work/Projects/Nova/page";
import ArchSphere from "@/funnel/components/Work/Projects/ArchSphere/page";
import Harmony from "@/funnel/components/Work/Projects/Harmony/page";
import { projects } from "@/funnel/components/Work/data";

import ProjectClient from "./ProjectClient";

const projectComponentMap: Record<string, React.ComponentType> = {
  "auluxe": Auluxe,
  "opulent-interiors": Opulent,
  "urban-odyssey": Urban,
  "nova-drive": Nova,
  "archsphere": ArchSphere,
  "harmony-beats": Harmony,
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

  return (
    <ProjectClient>
      <ProjectComponent />
    </ProjectClient>
  );
}
