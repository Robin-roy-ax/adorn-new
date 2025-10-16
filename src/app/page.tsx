
import Benefit from "@/funnel/components/Benefit/page";
import Test from "@/funnel/components/Test";
import FAQPage from "@/funnel/components/FaqPage";
import Footer from "@/funnel/components/Footer";
import Nav from "@/funnel/components/Nav/page";
import Her from "@/funnel/components/Her/page";
import Abo from "@/funnel/components/Abo/page";
import FeaturedWork from "@/funnel/components/FeaturedWork/page";
import Service from "@/funnel/components/Service/page";
import Pricing from "@/funnel/components/Pricing";



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
    <FAQPage />
    <Footer />
    
      
    </>
  );
}
