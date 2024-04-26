import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "../../WawaOffice";

const HeroSection = () => {
  return (
    <div className="pl-12">
      <div className="h-screen flex items-center">
        <h1 className="text-[11vw] leading-[1] font-bold ">
          BECAUSE BEING SICK SUCKS <span className="text-xl inline-block max-w-[200px] font-normal ml-5">BOOST Immunity Gummy Vitamin</span>
        </h1>

        <div className="w-[20% mr-10">
          <Canvas>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} />
            <Model />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
