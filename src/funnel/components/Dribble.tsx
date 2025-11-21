'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  leftImage: string;
  rightImage: string;
  href: string;
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Brand Identity Design',
    description: 'Modern brand identity system with custom typography and color palette.',
    tags: ['Branding', 'Identity'],
    leftImage: 'https://framerusercontent.com/images/PasykLOKcBfLT5yRCJy3BP5w.jpg',
    rightImage: 'https://framerusercontent.com/images/UV0kfsR1WzRkqCK4mMW1O9t0.jpg',
    href: '/work/project-1',
  },
  {
    id: 'project-2',
    title: 'Mobile App Design',
    description: 'Intuitive mobile experience with seamless user interactions.',
    tags: ['UI/UX', 'Mobile'],
    leftImage: 'https://framerusercontent.com/images/TnTieucPuc0WFxg1tIh4JTPmp4.jpg',
    rightImage: 'https://framerusercontent.com/images/4vWXJkfkxtU2VxkFCO8Yhkjjj5k.jpg',
    href: '/work/project-2',
  },
  {
    id: 'project-3',
    title: 'E-commerce Platform',
    description: 'Complete shopping experience with modern checkout flow.',
    tags: ['Web Design', 'E-commerce'],
    leftImage: 'https://framerusercontent.com/images/PasykLOKcBfLT5yRCJy3BP5w.jpg',
    rightImage: 'https://framerusercontent.com/images/UV0kfsR1WzRkqCK4mMW1O9t0.jpg',
    href: '/work/project-3',
  },
  {
    id: 'project-4',
    title: 'SaaS Dashboard',
    description: 'Data visualization and analytics dashboard for enterprise clients.',
    tags: ['Dashboard', 'SaaS'],
    leftImage: 'https://framerusercontent.com/images/TnTieucPuc0WFxg1tIh4JTPmp4.jpg',
    rightImage: 'https://framerusercontent.com/images/4vWXJkfkxtU2VxkFCO8Yhkjjj5k.jpg',
    href: '/work/project-4',
  },
];

export default function DribbbleFeaturedWork() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  if (isMobile) {
    return <MobileDribbbleWork projects={projects} />;
  }

  return <DesktopDribbbleWork projects={projects} />;
}

