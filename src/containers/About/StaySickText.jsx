import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const StaySickText = () => {
useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sick-text",
        start: "center bottom",
        end: "center+=25px bottom",
        scrub: true,
        // markers: {
        //   startColor: "purple",
        //   endColor: "purple",
        // }
      },
    });

    tl.to(document.body, {
      color: "black",
      background: "white",
    });
    })
  return (
    <div className="flex w-full justify-center items-center mt-20" id="sick-text">
      <h4 className="about-parallax text-8xl font-bold uppercase">
        Stay sick 🤙 <br /> 🤧 not sick
      </h4>
    </div>
  );
};

export default StaySickText;
