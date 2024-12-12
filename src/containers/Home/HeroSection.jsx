/* eslint-disable react/no-unknown-property */
import { Canvas, useLoader } from "@react-three/fiber";
import { Model } from "../../WawaOffice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Circle,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import modelPath from "/model/WawaOffice.glb";
import { Suspense } from "react";
import { Leva } from "leva";
import GltfModel from "../../OrangeBottle";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HeroSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom+=4500 bottom",
        scrub: true,
        pin: "#canvas",
        // markers: true,
      },
    });

    tl.fromTo("#canvas", { x: 0 }, { x: "-35vw" })
      .to("#canvas", { x: "-35vw" })
      .to("#canvas", { x: "-35vw" })
      .to("#canvas", { x: "-35vw" })
      .to("#canvas", { x: "-35vw" })
      .to("#canvas", { x: "-35vw" })
      .to("#canvas", { x: "-35vw" })
      .to("#canvas", { x: "-35vw" })
      .to("#canvas", { x: "-35vw" });
  }, []);

  return (
    <div>
      <div
        className="pl-12 max-lg:pl-4 h-screen w-[100vw] flex max-lg:flex-col items-center relative max-lg:justify-center"
        id="hero"
      >
        <h1 className="text-[11vw] max-sm:text-7xl sm:max-md:text-8xl md:max-lg:text-9xl leading-[0.9] font-bold ">
          BECAUSE <br className="hidden max-md:block" /> BEING{" "}
          <br className="hidden max-md:block" /> SICK SUCKS{" "}
          <span className="text-xl inline-block max-w-[200px] font-normal ml-5 max-sm:text-base max-sm:ml-0 sm:max-md:text-lg">
            BOOST Immunity <br className="hidden max-md:block" /> Gummy Vitamin
          </span>
        </h1>

        {/* <Canvas>
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Suspense fallback={null}>
            <GltfModel
              modelPath={modelPath}
            />
            <OrbitControls />
          </Suspense>
        </Canvas> */}

        <Canvas className="" id="canvas">
          {/* <Suspense fallback={<div>Loading...</div>}> */}
            {/* To hide controller */}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <GltfModel />

          {/* </Suspense> */}
        </Canvas>
      </div>
    </div>
  );
};

export default HeroSection;
