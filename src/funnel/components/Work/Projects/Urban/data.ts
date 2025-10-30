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
      title: 'Urban Odyssey™',
    },
    description: {
      text: 'A travel agency passionate about unlocking the hidden gems of city exploration.',
      tags: ['Branding', 'Digital Marketing'],
    },
    sections: [
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/TnTieucPuc0WFxg1tIh4JTPmp4.jpg',
        alt: 'Urban Odyssey Hero',
        height: 'large' as const,
      },
      {
        type: 'twoColumn' as const,
        heading: 'Project Overview',
        content:
          "Urban Odyssey has enlisted Picasso Fusion's expertise to revitalize its brand and enhance its digital marketing efforts. With a focus on urban exploration and discovery, we aim to create a captivating brand narrative and digital experience that resonates with city travelers worldwide.",
      },
      {
        type: 'twoImages' as const,
        layout: 'landscapePortrait' as const,
        images: [
          {
            src: 'https://framerusercontent.com/images/WQOdjsTqWGlyGCoQTBlFqnNY.jpg',
            alt: 'Landscape',
            width: '2/3' as const,
          },
          {
            src: 'https://framerusercontent.com/images/12gohyeHBddjo7c3Ty6QT267EZg.jpg?scale-down-to=2048',
            alt: 'Portrait',
            width: '1/3' as const,
          },
        ],
      },
      {
        type: 'twoColumn' as const,
        heading: 'Problem Statement',
        content:
          "Despite Urban Odyssey's reputation for unique city experiences, the brand's identity and digital presence lack cohesion and fail to capture the essence of urban travel. Our existing branding and digital marketing strategies need refinement to effectively engage with our audience and drive business growth.",
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/iJIQCxF3IBNm0HnJ4Y58kfWGI.jpg',
        alt: 'Full Section Image',
        height: 'large' as const,
      },
      {
        type: 'twoColumn' as const,
        heading: 'Process/Methodology',
        content:
          "Picasso Fusion will conduct a comprehensive analysis of Urban Odyssey's brand positioning, target audience, and competitive landscape. Through collaborative workshops and creative ideation, we'll develop a strategic roadmap for branding and digital marketing initiatives that authentically represent Urban Odyssey's urban exploration ethos.",
      },
      {
        type: 'twoImages' as const,
        layout: 'portraitLandscape' as const,
        images: [
          {
            src: 'https://framerusercontent.com/images/zwsXXuFSVBkgKnroO8xD54oquvA.jpg?scale-down-to=2048',
            alt: 'Portrait',
            width: '1/3' as const,
          },
          {
            src: 'https://framerusercontent.com/images/LRl9ba8ImCa6PVwzI7RDG1UnAL4.jpg',
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
            title: 'Creative Branding',
            description:
              "Picasso Fusion will refresh Urban Odyssey's brand identity, including logo design, visual assets, and brand messaging. We'll create a cohesive and modern brand image that reflects the excitement and adventure of city travel.",
          },
          {
            title: 'Digital Marketing',
            description:
              'Picasso Fusion will develop a multi-channel digital marketing strategy, encompassing social media campaigns, content marketing, and email marketing. Our goal is to inspire and engage urban travelers through captivating storytelling and immersive digital experiences.',
          },
        ],
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/ircY6Whz4lamokfTiQlF6lbrxE.jpg',
        alt: 'Full Section Image',
        height: 'medium' as const,
      },
      {
        type: 'results' as const,
        heading: 'Results/Outcomes',
        items: [
          {
            title: 'Enhanced Brand Identity',
            description:
              "With Picasso Fusion's expertise, Urban Odyssey will establish a strong and memorable brand identity that resonates with urban explorers. Our refreshed brand image will attract new customers and strengthen loyalty among existing ones.",
          },
          {
            title: 'Increased Engagement',
            description:
              'Through strategic digital marketing initiatives, Urban Odyssey will deepen its engagement with urban travelers across digital channels. Our compelling content and immersive experiences will inspire city adventurers to embark on unforgettable journeys with Urban Odyssey.',
          },
          {
            title: 'Business Growth',
            description:
              "By elevating its brand identity and digital marketing efforts, Urban Odyssey will drive business growth and solidify its position as a leading provider of urban travel experiences. With Picasso Fusion's support, Urban Odyssey is poised to thrive in the competitive travel industry and inspire travelers to explore the world's cities like never before.",
          },
        ],
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/kmFoacDaENLA1BckQBNsJHAzFjU.jpg',
        alt: 'Full Section Image',
        height: 'medium' as const,
        objectPosition: 'bottom',
      },
    ],
  };