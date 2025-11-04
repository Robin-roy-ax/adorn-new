export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote:
      "Picasso Fusion took our brand to new heights with their innovative designs and strategic approach. Their team's creativity and attention to detail truly set them apart.",
    name: "John Smith",
    title: "CEO of Bright Ideas Co.",
    image:
      "https://framerusercontent.com/images/iBem3bM7DskP1qLkV8JoHMLH68.jpg?scale-down-to=512",
  },
  {
    quote:
      "Working with Picasso Fusion was a game-changer for our business. Their expertise in web design helped us create a stunning online presence that resonated with our audience.",
    name: "Michael Johnson",
    title: "Founder of Tech Trends Inc.",
    image:
      "https://framerusercontent.com/images/9nYExwEqKiZOxikoZuzMhPzlIX8.jpg?scale-down-to=512",
  },
  {
    quote:
      "Picasso Fusion's content creation services exceeded our expectations. Their team crafted compelling copy and visuals that perfectly captured our brand's essence.",
    name: "David Brown",
    title: "HR Manager at Sparkle",
    image:
      "https://framerusercontent.com/images/xcVsFcFg7M5SkoOkJX5lUfdBUN4.jpg",
  },
  {
    quote:
      "From branding to digital marketing, Picasso Fusion delivered exceptional results every step of the way. Their dedication to our project and creative solutions were unmatched.",
    name: "Alex Thompson",
    title: "CEO of NextGen Solutions",
    image:
      "https://framerusercontent.com/images/mKwxopbnEeNzwo0LzcvyHC5RdMM.jpg",
  },
  {
    quote:
      "Picasso Fusion's branding services gave our startup the identity it needed to stand out in a competitive market. Their team's passion and dedication were evident in every aspect of the project.",
    name: "Matthew Miller",
    title: "Co-founder of Bloom",
    image:
      "https://framerusercontent.com/images/a5SO6bWYO9JGc90jHykGK0g78.jpg",
  },
  {
    quote:
      "We were blown away by Picasso Fusion's creativity and vision. Their environmental graphics transformed our office space and created a vibrant, inspiring atmosphere.",
    name: "Christopher Harris",
    title: "HR Manager at Evergreen",
    image:
      "https://framerusercontent.com/images/lyyanOkQwdFqEmTN9vhLsdsi0.jpg",
  },
];

export const TESTIMONIALS_TEXT = {
  title: {
    part1: "Words From Our",
    part2: "Partners"
  },
  description: {
    text: "See what our clients have to say about their experience with ",
    highlight: "Picasso Fusion",
    continuation: ". Their stories speak volumes about the quality of our work and the satisfaction of our clients."
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
