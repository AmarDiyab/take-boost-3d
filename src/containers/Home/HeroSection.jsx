/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Model } from "../../WawaOffice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HeroSection = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom+=5000 bottom",
        scrub: true,
        pin: "#canvas",
        // markers: true,
      }
    })

    tl
    .fromTo("#canvas", {x: 0}, { x: "-35vw" })
    .to("#canvas", {x: "-35vw"})
    .to("#canvas", {x: "-35vw"})
    .to("#canvas", {x: "-35vw"})
    .to("#canvas", {x: "-35vw"})
    .to("#canvas", {x: "-35vw"})
    .to("#canvas", {x: "-35vw"})
    .to("#canvas", {x: "-35vw"})
    .to("#canvas", {x: "-35vw"})

  }, [])

  return (
    <div>
      <div className="pl-12 max-lg:pl-4 h-screen w-[100vw] flex max-lg:flex-col items-center relative max-lg:justify-center" id="hero">
        <h1 className="text-[11vw] max-md:text-8xl sm:max-lg:text-9xl leading-[0.9] font-bold ">
          BECAUSE <br className="hidden max-md:block" /> BEING <br className="hidden max-md:block" /> SICK SUCKS{" "}
          <span className="text-xl inline-block max-w-[200px] font-normal ml-5 max-sm:text-sm sm:max-md:text-lg">
            BOOST Immunity <br className="hidden max-md:block" /> Gummy Vitamin
          </span>
        </h1>

        <Canvas className="ml-10 w-full z-50 top-0 left-10 relative max-lg:hidden" id="canvas">
          <ambientLight intensity={1} />
          {/* <OrbitControls enableZoom={false} /> */}
          <Model />
        </Canvas>
      </div>
    </div>
  );
};

export default HeroSection;
