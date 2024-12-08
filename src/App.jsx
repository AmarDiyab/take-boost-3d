
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import IngredientsSection from "./components/IngredientsSection";
import LargeTextSection from "./components/LargeTextSection";
import TestimonialSection from "./components/TestimonialSection";
import MarqueeSection from "./components/MarqueeSection";
import GetBoostedSection from "./components/GetBoostedSection";

function App() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <IngredientsSection />
      <LargeTextSection />
      <TestimonialSection />
      <MarqueeSection />
      <GetBoostedSection />
    </main>
  );
}

export default App;
