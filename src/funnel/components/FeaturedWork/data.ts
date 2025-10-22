// components/FeaturedWork/data.ts

export const FEATURED_WORK_PROJECTS = [
  {
    id: "Auluxe",
    title: "Auluxe™",
    description:
      "Redefining luxury in audio with advanced technology and exquisite design.",
    tags: ["Product Design", "Motion Graphics"],
    image: "https://framerusercontent.com/images/PasykLOKcBfLT5yRCJy3BP5w.jpg",
  },
  {
    id: "Opulent-Interiors",
    title: "Opulent Interiors™",
    description:
      "A luxury interior design firm specializing in bespoke designs and curated furnishings for discerning clients.",
    tags: ["Web Design & Development", "Motion Graphics"],
    image: "https://framerusercontent.com/images/UV0kfsR1WzRkqCK4mMW1O9t0.jpg",
  },
  {
    id: "Urban-Odyssey",
    title: "Urban Odyssey™",
    description:
      "A travel agency passionate about unlocking the hidden gems of the city exploration",
    tags: ["Brand Identity", "Motion Graphics"],
    image: "https://framerusercontent.com/images/TnTieucPuc0WFxg1tIh4JTPmp4.jpg",
  },
  {
    id: "NovaDrive",
    title: "NovaDrive™",
    description:
      "Leading the automotive industry with cutting-edge technology and sustainable innovations",
    tags: ["Concept Art", "3D Design"],
    image: "https://framerusercontent.com/images/4vWXJkfkxtU2VxkFCO8Yhkjjj5k.jpg",
  },
];

export const FEATURED_WORK_TEXT = {
  title: {
    part1: "Featured",
    part2: "Work",
  },
  description:
    "Dive into a world of creativity and inspiration with our portfolio. Explore our work and imagine the possibilities for your brand.",
  buttonText: "See more of our work",
  cursorText: "View Project",
};

export const FEATURED_WORK_ANIMATIONS = {
  section: {
    duration: 1,
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  footerButton: {
    duration: 1,
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  projectCards: {
    duration: 0.6,
    staggerDelay: 0.15,
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
};
