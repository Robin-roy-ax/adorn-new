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
      title: 'Harmony Beats™',
    },
    description: {
      text: 'Setting new standards in the music industry with innovative sounds and creative prowess',
      tags: ['Web Design & Development', 'Digital Marketing'],
    },
    sections: [
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/JPLGJwzN5KlpBsFfWV1GAeJdbE.jpg',
        alt: 'Harmony Hero',
        height: 'large' as const,
      },
      {
        type: 'twoColumn' as const,
        heading: 'Project Overview',
        content:
          'Harmony Beats, an avant-garde force in the music industry, partnered with Picasso Fusion to embark on a transformative journey towards revolutionizing its digital presence and customer engagement strategies. With a vision centered on creativity and innovation, Harmony Beats aimed to establish itself as a trendsetter in the music landscape by leveraging cutting-edge technology and strategic branding initiatives.',
      },
      {
        type: 'twoImages' as const,
        layout: 'landscapePortrait' as const,
        images: [
          {
            src: 'https://framerusercontent.com/images/1VZOaC663QnbJRbKitOfxuyRLo.jpg',
            alt: 'Landscape',
            width: '2/3' as const,
          },
          {
            src: 'https://framerusercontent.com/images/saHrYjjyANJUao2JRpyTngQobw.jpg?scale-down-to=1024',
            alt: 'Portrait',
            width: '1/3' as const,
          },
        ],
      },
      {
        type: 'twoColumn' as const,
        heading: 'Problem Statement',
        content:
          "Harmony Beats faced the challenge of effectively communicating its unique vision and dedication to artistic expression through its digital platforms. The existing branding and online infrastructure fell short in resonating with the evolving preferences of music enthusiasts, impeding Harmony Beats' ability to connect and captivate audiences in a competitive industry landscape.",
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/9dPQNXK2ycdQik6yU3VyojuILY.jpg',
        alt: 'Full Section Image',
        height: 'large' as const,
      },
      {
        type: 'twoColumn' as const,
        heading: 'Process/Methodology',
        content:
          "To tackle Harmony Beats' challenges, Picasso Fusion initiated an extensive analysis of the brand's identity, audience demographics, and the competitive landscape within the music industry. This comprehensive assessment formed the foundation for a holistic strategy aimed at enhancing Harmony Beats' digital footprint and amplifying its brand narrative across various touchpoints.",
      },
      {
        type: 'twoImages' as const,
        layout: 'portraitLandscape' as const,
        images: [
          {
            src: 'https://framerusercontent.com/images/Ph5nGFoBIlJNTywj5jEyLKlDM.jpg?scale-down-to=1024',
            alt: 'Portrait',
            width: '1/3' as const,
          },
          {
            src: 'https://framerusercontent.com/images/x64FiqRFHUKrwuwlpktQo0pbEqc.jpg',
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
            title: 'Design & Development',
            description:
              "Picasso Fusion crafted a cutting-edge website for Harmony Beats, featuring immersive visuals, seamless navigation, and compelling content that showcases the brand's diverse portfolio of music and artists. The website was meticulously designed to deliver an exceptional user experience across all devices, ensuring seamless interaction for visitors.",
          },
          {
            title: 'Digital Marketing',
            description:
              "Picasso Fusion devised and implemented a comprehensive digital marketing strategy for Harmony Beats, leveraging a mix of social media campaigns, email marketing, and content creation to enhance brand visibility and drive engagement. Through targeted outreach and strategic messaging, Picasso Fusion aimed to expand Harmony Beats' audience reach and foster deeper connections with music enthusiasts.",
          },
        ],
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/y3nyD4QJwcmweTDfAVJaBiX8AQ.jpg',
        alt: 'Full Section Image',
        height: 'medium' as const,
      },
      {
        type: 'results' as const,
        heading: 'Results/Outcomes',
        items: [
          {
            title: 'Elevated Brand Visibility',
            description:
              'Harmony Beats witnessed a substantial enhancement in its digital presence, leading to heightened brand visibility and recognition within the music industry.',
          },
          {
            title: 'Enhanced Audience Engagement',
            description:
              'The revamped website and strategic digital marketing initiatives enabled Harmony Beats to foster deeper connections with its audience, resulting in increased interaction and affinity towards the brand.',
          },
          {
            title: 'Improved Conversion Rates',
            description:
              'Harmony Beats experienced a surge in lead generation and conversion rates, translating into tangible business growth and a substantial return on investment.',
          },
        ],
      },
      {
        type: 'image' as const,
        image: 'https://framerusercontent.com/images/pTdUu0EcqLnSSQKFuDTNjzvDb0w.jpg',
        alt: 'Full Section Image',
        height: 'medium' as const,
      },
    ],
  };