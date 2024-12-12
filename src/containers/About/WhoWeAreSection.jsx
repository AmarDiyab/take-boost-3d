import { Canvas } from "@react-three/fiber";
import { Model } from "../../WawaOfficeAbout";

const WhoWeAreSection = () => {
  return (
    <div className="flex mx-[3rem] mt-28 max-lg:relative">
      <div className="about-parallax w-[50%] max-lg:w-full flex flex-col gap-4">
        <h3 className="text-6xl max-lg:text-3xl font-bold">WHO WE ARE</h3>
        <p className="text-xl max-lg:text-lg">
          BOOST is the first company dedicated to helping you get sick less.
          Because, honestly, why wait until you&apos;re sick to take care of your
          health? We consider immunity to be of the utmost importance, and we
          believe vitamins should work for you…even if you&apos;re not working for
          them.
        </p>
      </div>
      <div className="w-full h-full ml-20 max-lg:absolute max-lg:top-0 md:max-lg:-right-20 max-md:-right-40 max-md:scale-80 max-w-[50%]">
      <div className="h-[600px]">
        <Canvas className="w-full z-50 -mt-60 max-md:-mt-72">
          <ambientLight />
          <Model />
        </Canvas>
      </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
