import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#circle",
      {
        y: 100,
      },
      {
        y: -400,
        scrollTrigger: {
          target: "#circle",
          // start: 'top bottom',
          // end: 'bottom top',
          scrub: true,
          // markers: {
          //     startColor: 'purple',
          //     endColor: 'purple',
          // }
        },
      }
    );

    gsap.to("#circle-text", {
      y: -100,
      scrollTrigger: {
        target: "#circle",
        scrub: true,
      }
    })
  }, []);

  return (
    <div className="h-screen flex max-lg:flex-col justify-between max-lg:items-start max-lg:gap-20">
      {/* <img src={arrow} alt="arrow" /> */}
      <div
        className="border border-white rounded-full h-[600px] w-[600px] min-h-[600px] min-w-[600px] flex justify-center items-center text-8xl max-md:text-7xl font-semibold -ml-10"
        id="circle"
      >
        <p className="flex flex-col items-end ml-10 max-md:-ml-10" id="circle-text">
          <span className="1">STAY</span>
          <span className="flex-auto self-start">SICK 🤙 </span>
          <span className="3">🤧 NOT</span>
          <span className="flex-auto self-start">SICK</span>
        </p>
      </div>

      <div className="flex flex-col justify-center max-w-[20%] max-lg:max-w-[50%] max-lg:mx-8 mr-[10rem] gap-3">
        <p className="text-xs">BOOST HELPS YOU GET SICK LESS</p>
        <h4 className="text-4xl max-md:text-2xl font-semibold">
          BE PROACTIVE NOT REACTIVE ABOUT YOUR IMMUNITY
        </h4>
        <h6 className="text-xl">
          No one gives a f*ck about their immune system unless they have to...
          and it took us a pandemic to realize that. BOOST is here to fix that.
        </h6>

        <button className="w-[80%] max-lg:w-full border-2 border-white rounded-full py-2 mt-3">
          BUY BOOST
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
