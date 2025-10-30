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
      title: 'NovaDrive™',
    },
    description: {
      text: 'Leading the automotive industry with cutting-edge technology and sustainable innovation.',
      tags: ['Branding', 'Web Design & Development'],
    },
    sections: [
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/4vWXJkfkxtU2VxkFCO8Yhkjjj5k.jpg',
        alt: 'Nova Drive Hero',
        height: 'large' as const,
      },
      {
        type: 'twoColumn' as const,
        heading: 'Project Overview',
        content:
          "NovaDrive™ Motors, an innovative player in the automotive industry, collaborated with Picasso Fusion to undertake a comprehensive digital transformation aimed at revolutionizing its online presence and customer engagement strategies. With a strategic focus on innovation and sustainability, NovaDrive™ sought to position itself as a trailblazer in the automotive sector by harnessing cutting-edge technology and strategic branding initiatives.",
      },
      {
        type: 'twoImages' as const,
        layout: 'landscapePortrait' as const,
        images: [
          {
            src: 'https://framerusercontent.com/images/Zadbit4WNji2nKBgMJub0M382A.jpg',
            alt: 'Landscape',
            width: '2/3' as const,
          },
          {
            src: 'https://framerusercontent.com/images/hrOJVAMRhKfkJsrOAiILeEjRA.jpg?scale-down-to=2048',
            alt: 'Portrait',
            width: '1/3' as const,
          },
        ],
      },
      {
        type: 'twoColumn' as const,
        heading: 'Problem Statement',
        content:
          "NovaDrive™ Motors faced the challenge of effectively conveying its innovative vision and commitment to sustainability through its digital channels. The existing branding and digital infrastructure failed to resonate with the evolving expectations of consumers, hindering NovaDrive™'s ability to engage and attract customers effectively in a competitive market landscape.",
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/OgeZ09qCYfIxfuAhGA5cYisC4nw.jpg',
        alt: 'Full Section Image',
        height: 'large' as const,
      },
      {
        type: 'twoColumn' as const,
        heading: 'Process/Methodology',
        content:
          "To address NovaDrive™'s challenges, Picasso Fusion initiated an in-depth analysis of the company's brand identity, target audience demographics, and the competitive landscape within the automotive industry. This thorough examination laid the groundwork for a holistic strategy that would enhance NovaDrive™'s digital presence and amplify its brand messaging across various touchpoints.",
      },
      {
        type: 'twoImages' as const,
        layout: 'portraitLandscape' as const,
        images: [
          {
            src: 'https://framerusercontent.com/images/8mhH2JLzCutk1zasj8KIpiErI8.jpg?scale-down-to=2048',
            alt: 'Portrait',
            width: '1/3' as const,
          },
          {
            src: 'https://framerusercontent.com/images/dCfNihOQzdyiVpuqp2W9I9wec.jpg',
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
            title: 'Branding',
            description:
              "Picasso Fusion crafted a modern and dynamic brand identity for NovaDrive™ Motors, capturing the essence of innovation, sustainability, and forward-thinking design. The NovaDrive™ logo embodies the brand's commitment to illuminating the future of automotive innovation, with sleek lines and vibrant colors symbolizing progress and innovation.",
          },
          {
            title: 'Web Design and Development',
            description:
              "Picasso Fusion designed and developed a state-of-the-art website for NovaDrive™ Motors, featuring immersive visuals, intuitive navigation, and engaging content that showcases the brand's products and values. The website was optimized for performance across devices, ensuring a seamless user experience for visitors.",
          },
        ],
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/C4PbO3eJQqNxHfyoaLR3aWcKFM.jpg',
        alt: 'Full Section Image',
        height: 'medium' as const,
      },
      {
        type: 'results' as const,
        heading: 'Results/Outcomes',
        items: [
          {
            title: 'Increased Brand Visibility',
            description:
              "NovaDrive™ Motors' digital presence was significantly strengthened, leading to increased brand visibility and recognition in the automotive industry.",
          },
          {
            title: 'Enhanced Customer Engagement',
            description:
              'The revamped website and digital marketing initiatives helped NovaDrive™ Motors engage with customers more effectively, driving higher levels of interaction and brand affinity.',
          },
          {
            title: 'Improved Conversion Rates',
            description:
              'NovaDrive™ Motors experienced a boost in lead generation and conversion rates, resulting in tangible business growth and ROI.',
          },
        ],
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/ew7FYuuQOFT6whO8xe1H8iSls.jpg',
        alt: 'Full Section Image',
        height: 'medium' as const,
      },
    ],
  };