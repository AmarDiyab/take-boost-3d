import gsap from "gsap";
import AboutHeroSection from "../containers/About/AboutHeroSection";
import WhoWeAreSection from "../containers/About/WhoWeAreSection";
import OvalSection from "../containers/About/OvalSection";
import StaySickText from "../containers/About/StaySickText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MarqueeSection from "../components/MarqueeSection";
import GetBoostedSection from "../components/GetBoostedSection";

gsap.registerPlugin(ScrollTrigger, useGSAP);    
const About = () => {
useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: {
          startColor: "purple",
          endColor: "purple",
        }
      },
    });

    tl.to(".about-parallax", { y: "-200" }, "<");
  },    
  )
  return (
    <div>
      <AboutHeroSection />
      <WhoWeAreSection />
      <OvalSection />
      <StaySickText />
      <MarqueeSection />
      <GetBoostedSection />
    </div>
  );
};

export default About;
