import HeroSection from "../containers/Home/HeroSection";
import IngredientsSection from "../containers/Home/IngredientsSection";
import LargeTextSection from "../containers/Home/LargeTextSection";
import TestimonialSection from "../containers/Home/TestimonialSection";
import MarqueeSection from "../containers/Home/MarqueeSection";
import GetBoostedSection from "../containers/Home/GetBoostedSection";
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
