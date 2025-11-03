// index.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectData } from "./data";
import styles from "./style.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function ArchPage() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <DescriptionSection />
      {projectData.sections.map((section, index) => (
        <SectionRenderer key={index} section={section as SectionType} />
      ))}
    </div>
  );
}

// =================== Hero Section ===================
function HeroSection() {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={styles.heroTitle}
    >
      {projectData.hero.title}
    </motion.h1>
  );
}

// =================== Description Section ===================
function DescriptionSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={styles.descriptionContainer}
    >
      <p className={styles.descriptionText}>{projectData.description.text}</p>
      <div className={styles.tagsContainer}>
        {projectData.description.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// =================== Section Renderer ===================
type SectionType = 
  | { type: 'image'; image: string; alt: string; height: 'large' | 'medium'; objectPosition?: string }
  | { type: 'twoColumn'; heading: string; content: string }
  | { type: 'twoImages'; layout: 'landscapePortrait' | 'portraitLandscape'; images: Array<{ src: string; alt: string; width: '1/3' | '2/3' }> }
  | { type: 'implementation'; heading: string; items: Array<{ title: string; description: string }> }
  | { type: 'results'; heading: string; items: Array<{ title: string; description: string }> };

interface SectionRendererProps {
  section: SectionType;
}

function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.type) {
    case 'image':
      return <ImageSection section={section} />;
    case 'twoColumn':
      return <TwoColumnSection section={section} />;
    case 'twoImages':
      return <TwoImagesSection section={section} />;
    case 'implementation':
      return <ImplementationSection section={section} />;
    case 'results':
      return <ResultsSection section={section} />;
    default:
      return null;
  }
}

// =================== Image Section ===================
interface ImageSectionProps {
  section: {
    image: string;
    alt: string;
    height: 'large' | 'medium';
    objectPosition?: string;
  };
}

function ImageSection({ section }: ImageSectionProps) {
  const heightClass =
    section.height === 'large' ? styles.imageLarge : styles.imageMedium;
  const positionClass =
    section.objectPosition === 'bottom' ? styles.imageBottom : '';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={`${styles.imageContainer} ${heightClass}`}
    >
      <Image
        src={section.image}
        alt={section.alt}
        fill
        className={`${styles.image} ${positionClass}`}
      />
    </motion.div>
  );
}

// =================== Two Column Section ===================
interface TwoColumnSectionProps {
  section: {
    heading: string;
    content: string;
  };
}

function TwoColumnSection({ section }: TwoColumnSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={styles.twoColumnContainer}
    >
      <div className={styles.columnLeft}>
        <h2 className={styles.columnHeading}>{section.heading}</h2>
      </div>
      <div className={styles.columnRight}>
        <p className={styles.columnContent}>{section.content}</p>
      </div>
    </motion.div>
  );
}

// =================== Two Images Section ===================
interface TwoImagesSectionProps {
  section: {
    layout: 'landscapePortrait' | 'portraitLandscape';
    images: Array<{
      src: string;
      alt: string;
      width: '1/3' | '2/3';
    }>;
  };
}

function TwoImagesSection({ section }: TwoImagesSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={styles.twoImagesContainer}
    >
      {section.images.map((img, index) => {
        const wrapperClass =
          img.width === '2/3'
            ? styles.imageWrapperWide
            : styles.imageWrapperNarrow;

        return (
          <div key={index} className={wrapperClass}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={styles.image}
            />
          </div>
        );
      })}
    </motion.div>
  );
}

// =================== Implementation Section ===================
interface ImplementationSectionProps {
  section: {
    heading: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

function ImplementationSection({ section }: ImplementationSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={styles.implementationContainer}
    >
      <div className={styles.implementationLeft}>
        <p className={styles.columnHeading}>{section.heading}</p>
      </div>

      <div className={styles.implementationRight}>
        {section.items.map((item, index) => (
          <div key={index}>
            <h3 className={styles.implementationTitle}>{item.title}</h3>
            <p className={styles.implementationDescription}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// =================== Results Section ===================
interface ResultsSectionProps {
  section: {
    heading: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

function ResultsSection({ section }: ResultsSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={styles.resultsContainer}
    >
      <div className={styles.resultsLeft}>
        <h2 className={styles.columnHeading}>{section.heading}</h2>
      </div>

      <div className={styles.resultsRight}>
        {section.items.map((item, index) => (
          <div key={index} className={styles.resultsItem}>
            <h3 className={styles.resultsItemTitle}>{item.title}</h3>
            <p className={styles.resultsItemDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}