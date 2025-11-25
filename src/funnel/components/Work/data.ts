

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    slug: string;
    href: string;
  }
  
  export const projects: Project[] = [
    {
      id: "Auluxe",
      title: "Auluxe™",
      description:
        "Redefining luxury in audio with advanced technology and exquisite design.",
      image: "https://framerusercontent.com/images/PasykLOKcBfLT5yRCJy3BP5w.jpg",
      tags: ["Product Design", "Motion Graphics"],
      slug: "auluxe",
      href: "/projects/auluxe",
    },
    {
      id: "Opulent-Interiors",
      title: "Opulent Interiors™",
      description:
        "A luxury interior design firm specializing in bespoke designs and curated furnishings for discerning clients.",
      image: "https://framerusercontent.com/images/UV0kfsR1WzRkqCK4mMW1O9t0.jpg",
      tags: ["Web Design & Development", "Motion Graphics"],
      slug: "opulent-interiors",
      href: "/projects/opulent-interiors",
    },
    {
      id: "Urban-Odyssey",
      title: "Urban Odyssey™",
      description:
        "A travel agency passionate about unlocking the hidden gems of city exploration.",
      image: "https://framerusercontent.com/images/TnTieucPuc0WFxg1tIh4JTPmp4.jpg",
      tags: ["Branding", "Digital Marketing"],
      slug: "urban-odyssey",
      href: "/projects/urban-odyssey",
    },
    {
      id: "NovaDrive",
      title: "NovaDrive™",
      description:
        "Leading the automotive industry with cutting-edge technology and sustainable innovation.",
      image: "https://framerusercontent.com/images/4vWXJkfkxtU2VxkFCO8Yhkjjj5k.jpg",
      tags: ["Branding", "Web Design & Development"],
      slug: "novadrive",
      href: "/projects/novadrive",
    },
    {
      id: "ArchSphere",
      title: "ArchSphere™",
      description:
        "A leading architectural firm, known for its visionary designs and commitment to excellence in the field.",
      image: "https://framerusercontent.com/images/O29DpdvIy6flDurZSMSm66nM8.jpg",
      tags: ["Branding", "Web Design & Development"],
      slug: "archsphere",
      href: "/projects/archsphere",
    },
    {
      id: "Harmony-Beats",
      title: "Harmony Beats™",
      description:
        "Setting new standards in the music industry with innovative sounds and creative prowess.",
      image: "https://framerusercontent.com/images/JPLGJwzN5KlpBsFfWV1GAeJdbE.jpg",
      tags: ["Web Design & Development", "Digital Marketing"],
      slug: "harmony-beats",
      href: "/projects/harmony-beats",
    },
  ];
  