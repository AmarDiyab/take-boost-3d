import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Model } from "../../WawaOffice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useGSAP(() => {
    gsap.to("#text", {
      y: 400,
      x: -400,
      scrollTrigger: {
        trigger: "#text",
        start: 0,
        end: 500,
        scrub: true,
        // toggleActions: 'restart none none none',
        // markers: {
        //   startColor: "purple",
        //   endColor: "fuchsia",
        // },
      },
    });
  }, []);

  return (
    <>
      <div className="pl-12 h-screen w-[100vw] flex items-center">
        <h1 className="text-[11vw] leading-[0.9] font-bold ">
          BECAUSE BEING SICK SUCKS{" "}
          <span className="text-xl inline-block max-w-[200px] font-normal ml-5">
            BOOST Immunity Gummy Vitamin
          </span>
        </h1>

        <Canvas className="mr-10 w-full z-50 absolute top-0 left-10 " id="text">
          <ambientLight intensity={1} />
          <OrbitControls enableZoom={false} />
          <Model />
        </Canvas>
      </div>
    </>
  );
};

export default HeroSection;
