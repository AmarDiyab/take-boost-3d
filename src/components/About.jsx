// import arrow from "../assets/arrow-down.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    gsap.fromTo("#circle", {
        y: 200
    }, {
        y: -100,
        scrollTrigger: {
            target: '#circle',
            // start: 'top bottom',
            // end: 'bottom top',
            scrub: true,
            // markers: {
            //     startColor: 'purple',
            //     endColor: 'purple',
            // }
        }
    }
);
  }, []);

  return (
    <div className="h-screen flex justify-between">
      {/* <img src={arrow} alt="arrow" /> */}
      <div
        className="border border-white rounded-full h-[80vh] w-[80vh] flex justify-center items-center text-8xl font-semibold -ml-10"
        id="circle"
      >
        <p className="flex flex-col items-end ml-10">
          <span className="1">STAY</span>
          <span className="flex-auto self-start">SICK 🤙 </span>
          <span className="3">🤧 NOT</span>
          <span className="flex-auto self-start">SICK</span>
        </p>
      </div>

      <div className="flex flex-col justify-center max-w-[20%] mr-[10rem] gap-3">
        <p className="text-xs">BOOST HELPS YOU GET SICK LESS</p>
        <h4 className="text-4xl font-semibold">
          BE PROACTIVE NOT REACTIVE ABOUT YOUR IMMUNITY
        </h4>
        <h6 className="text-xl">
          No one gives a f*ck about their immune system unless they have to...
          and it took us a pandemic to realize that. BOOST is here to fix that.
        </h6>

        <button className="w-[80%] border-2 border-white rounded-full py-2 mt-3">
          BUY BOOST
        </button>
      </div>
    </div>
  );
};

export default About;
