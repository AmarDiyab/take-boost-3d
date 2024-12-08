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
        end: "bottom-=700 bottom",
        scrub: true,
        pin: "#canvas",
        markers: true,
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
    <>
      <div className="pl-12 h-screen w-[100vw] flex items-center relative" id="hero">
        <h1 className="text-[11vw] leading-[0.9] font-bold ">
          BECAUSE BEING SICK SUCKS{" "}
          <span className="text-xl inline-block max-w-[200px] font-normal ml-5">
            BOOST Immunity Gummy Vitamin
          </span>
        </h1>

        <Canvas className="ml-10 w-full z-50 top-0 left-10 relative" id="canvas">
          <ambientLight intensity={1} />
          {/* <OrbitControls enableZoom={false} /> */}
          <Model />
        </Canvas>
      </div>
    </>
  );
};

export default HeroSection;
