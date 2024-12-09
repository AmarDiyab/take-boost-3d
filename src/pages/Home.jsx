import HeroSection from "../containers/Home/HeroSection";
import IngredientsSection from "../containers/Home/IngredientsSection";
import LargeTextSection from "../containers/Home/LargeTextSection";
import TestimonialSection from "../containers/Home/TestimonialSection";
import MarqueeSection from "../components/MarqueeSection";
import GetBoostedSection from "../components/GetBoostedSection";
import AboutSection from "../containers/Home/AboutSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <IngredientsSection />
      <LargeTextSection />
      <TestimonialSection />
      <MarqueeSection />
      <GetBoostedSection />
    </>
  );
};

export default Home;
