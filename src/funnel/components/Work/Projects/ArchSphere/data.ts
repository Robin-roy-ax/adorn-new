
export interface ProjectSection {
  type: 'hero' | 'description' | 'image' | 'twoColumn' | 'implementation' | 'results';
  title?: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  image?: string;
  images?: { src: string; alt: string; className?: string }[];
  heading?: string;
  content?: string;
  items?: { title: string; description: string }[];
}

export const projectData = {
  hero: {
    title: 'ArchSphere™',
  },
  description: {
    text: 'A leading architectural firm, known for its visionary designs and commitment to excellence in the field.',
    tags: ['Branding', 'Web Design & Development'],
  },
  sections: [
    {
      type: 'image' as const,
      image: 'https://framerusercontent.com/images/O29DpdvIy6flDurZSMSm66nM8.jpg',
      alt: 'ArchSphere Hero',
      height: 'large',
    },
    {
      type: 'twoColumn' as const,
      heading: 'Project Overview',
      content:
        "ArchSphere™ aims to elevate its online presence and communicate its dedication to architectural excellence through a captivating digital platform. Focused on branding and web design and development, the objective is to create an immersive website that reflects the firm's ethos and attracts clients who value architectural mastery.",
    },
    {
      type: 'twoImages' as const,
      layout: 'landscapePortrait',
      images: [
        {
          src: 'https://framerusercontent.com/images/rxAu618BDngEk5wiAszoeSYwCoU.jpg',
          alt: 'Landscape',
          width: '2/3',
        },
        {
          src: 'https://framerusercontent.com/images/aOAea9tp32RK1DeISIJUCGFoasU.jpg?scale-down-to=2048',
          alt: 'Portrait',
          width: '1/3',
        },
      ],
    },
    {
      type: 'twoColumn' as const,
      heading: 'Problem Statement',
      content:
        "Despite its reputation for architectural brilliance, ArchSphere™'s current digital presence lacks cohesion and fails to capture the essence of its brand effectively. The existing website lacks visual appeal and does not showcase the firm's Dribble in a manner befitting its stature, resulting in missed opportunities to engage potential clients.",
    },
    {
      type: 'image' as const,
      image: 'https://framerusercontent.com/images/W94gbq3FkXkeogcNd3F8bw7bBCg.jpg',
      alt: 'Full Section Image',
      height: 'large',
    },
    {
      type: 'twoColumn' as const,
      heading: 'Process/Methodology',
      content:
        "Picasso Fusion Creative Studio conducts an in-depth analysis of ArchSphere™'s brand identity and values. Through collaborative workshops and meticulous planning, a tailored approach is developed to refine the firm's branding and create a visually stunning website that resonates with its audience.",
    },
    {
      type: 'twoImages' as const,
      layout: 'portraitLandscape',
      images: [
        {
          src: 'https://framerusercontent.com/images/PNlhylAXUQI64sd3VSGeDUDC5Lk.jpg?scale-down-to=2048',
          alt: 'Portrait',
          width: '1/3',
        },
        {
          src: 'https://framerusercontent.com/images/GfGXfubougPfqsKp64rLBPwOTUg.jpg',
          alt: 'Landscape',
          width: '2/3',
        },
      ],
    },
    {
      type: 'implementation' as const,
      heading: 'Implementation',
      items: [
        {
          title: 'Branding Refinement',
          description:
            "Picasso Fusion refines ArchSphere™'s brand identity to encapsulate its dedication to architectural excellence and innovation. The updated branding exudes sophistication and sets the tone for a cohesive digital experience.",
        },
        {
          title: 'Website Redesign and Development',
          description:
            "Picasso Fusion redesigns and develops ArchSphere™'s website with a focus on showcasing its Dribble of architectural marvels. The new website features sleek design elements, intuitive navigation, and high-resolution imagery to provide visitors with an immersive journey through the firm's projects.",
        },
      ],
    },
    {
      type: 'image' as const,
      image: 'https://framerusercontent.com/images/w2RSwp9P8ZfNwgFeDmr7FtmQO8.jpg',
      alt: 'Full Section Image',
      height: 'medium',
    },
    {
      type: 'results' as const,
      heading: 'Results/Outcomes',
      items: [
        {
          title: 'Elevated Brand Presence',
          description:
            "With the refined branding and redesigned website, ArchSphere™ establishes a more compelling digital presence that accurately reflects its ethos of architectural elegance and excellence.",
        },
        {
          title: 'Enhanced User Experience',
          description:
            "The new website, characterized by its intuitive design and captivating visuals, engages visitors and enables them to explore ArchSphere™'s Dribble with ease, fostering a deeper appreciation for the firm's architectural prowess.",
        },
        {
          title: 'Increased Client Engagement',
          description:
            "By effectively showcasing its Dribble of architectural marvels, ArchSphere™ attracts increased interest from potential clients, leading to heightened engagement and inquiries about the firm's services.",
        },
      ],
    },
    {
      type: 'image' as const,
      image: 'https://framerusercontent.com/images/6qjIxtN9s6WJB5UmLE7K4lbxcCA.jpg',
      alt: 'Full Section Image',
      height: 'medium',
      objectPosition: 'bottom',
    },
  ],
};