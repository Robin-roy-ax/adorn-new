// data.ts
export interface Stat {
    value: number;
    suffix?: string;
    label: string;
  }
  
  export interface TeamMember {
    name: string;
    role: string;
    image: string;
    description: string;
  }
  
  export const stats: Stat[] = [
    { value: 100, suffix: "+", label: "Projects completed" },
    { value: 12, suffix: "", label: "Industry awards" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 125, suffix: "K", label: "ROI achieved for clients" },
  ];
  
  export const teamMembers: TeamMember[] = [
    {
      name: "Karim Benzema",
      role: "Founder/Creative Director",
      image: "https://framerusercontent.com/images/EmrjuKhlE2MYwMMNxmKiVqqR4.png",
      description:
        "Karim is the visionary behind Picasso Fusion, leading the team with his passion for creativity and innovation. With years of experience in the industry, he drives the company's mission to create exceptional brand experiences.",
    },
    {
      name: "Matthew Davis",
      role: "Brand Strategist",
      image: "https://framerusercontent.com/images/EFyr6qMiyaDXQ7NXQBtz3PZUM.png",
      description:
        "Matthew is a master storyteller who helps our clients build strong and memorable brands. His strategic insights and creative thinking set the foundation for successful brand campaigns.",
    },
    {
      name: "Maqsood",
      role: "Senior Product Designer",
      image: "https://framerusercontent.com/images/KvYpZpFddcRRqVruxUZfmzSh0.png",
      description:
        "Maqsood is a creative powerhouse who brings ideas to life with his impeccable design skills. His user-centric approach ensures that our products not only look great but also deliver exceptional experiences.",
    },
    {
      name: "Daniel Mitchell",
      role: "Digital Marketing Manager",
      image: "https://framerusercontent.com/images/2SxzBFprM3cmjAl5NQvLmgktkY.png",
      description:
        "Daniel is a strategic thinker with a passion for digital marketing. His data-driven approach helps our clients achieve their business goals through targeted campaigns and effective online strategies.",
    },
    {
      name: "Ali Hassan",
      role: "Lead Web Developer",
      image: "https://framerusercontent.com/images/YfiWn0gVlP7wcJSozAnGEpbzYs.png?scale-down-to=1024",
      description:
        "Ali Hassan is a coding wizard with a knack for turning complex ideas into seamless digital experiences. His attention to detail ensures that every website we create is pixel-perfect.",
    },
    {
      name: "Ryan Johnson",
      role: "Motion Graphics Designer",
      image: "https://framerusercontent.com/images/w3zFIzqHBzSu5Fc9GhlQnPk1Ppc.png",
      description:
        "Ryan is a creative genius who brings motion to our projects with stunning animations and visuals. His eye for detail and innovative approach make our videos come to life.",
    },
  ];
  
  export const content = {
    hero: {
      title: "We're a",
      titleHighlight: "creative studio",
      subtitle: "based in London",
      description:
        "At Picasso Fusion, creativity is our cornerstone. We're a dynamic team driven by innovation and dedicated to bringing your vision to life.",
    },
    overview: {
      text: "Picasso Fusion is a vibrant creative studio dedicated to crafting exceptional brand experiences. Since 2020, we've been shaping digital landscapes and driving meaningful connections worldwide.",
    },
    mission: {
      title: "Our Mission",
      description:
        "Empowering brands to thrive in a digital world, we inspire imagination, collaboration, and excellence. Our goal is to elevate brands through impactful storytelling and innovative design solutions.",
    },
    approach: {
      title: "Our Approach",
      description:
        "We embrace collaboration, working closely with our clients to understand their goals and challenges. Through open dialogue and creative exploration, we develop customized solutions that resonate with audiences and drive results. Our iterative process ensures every aspect of our work is refined and perfected, delivering exceptional quality and value.",
    },
    numbers: {
      title: "In Numbers",
    },
    team: {
      title: "Meet Our",
      titleHighlight: "Team",
      description:
        "Discover the Exceptional Talent Shaping Picasso Fusion's Innovative Solutions and Remarkable Achievements",
    },
    heroImage: "https://framerusercontent.com/images/IjRP7RIug6UNzqeHbNO5WxD3FDk.jpg",
  };