// Desktop Version - Horizontal Scroll
function DesktopDribbbleWork({ projects }: { projects: Project[] }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={targetRef}
      className="dribbble-work-section"
      id="work"
      style={{
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        minHeight: '400vh', // 100vh per card for smooth scrolling
        padding: '0',
        position: 'relative',
        overflow: 'visible',
        gap: 0,
      }}
    >
      <div 
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          overflow: 'hidden', // Prevent horizontal overflow
        }}
      >
        <div className="work-container" style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '1400px',
          padding: '0 40px',
          margin: '0 auto',
        }}>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '60px',
              gap: '60px',
            }}
          >
            <div style={{
              outline: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              flexShrink: 0,
              willChange: 'transform',
              opacity: 1,
              transform: 'perspective(1200px)',
              flex: '0 0 auto',
            }}>
              <h2 style={{
                fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                fontSize: '96px',
                fontWeight: 500,
                letterSpacing: '-0.05em',
                lineHeight: '1.1em',
                textAlign: 'left',
                color: 'var(--token-22ab0cf2-e139-42ef-a5f9-10fd69d821e3)',
                margin: 0,
                whiteSpace: 'nowrap',
              }}>
                <span style={{
                  fontFamily: '"Instrument Serif", "Instrument Serif Placeholder", serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  letterSpacing: '0em',
                }}>
                  Dribbble
                </span>
              </h2>
            </div>
            
            <div style={{
              outline: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              flexShrink: 0,
              willChange: 'transform',
              opacity: 1,
              transform: 'perspective(1200px)',
              flex: '1 1 auto',
              maxWidth: '500px',
              paddingTop: '10px',
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.5em',
                color: 'var(--token-c309c53b-0751-4a8a-9654-75cd9b5a1bcf)',
                margin: 0,
              }}>
                Discover exceptional design work from talented creators around the world.
                Each shot tells a unique story of creativity, innovation, and craftsmanship.
              </p>
            </div>
          </motion.div>

          {/* Horizontal Scrolling Projects */}
          <HorizontalScroll 
            scrollYProgress={scrollYProgress} 
            projects={projects}
          />

          {/* See More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="button-container"
            style={{
              display: 'flex',
              justifyContent: 'center',
              willChange: 'transform',
              opacity: 1,
              transform: 'perspective(1200px)',
              marginTop: '60px',
            }}
          >
            <Link
              href="/work"
              style={{
                borderBottomWidth: '1px',
                borderColor: 'var(--token-f1f69427-55f1-4736-9f04-12e29d72c9db)',
                borderLeftWidth: '1px',
                borderRightWidth: '1px',
                borderStyle: 'solid',
                borderTopWidth: '1px',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(204, 213, 232, 0)',
                borderRadius: '30px',
                opacity: 1,
                padding: '16px 32px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(204, 213, 232, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(204, 213, 232, 0)';
              }}
            >
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--token-22ab0cf2-e139-42ef-a5f9-10fd69d821e3)',
                margin: 0,
              }}>
                View all shots
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div id="scroll-trigger" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1px' }} />
    </section>
  );
}

// Mobile Version
function MobileDribbbleWork({ projects }: { projects: Project[] }) {
  return (
    <section 
      className="dribbble-work-section-mobile"
      id="work"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: '60px 0',
        position: 'relative',
        overflow: 'visible',
        gap: 0,
      }}
    >
      <div className="work-container" style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1400px',
        padding: '0 20px',
        margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginBottom: '40px',
            gap: '20px',
          }}
        >
          <div style={{
            outline: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flexShrink: 0,
            willChange: 'transform',
            opacity: 1,
            transform: 'perspective(1200px)',
          }}>
            <h2 style={{
              fontFamily: 'Inter, "Inter Placeholder", sans-serif',
              fontSize: 'clamp(48px, 10vw, 72px)',
              fontWeight: 500,
              letterSpacing: '-0.05em',
              lineHeight: '1.1em',
              textAlign: 'left',
              color: 'var(--token-22ab0cf2-e139-42ef-a5f9-10fd69d821e3)',
              margin: 0,
            }}>
              <span style={{
                fontFamily: '"Instrument Serif", "Instrument Serif Placeholder", serif',
                fontStyle: 'italic',
                fontWeight: 400,
                letterSpacing: '0em',
              }}>
                Dribbble
              </span>
            </h2>
          </div>
          
          <div style={{
            outline: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flexShrink: 0,
            willChange: 'transform',
            opacity: 1,
            transform: 'perspective(1200px)',
          }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.5em',
              color: 'var(--token-c309c53b-0751-4a8a-9654-75cd9b5a1bcf)',
              margin: 0,
            }}>
              Discover exceptional design work from talented creators around the world.
              Each shot tells a unique story of creativity, innovation, and craftsmanship.
            </p>
          </div>
        </motion.div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          marginBottom: '40px',
        }}>
          {projects.map((project, index) => (
            <MobileProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="button-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            willChange: 'transform',
            opacity: 1,
            transform: 'perspective(1200px)',
          }}
        >
          <Link
            href="/work"
            style={{
              borderBottomWidth: '1px',
              borderColor: 'var(--token-f1f69427-55f1-4736-9f04-12e29d72c9db)',
              borderLeftWidth: '1px',
              borderRightWidth: '1px',
              borderStyle: 'solid',
              borderTopWidth: '1px',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(204, 213, 232, 0)',
              borderRadius: '30px',
              opacity: 1,
              padding: '14px 28px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(204, 213, 232, 0.1)';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(204, 213, 232, 0)';
            }}
          >
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--token-22ab0cf2-e139-42ef-a5f9-10fd69d821e3)',
              margin: 0,
            }}>
              View all shots
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface HorizontalScrollProps {
  scrollYProgress: import('framer-motion').MotionValue<number>;
  projects: Project[];
}

function HorizontalScroll({ scrollYProgress, projects }: HorizontalScrollProps) {
  // Calculate scroll based on number of projects
  // Each card takes full viewport width, so we need to scroll (projects.length - 1) * 100vw
  const totalCards = projects.length;
  const gap = 40;
  const scrollDistance = `${-(totalCards) * 78}vw`;
  
  const x = useTransform(scrollYProgress, [0, 1], ["-9vw", scrollDistance]);
  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        overflow: 'visible',
        marginBottom: '0px',
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          gap: `${gap}px`,
          x,
          willChange: 'transform',
        }}
      >
        {projects.map((project, index) => (
          <DualImageCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function DualImageCard({ project, index }: ProjectCardProps) {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  
  // Use left diagonal (top-left to bottom-right) for all cards
  // This creates a consistent animation pattern across all images
  const isLeftDiagonal = true;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px 0px 0px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        opacity: 1,
        transform: 'none',
        minWidth: 'calc(100vw - 80px)', // Account for container padding
        maxWidth: '1320px', // Max width to match container's maxWidth - padding
        width: '100%',
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Link 
        href={project.href} 
        style={{
          width: '100%',
          opacity: 1,
          textDecoration: 'none',
          display: 'block',
        }}
      >
        <div style={{
          borderRadius: '20px',
          opacity: 1,
          position: 'relative',
          overflow: 'hidden',
          height: '700px',
          width: '100%',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}>
            {/* First Image */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '20px',
              }}
              animate={{
                clipPath: hoveredSide === 'left' 
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                  : hoveredSide === 'right' 
                    ? (isLeftDiagonal 
                        ? 'polygon(0 0, 0 0, 0 100%, 0 100%)'
                        : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)')
                    : (isLeftDiagonal 
                        ? 'polygon(0 0, 100% 0, 0 100%, 0 100%)'
                        : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'),
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.4, 0, 0.2, 1]
              }}
              onMouseEnter={() => setHoveredSide('left')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 'inherit',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}>
                  <Image
                    src={project.leftImage}
                    alt={`${project.title} - Image 1`}
                    fill
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      borderRadius: 'inherit',
                      objectPosition: 'center',
                      objectFit: 'cover',
                    }}
                    sizes="750px"
                  />
                </div>
              </motion.div>

              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(rgba(23, 30, 46, 0) 0%, rgba(24, 31, 47, 0.75) 100%)',
                opacity: 1,
                pointerEvents: 'none',
              }} />

              {hoveredSide === 'left' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '40px',
                    opacity: 1,
                    pointerEvents: 'none',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px',
                    opacity: 1,
                  }}>
                    {project.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        style={{
                          borderBottomWidth: '1px',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          borderLeftWidth: '1px',
                          borderRightWidth: '1px',
                          borderStyle: 'solid',
                          borderTopWidth: '1px',
                          backdropFilter: 'blur(5px)',
                          backgroundColor: 'rgba(179, 179, 179, 0.4)',
                          borderRadius: '18px',
                          opacity: 1,
                          padding: '10px 20px',
                        }}
                      >
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: 400,
                          color: 'rgba(255, 255, 255, 0.8)',
                        }}>
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ opacity: 1 }}>
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '36px',
                      fontWeight: 600,
                      lineHeight: '1.2em',
                      color: 'var(--token-bb3680e9-7fc2-4dd0-b6fe-fcde212acb17)',
                      margin: '0 0 12px 0',
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '1.5em',
                      color: 'rgba(255, 255, 255, 0.6)',
                      margin: 0,
                      maxWidth: '600px',
                    }}>
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Second Image */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '20px',
              }}
              animate={{
                clipPath: hoveredSide === 'right' 
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                  : hoveredSide === 'left' 
                    ? (isLeftDiagonal 
                        ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                        : 'polygon(0 0, 0 0, 0 100%, 0 100%)')
                    : (isLeftDiagonal 
                        ? 'polygon(100% 0, 100% 100%, 0 100%, 100% 0)'
                        : 'polygon(0 0, 100% 0, 0 100%, 0 0)'),
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.4, 0, 0.2, 1]
              }}
              onMouseEnter={() => setHoveredSide('right')}
              onMouseLeave={() => setHoveredSide(null)}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 'inherit',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}>
                  <Image
                    src={project.rightImage}
                    alt={`${project.title} - Image 2`}
                    fill
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      borderRadius: 'inherit',
                      objectPosition: 'center',
                      objectFit: 'cover',
                    }}
                    sizes="750px"
                  />
                </div>
              </motion.div>

              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(rgba(23, 30, 46, 0) 0%, rgba(24, 31, 47, 0.75) 100%)',
                opacity: 1,
                pointerEvents: 'none',
              }} />

              {hoveredSide === 'right' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '40px',
                    opacity: 1,
                    pointerEvents: 'none',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px',
                    opacity: 1,
                  }}>
                    {project.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        style={{
                          borderBottomWidth: '1px',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          borderLeftWidth: '1px',
                          borderRightWidth: '1px',
                          borderStyle: 'solid',
                          borderTopWidth: '1px',
                          backdropFilter: 'blur(5px)',
                          backgroundColor: 'rgba(179, 179, 179, 0.4)',
                          borderRadius: '18px',
                          opacity: 1,
                          padding: '10px 20px',
                        }}
                      >
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: 400,
                          color: 'rgba(255, 255, 255, 0.8)',
                        }}>
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ opacity: 1 }}>
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '36px',
                      fontWeight: 600,
                      lineHeight: '1.2em',
                      color: 'var(--token-bb3680e9-7fc2-4dd0-b6fe-fcde212acb17)',
                      margin: '0 0 12px 0',
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '1.5em',
                      color: 'rgba(255, 255, 255, 0.6)',
                      margin: 0,
                      maxWidth: '600px',
                    }}>
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function MobileProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        opacity: 1,
        width: '100%',
      }}
    >
      <Link 
        href={project.href} 
        style={{
          width: '100%',
          opacity: 1,
          textDecoration: 'none',
          display: 'block',
        }}
      >
        <div style={{
          borderRadius: '16px',
          opacity: 1,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            display: 'flex',
            gap: '8px',
            width: '100%',
          }}>
            <div
              style={{
                borderRadius: '16px',
                opacity: 1,
                position: 'relative',
                width: '50%',
                paddingBottom: '62.5%',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 'inherit',
              }}>
                <Image
                  src={project.leftImage}
                  alt={`${project.title} - Image 1`}
                  fill
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center',
                    objectFit: 'cover',
                  }}
                  sizes="(max-width: 768px) 50vw, 250px"
                />
              </div>
            </div>

            <div
              style={{
                borderRadius: '16px',
                opacity: 1,
                position: 'relative',
                width: '50%',
                paddingBottom: '62.5%',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 'inherit',
              }}>
                <Image
                  src={project.rightImage}
                  alt={`${project.title} - Image 2`}
                  fill
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center',
                    objectFit: 'cover',
                  }}
                  sizes="(max-width: 768px) 50vw, 250px"
                />
              </div>
            </div>
          </div>

          <div style={{
            padding: '16px 0',
            opacity: 1,
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '12px',
              opacity: 1,
            }}>
              {project.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  style={{
                    borderBottomWidth: '1px',
                    borderColor: 'var(--token-f1f69427-55f1-4736-9f04-12e29d72c9db)',
                    borderLeftWidth: '1px',
                    borderRightWidth: '1px',
                    borderStyle: 'solid',
                    borderTopWidth: '1px',
                    backgroundColor: 'rgba(204, 213, 232, 0.1)',
                    borderRadius: '14px',
                    opacity: 1,
                    padding: '6px 12px',
                  }}
                >
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: 'var(--token-c309c53b-0751-4a8a-9654-75cd9b5a1bcf)',
                  }}>
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ opacity: 1 }}>
              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(20px, 4vw, 24px)',
                fontWeight: 600,
                lineHeight: '1.2em',
                color: 'var(--token-22ab0cf2-e139-42ef-a5f9-10fd69d821e3)',
                margin: '0 0 8px 0',
              }}>
                {project.title}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.5em',
                color: 'var(--token-c309c53b-0751-4a8a-9654-75cd9b5a1bcf)',
                margin: 0,
              }}>
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}