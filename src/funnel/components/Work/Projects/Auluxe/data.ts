import { StaticImageData } from "next/image";
import Saral from "./Saaral Cover.jpg";

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
    image?: StaticImageData;
    alt?: string;
    height?: 'large' | 'medium';
    objectPosition?: string;
    layout?: 'landscapePortrait' | 'portraitLandscape';
    images?: ProjectImage[];
    items?: ProjectItem[];
  }
  
  export const projectData = {
    hero: {
      title: 'Auluxe™',
    },
    description: {
      text: 'Redefining luxury in audio with advanced technology and exquisite design.',
      tags: ['Product Design', 'Motion Graphics'],
    },
    sections: [
      {
        type: 'image' as const,
        image: Saral,
        alt: 'Auluxe Hero',
        height: 'large' as const,
      },
      {
        type: 'twoColumn' as const,
        heading: 'Project Overview',
        content:
          "Auluxe™ is not just a brand; it's a testament to the fusion of artistry and technology. Our meticulously crafted audio solutions combine exquisite product design with dynamic motion graphics to create an immersive auditory experience like no other. From sleek speakers to mesmerizing visualizations, each Auluxe™ product is a masterpiece of innovation and elegance.",
      },
      {
        type: 'twoImages' as const,
        layout: 'landscapePortrait' as const,
        images: [
          {
            src: 'https://framerusercontent.com/images/dF1dIzWRL0zCTRrSPHf6Yf0W1g.jpg',
            alt: 'Landscape',
            width: '2/3' as const,
          },
          {
            src: 'https://framerusercontent.com/images/jJOiDAqPKitVLjXCHO7zG0368.jpg',
            alt: 'Portrait',
            width: '1/3' as const,
          },
        ],
      },
      {
        type: 'twoColumn' as const,
        heading: 'Problem Statement',
        content:
          'In a world inundated with audio products, Auluxe™ recognized the need for a brand that could elevate the listening experience to new heights. Traditional sound systems lacked the visual appeal and immersive qualities demanded by modern consumers, prompting Auluxe™ to embark on a journey to redefine luxury audio.',
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/mWOQghkxD31QHLV7txexZVkBzc.jpg',
        alt: 'Full Section Image',
        height: 'large' as const,
      },
      {
        type: 'twoColumn' as const,
        heading: 'Process/Methodology',
        content:
          'To achieve this goal, Auluxe™ assembled a team of experts in product design, motion graphics, and audio technology. Through meticulous research and experimentation, we developed a range of audio solutions that seamlessly integrate stunning visuals with superior sound quality. Our products undergo rigorous testing and refinement to ensure they meet the highest standards of performance and aesthetics.',
      },
      {
        type: 'twoImages' as const,
        layout: 'portraitLandscape' as const,
        images: [
          {
            src: 'https://framerusercontent.com/images/oOuiL5ULnLALt9Spi9sOiBzDcA.jpg',
            alt: 'Portrait',
            width: '1/3' as const,
          },
          {
            src: 'https://framerusercontent.com/images/NXhKB66xce5oo1vajFFPtkVBXuA.jpg',
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
            title: 'Product Design',
            description:
              'Auluxe™ products are a testament to the marriage of form and function. Each speaker, amplifier, and audio device is crafted with precision and care, using premium materials and innovative design techniques to achieve both visual elegance and acoustic excellence.',
          },
          {
            title: 'Motion Graphics',
            description:
              'In addition to exceptional sound quality, Auluxe™ products feature dynamic motion graphics that enhance the auditory experience. Our motion visualizations respond to the music in real-time, creating a mesmerizing audio-visual spectacle that captivates the senses and elevates the listening experience.',
          },
        ],
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/OHcLVMW3Ix7Y8q4kwjGKFad8dnw.jpg',
        alt: 'Full Section Image',
        height: 'medium' as const,
      },
      {
        type: 'results' as const,
        heading: 'Results/Outcomes',
        items: [
          {
            title: 'Unparalleled Sensory Experience',
            description:
              'Auluxe™ products have redefined luxury audio, offering consumers a sensory journey that transcends traditional sound systems. With stunning visuals and superior sound quality, our products engage the eyes and ears in a symphony of sensation.',
          },
          {
            title: 'Brand Recognition',
            description:
              'Auluxe™ has quickly become synonymous with luxury and innovation in the audio industry, earning accolades and recognition from consumers and critics alike. Our commitment to excellence has solidified our position as a leader in the field of premium audio.',
          },
          {
            title: 'Customer Satisfaction',
            description:
              'Above all, Auluxe™ is dedicated to delighting our customers. With products that exceed expectations and a commitment to customer service, we have earned the trust and loyalty of audiophiles around the world.',
          },
        ],
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/NXhKB66xce5oo1vajFFPtkVBXuA.jpg',
        alt: 'Full Section Image',
        height: 'medium' as const,
      },
    ],
  };