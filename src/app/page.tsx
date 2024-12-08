import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import LogosSection from "./Components/logosection"
import FeaturedProducts from "./Components/Featuredproduct";
import TopCategories from "./Components/Topcategories";
import PopularStyles from "./Components/Popularstyles";
import OurProducts from "./Components/Ourproducts";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogosSection />
      <FeaturedProducts/>
      <TopCategories/>
      <PopularStyles/>
      <OurProducts/>
      <Footer/>
      
    </>
  );
}
