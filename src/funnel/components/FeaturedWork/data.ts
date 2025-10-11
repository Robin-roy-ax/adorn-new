
export interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
  }
  
  export const sectionHeader = {
    title: "Featured",
    highlight: "Work",
    description:
      "Dive into a world of creativity and inspiration with our portfolio. Explore our work and imagine the possibilities for your brand.",
  };
  
  export const projects: Project[] = [
    {
      title: "Auluxe™",
      description:
        "Redefining luxury in audio with advanced technology and exquisite design.",
      tags: ["Product Design", "Motion Graphics"],
      image: "/images/audio-deluxe.jpg",
    },
    {
      title: "Opulent Interiors™",
      description:
        "A luxury interior design firm specializing in bespoke designs and curated furnishings for discerning clients.",
      tags: ["Web Design & Development", "Motion Graphics"],
      image: "/images/opulent-interiors.jpg",
    },
    {
      title: "Urban Odyssey™",
      description:
        "A travel agency passionate about unlocking the hidden gems of the city exploration",
      tags: ["Brand Identity", "Motion Graphics"],
      image: "/images/urban-odyssey.jpg",
    },
    {
      title: "NovaDrive™",
      description:
        "Leading the automotive industry with cutting-edge technology and sustainable innovations",
      tags: ["Concept Art", "3D Design"],
      image: "/images/novadrive.jpg",
    },
  ];
  