// data.ts
export interface ProjectImage {
    src: string;
    alt: string;
    width?: '1/3' | '2/3';
  }
  
  export interface ProjectItem {
    title: string;
    description: string;
  }
  
  export interface ProjectSection {
    type: 'image' | 'twoColumn' | 'twoImages' | 'implementation' | 'results';
    heading?: string;
    content?: string;
    image?: string;
    alt?: string;
    height?: 'large' | 'medium';
    objectPosition?: string;
    layout?: 'landscapePortrait' | 'portraitLandscape';
    images?: ProjectImage[];
    items?: ProjectItem[];
  }
  
  export const projectData = {
    hero: {
      title: 'Opulent Interiors™',
    },
    description: {
      text: 'A luxury interior design firm specializing in bespoke designs and curated furnishings for discerning clients.',
      tags: ['Web Design & Development', 'Motion Graphics'],
    },
    sections: [
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/UV0kfsR1WzRkqCK4mMW1O9t0.jpg',
        alt: 'Opulent Interiors Hero',
        height: 'large' as const,
      },
      {
        type: 'twoColumn' as const,
        heading: 'Project Overview',
        content:
          'Opulent Interiors enlists top-tier professionals to elevate its digital presence and deliver unparalleled experiences to its discerning clientele. With a focus on luxury living, Opulent Interiors seeks to create a digital platform that showcases its exquisite collections and interior design services in the most captivating and immersive manner.',
      },
      {
        type: 'twoImages' as const,
        layout: 'landscapePortrait' as const,
        images: [
          {
            src: 'https://framerusercontent.com/images/dYRwxaLPmpEYiUn9V0l3JnpWXuY.jpg',
            alt: 'Landscape',
            width: '2/3' as const,
          },
          {
            src: 'https://framerusercontent.com/images/g5hLe7r0vimHpdYTHCloqPT4u3E.jpg?scale-down-to=2048',
            alt: 'Portrait',
            width: '1/3' as const,
          },
        ],
      },
      {
        type: 'twoColumn' as const,
        heading: 'Problem Statement',
        content:
          "Despite offering unparalleled luxury in interior design and furnishings, Opulent Interiors' digital presence does not effectively convey the elegance and sophistication of its offerings. The current website lacks visual appeal and fails to engage potential customers, resulting in missed opportunities for conversions.",
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/Fuir8Ewe1kSfTXfOb07xw2j1T1s.jpg',
        alt: 'Full Section Image',
        height: 'large' as const,
      },
      {
        type: 'twoColumn' as const,
        heading: 'Process/Methodology',
        content:
          "Our team will conduct a comprehensive analysis of Opulent Interiors' brand identity, target audience demographics, and competitive landscape within the luxury interiors industry. Through collaborative workshops and strategic planning sessions, we'll develop a tailored digital strategy focused on enhancing brand visibility, driving engagement, and increasing conversions.",
      },
      {
        type: 'twoImages' as const,
        layout: 'portraitLandscape' as const,
        images: [
          {
            src: 'https://framerusercontent.com/images/rxedBCWz0nC5dqp7OLBgBdeG3U.jpg',
            alt: 'Portrait',
            width: '1/3' as const,
          },
          {
            src: 'https://framerusercontent.com/images/dXbZKpsgaQMnxQ4qWhCt0uBrU.jpg',
            alt: 'Landscape',
            width: '2/3' as const,
          },
        ],
      },
      {
        type: 'implementation' as const,
        heading: 'Implementation',
        items: [
          {
            title: 'Website Redesign',
            description:
              "We will redesign Opulent Interiors' website to reflect its brand identity and showcase its luxurious collections in a visually compelling manner. The new website will feature high-quality imagery, intuitive navigation, and immersive content to captivate visitors and inspire them to explore Opulent Interiors' offerings.",
          },
          {
            title: 'Motion Graphics Integration',
            description:
              "Our team will incorporate captivating motion graphics into the website to enhance user engagement and create an immersive browsing experience. From subtle animations to dynamic visual effects, motion graphics will elevate the presentation of Opulent Interiors' products and services.",
          },
        ],
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/L1aQhfGwKByTlyN77zra4SgrEI.jpg',
        alt: 'Full Section Image',
        height: 'medium' as const,
      },
      {
        type: 'results' as const,
        heading: 'Results/Outcomes',
        items: [
          {
            title: 'Enhanced Brand Visibility',
            description:
              'With our expertise, Opulent Interiors will establish a stronger digital presence and increase brand visibility among affluent clientele seeking luxury interior design and furnishings.',
          },
          {
            title: 'Increased Engagement and Conversions',
            description:
              'The redesigned website and integrated motion graphics will drive higher levels of engagement and conversions, resulting in increased inquiries and sales for Opulent Interiors',
          },
          {
            title: 'Improved Customer Satisfaction',
            description:
              'By delivering personalized and immersive digital experiences, Opulent Interiors will enhance customer satisfaction and loyalty, fostering long-term relationships with its discerning clientele.',
          },
        ],
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/yy7jlhlzutsRn6bsQg1O1NezNM0.jpg',
        alt: 'Full Section Image',
        height: 'medium' as const,
      },
    ],
  };