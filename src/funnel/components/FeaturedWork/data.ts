import { StaticImageData } from "next/image";
import Saral from "./Saaral Cover.jpg";

// data.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  route: string;
}

export const projects: Project[] = [
  {
    id: 'auluxe',
    title: 'Auluxe™',
    description: 'Redefining luxury in audio with advanced technology and exquisite design.',
    tags: ['Product Design', 'Motion Graphics'],
    image: Saral,
    route: "/projects/auluxe",
  },
  {
    id: 'opulent-interiors',
    title: 'Opulent Interiors™',
    description: 'A luxury interior design firm specializing in bespoke designs and curated furnishings for discerning clients.',
    tags: ['Web Design & Development', 'Motion Graphics'],
    image: Saral,
    route: "/projects/opulent-interiors",
  },
  {
    id: 'urban-odyssey',
    title: 'Urban Odyssey™',
    description: 'A travel agency passionate about unlocking the hidden gems of city exploration.',
    tags: ['Branding', 'Digital Marketing'],
    image: Saral,
    route: "/projects/urban-odyssey",
  },
  {
    id: 'novadrive',
    title: 'NovaDrive™',
    description: 'Leading the automotive industry with cutting-edge technology and sustainable innovation.',
    tags: ['Branding', 'Web Design & Development'],
    image: Saral,
    route: "/projects/novadrive",
  },
];