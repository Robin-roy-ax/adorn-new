
import Benefit from "@/funnel/components/Benefit/page";
import Test from "@/funnel/components/Test/page";
import Faq from "@/funnel/components/Faq/page";

import Nav from "@/funnel/components/Nav/page";
import Her from "@/funnel/components/Her/page";
import Abo from "@/funnel/components/Abo/page";
import FeaturedWork from "@/funnel/components/FeaturedWork/page";
import Service from "@/funnel/components/Service/page";
import Pricing from "@/funnel/components/Pricing/page";
import Foot from "@/funnel/components/Foot/page";



export default function Home() {
  return (
    <>
    <Nav />
    
    <Her />
    <Abo />
    <FeaturedWork />
    <Test />
    <Service />
    <Benefit />
    <Pricing />
    <Faq />
    <Foot/>
    
      
    </>
  );
}
