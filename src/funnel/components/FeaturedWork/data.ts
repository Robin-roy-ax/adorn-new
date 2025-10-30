// data.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  route: string;
}

export const projects: Project[] = [
  {
    id: 'auluxe',
    title: 'Auluxe™',
    description: 'Redefining luxury in audio with advanced technology and exquisite design.',
    tags: ['Product Design', 'Motion Graphics'],
    image: 'https://framerusercontent.com/images/PasykLOKcBfLT5yRCJy3BP5w.jpg',
    route: "/projects/auluxe",
  },
  {
    id: 'opulent-interiors',
    title: 'Opulent Interiors™',
    description: 'A luxury interior design firm specializing in bespoke designs and curated furnishings for discerning clients.',
    tags: ['Web Design & Development', 'Motion Graphics'],
    image: 'https://framerusercontent.com/images/UV0kfsR1WzRkqCK4mMW1O9t0.jpg',
    route: "/projects/opulent-interiors",
  },
  {
    id: 'urban-odyssey',
    title: 'Urban Odyssey™',
    description: 'A travel agency passionate about unlocking the hidden gems of city exploration.',
    tags: ['Branding', 'Digital Marketing'],
    image: 'https://framerusercontent.com/images/TnTieucPuc0WFxg1tIh4JTPmp4.jpg',
    route: "/projects/urban-odyssey",
  },
  {
    id: 'novadrive',
    title: 'NovaDrive™',
    description: 'Leading the automotive industry with cutting-edge technology and sustainable innovation.',
    tags: ['Branding', 'Web Design & Development'],
    image: 'https://framerusercontent.com/images/4vWXJkfkxtU2VxkFCO8Yhkjjj5k.jpg',
    route: "/projects/novadrive",
  },
];