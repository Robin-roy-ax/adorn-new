
export interface Benefit {
    title: string;
    description: string;
    image: string;
  }
  
  export const sectionHeader = {
    title: "Discover your Benefits",
    highlight: "Benefits",
    description:
      "We blend creativity, reliability, and design precision to bring your ideas to life — beautifully and efficiently."
  };
  
  export const benefits: Benefit[] = [
    {
      title: "Creative Expertise",
      description:
        "Our team's creativity and skill ensure your vision is realized just as you imagine.",
      image: "/images/benefits/creative-expertise.png",
    },
    {
      title: "Unlimited Revisions",
      description:
        "Refine your project with as many changes as you need, all included.",
      image: "/images/benefits/unlimited-revisions.png",
    },
    {
      title: "Flexibility",
      description:
        "Adjust your project easily as it progresses to fit your evolving needs.",
      image: "/images/benefits/flexibility.png",
    },
    {
      title: "Fixed Monthly Rate",
      description:
        "Enjoy peace of mind with a fixed monthly rate — no surprises, just consistent service.",
      image: "/images/benefits/fixed-monthly.png",
    },
    {
      title: "Timely Delivery",
      description:
        "Trust our commitment to timely project completion, ensuring your deadlines are met.",
      image: "/images/benefits/timely-delivery.png",
    },
  ];
  