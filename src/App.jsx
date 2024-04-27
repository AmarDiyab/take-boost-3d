
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import IngredientsSection from "./components/IngredientsSection";

function App() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <IngredientsSection />
    </main>
  );
}

export default App;
