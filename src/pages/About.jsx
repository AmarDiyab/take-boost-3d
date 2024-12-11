import gsap from "gsap";
import AboutHeroSection from "../containers/About/AboutHeroSection";
import WhoWeAreSection from "../containers/About/WhoWeAreSection";
import OvalSection from "../containers/About/OvalSection";
import StaySickText from "../containers/About/StaySickText";
import FAQSection from "../containers/About/FAQSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MarqueeSection from "../components/MarqueeSection";
import GetBoostedSection from "../components/GetBoostedSection";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);    
const About = () => {

  const [FAQ, setFAQ] = useState(false)

useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: {
        //   startColor: "purple",
        //   endColor: "purple",
        // }
      },
    });

    tl.to(".about-parallax", { y: "-200" }, "<");
  },    
  )
  return (
    <div>
      <AboutHeroSection />
      <WhoWeAreSection />
      <OvalSection FAQ={FAQ} />
      <FAQSection FAQ={FAQ} />
      <StaySickText setFAQ={setFAQ} />
      <MarqueeSection />
      <GetBoostedSection />
    </div>
  );
};

export default About;
