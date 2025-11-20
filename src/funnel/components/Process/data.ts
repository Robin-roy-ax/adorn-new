import { StaticImageData } from "next/image";
import TimilyDelivery from "./TimilyDelivery.png";
import Earn from "./Earn.png";
import Define from "./Define.png";
import Design from "./Design.png";
import Iterate from "./Iterate.png";
import Credit from "./ballon.webp"
import water from "./Credit Points 4.png"

export interface Benefit {
    title: string;
    description: string;
    image: StaticImageData;
    rotation: number;
  }
  
  export const benefits: Benefit[] = [
    {
      title: "Earn Design Credits",
      description:
        "Subscribe to a plan & request as many designs as you'd like with the design credits acquired.",
      image: Credit,
      rotation: 0,
    },
    {
      title: "Define Your Needs",
      description:
        "Share your ideas, goals, and specific requirements to set the project direction clearly.",
      image: water,
      rotation: 0,
    },
    {
      title: "Design & Collaborate",
      description:
        "Our creative team brings your vision to life while working closely with you.",
      image: Design,
      rotation: 360,
    },
    {
      title: "Iterate & Improve",
      description:
        "Take control as you track your design's progress and provide feedback.",
      image: Iterate,
      rotation: 35,
    },
    {
      title: "Timely Delivery",
      description:
        "Count on us for timely project delivery, keeping your deadlines on track.",
      image: TimilyDelivery,
      rotation: -395,
    },
  ];
  