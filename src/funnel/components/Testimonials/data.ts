export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote:
      "The new UI is a game changer, streamlining our processes and improving data insights. Since implementation, efficiency and cost-effectiveness have increased significantly.",
    name: "Rafael",
    title: "Director of IT Industry",
    image:
      "https://framerusercontent.com/images/iBem3bM7DskP1qLkV8JoHMLH68.jpg?scale-down-to=512",
  },
  {
    quote:
      "The digital ads designed for Saree Boutique are impactful, showcasing the sarees’ elegance while telling a story of tradition and craftsmanship. Thanks to engaging content and campaigns",
    name: "Michael Johnson",
    title: "Founder of Boutique",
    image:
      "https://framerusercontent.com/images/9nYExwEqKiZOxikoZuzMhPzlIX8.jpg?scale-down-to=512",
  },
  {
    quote:
      "The mobile design for Protein Pantry is exceptional. Its intuitive, sleek interface captures our brand and delivers a seamless user experience. We’re thrilled with how it elevated our brand.",
    name: "David Brown",
    title: "Co-Founder of Food Industry",
    image:
      "https://framerusercontent.com/images/xcVsFcFg7M5SkoOkJX5lUfdBUN4.jpg",
  },
  {
    quote:
      "The Picasso Fusion team's skills and creativity helped us build a visually stunning Instagram presence that has increased brand awareness and sales for our beauty brand.",
    name: "Leandro",
    title: "Co-Founder of Medical Industry",
    image:
      "https://framerusercontent.com/images/mKwxopbnEeNzwo0LzcvyHC5RdMM.jpg",
  },
  {
    quote:
      "Picasso Fusion’s design services surpassed our expectations. Their team delivered compelling visuals and messaging that aligned perfectly with our brand, and the credit based system made the entire process effortless and efficient.",
    name: "Matthew Miller",
    title: "Co-founder of Construction Company",
    image:
      "https://framerusercontent.com/images/a5SO6bWYO9JGc90jHykGK0g78.jpg",
  },
  {
    quote:
      "We were truly impressed by Picasso Fusion’s creativity and vision. Their environmental graphics transformed our office into a vibrant and inspiring space that elevated the entire atmosphere.",
    name: "Christopher Harris",
    title: "HR Manager at Cafe",
    image:
      "https://framerusercontent.com/images/lyyanOkQwdFqEmTN9vhLsdsi0.jpg",
  },
];

export const TESTIMONIALS_TEXT = {
  title: {
    part1: "Client Stories That",
    part2: "Stand Out"
  },
  description: {
    text: "Hear directly from clients who have partnered with ",
    highlight: "Picasso Fusion",
    continuation: ". Their stories reflect the value, creativity, and results they’ve experienced with our work. "
  }
};

export const TESTIMONIALS_ANIMATIONS = {
  header: {
    duration: 0.8,
    initial: { opacity: 1, y: 40 },
    animate: { opacity: 1, y: 0 }
  },
  card: {
    duration: 0.6,
    initial: { opacity: 1, y: 60 },
    animate: { opacity: 1, y: 0 },
    ease: [0.16, 1, 0.3, 1] as const
  }
} as const;
