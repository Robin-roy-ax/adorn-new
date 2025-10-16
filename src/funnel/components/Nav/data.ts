import type { Variants } from "framer-motion";

export const MENU_ITEMS = ["Work", "Testimonials", "Services", "Benefits", "Pricing", "About Us"];

export const menuVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 300 },
  }),
};

export const LOGO_TEXT = "Picasso Fusion";
export const CTA_BUTTON_TEXT = "Get it for $49";
export const LOGO_SYMBOL = "✻";
