import GetBoostedSection from "../components/GetBoostedSection";
import MarqueeSection from "../components/MarqueeSection";
import TestimonialSection from "../containers/Shop/TestimonialSection";
import IngredientsAccordion from "../containers/Shop/IngredientsAccordion";
import ShoppingSection from "../containers/Shop/ShoppingSection";

const Shop = () => {
  return (
    <div className="bg-white text-black" id="shop">
      <ShoppingSection />
      <IngredientsAccordion />
      <TestimonialSection />
      <MarqueeSection />
      <GetBoostedSection />
    </div>
  );
};

export default Shop;
