import { Canvas } from "@react-three/fiber";
import { Model } from "../../WawaOfficeAbout";

const WhoWeAreSection = () => {
  return (
    <div className="flex mx-[3rem] mt-28">
      <div className="about-parallax w-[40%] flex flex-col gap-4">
        <h3 className="text-6xl font-bold">WHO WE ARE</h3>
        <p className="text-xl">
          BOOST is the first company dedicated to helping you get sick less.
          Because, honestly, why wait until you&apos;re sick to take care of your
          health? We consider immunity to be of the utmost importance, and we
          believe vitamins should work for you…even if you&apos;re not working for
          them.
        </p>
      </div>
      <div className="w-1/2 h-full ml-20">
      <div className="h-[600px]">
        <Canvas className="w-full z-50 -mt-60">
          <ambientLight />
          <Model />
        </Canvas>
      </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
