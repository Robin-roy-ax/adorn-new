import type { Variants } from "framer-motion";

// Menu items with section IDs (for smooth navigation)
export const MENU_ITEMS = [
  { label: "Work", href: "#work", id: "work" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Benefits", href: "#benefits", id: "benefits" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "About Us", href: "#about", id: "about" },
];

// Framer Motion animation for mobile dropdown
export const menuVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 300 },
  }),
};

// Branding and CTA
export const LOGO_SYMBOL = "✻";
export const LOGO_TEXT = "Picasso Fusion";
export const CTA_BUTTON_TEXT = "Get it for $49";

// Optional: Hero section ID for scroll-to-top logo behavior
export const HERO_SECTION_ID = "#hero";

export const Logo = {
  id: "logo",
  symbol: LOGO_SYMBOL,
  text: LOGO_TEXT,
};