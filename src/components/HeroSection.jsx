/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Model } from "../../WawaOffice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {

  useGSAP(() => {
    gsap.fromTo(
      "#text",
      {
        x: 0,
        y: 0,
      },
      {
        y: '65vh',
        x: "-30vw",
        scrollTrigger: {
          trigger: "#hero",
          start: "0% 0%",
          end: "50% 0%",
          scrub: true,
        },
      }
    );

  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#text",
      {
        y: '65vh',
        x: "-30vw",
      },
      {
        y: '150vh',
        x: '-30vw',
        scrollTrigger: {
            trigger: '#hero',
            start: '50% 0%',
            end: '150% 0%',
            scrub: true,
            markers: {
                startColor: "fuchsia",
                endColor: "fuchsia",
              },
        }
      }
    );

  }, []);

  
  return (
    <>
      <div className="pl-12 h-screen w-[100vw] flex items-center" id="hero">
        <h1 className="text-[11vw] leading-[0.9] font-bold ">
          BECAUSE BEING SICK SUCKS{" "}
          <span className="text-xl inline-block max-w-[200px] font-normal ml-5">
            BOOST Immunity Gummy Vitamin
          </span>
        </h1>

        <Canvas className="mr-10 w-full z-50 absolute top-0 left-10 " id="text">
          <ambientLight intensity={1} />
          {/* <OrbitControls enableZoom={false} /> */}
          <Model />
        </Canvas>
      </div>
    </>
  );
};

export default HeroSection;
