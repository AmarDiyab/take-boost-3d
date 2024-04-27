import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Model } from "../../WawaOffice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const aboutId = document.getElementById("#about");

  console.log(aboutId);

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
          // toggleActions: 'restart none none none',
        //   markers: {
        //     startColor: "fuchsia",
        //     endColor: "fuchsia",
        //   },
        },
      }
    );

    // gsap.fromTo(
    //   "#text",
    //   {
    //     y: "50vh",
    //   },
    //   {
    //     y: "100vh",
    //     scrollTrigger: {
    //       trigger: aboutId,
    //       start: "bottom 50%",
    //       end: "bottom 0%",
    //       scrub: true,
    //     //   markers: {
    //     //     startColor: "purple",
    //     //     endColor: "purple",
    //     //   },
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   "#text",
    //   {
    //     y: "100vh",
    //   },
    //   {
    //     y: "150vh",
    //     scrollTrigger: {
    //       trigger: "#hero",
    //       start: "bottom 0%",
    //       end: "top 10%",
    //       scrub: true,
    //       markers: {
    //         startColor: "purple",
    //         endColor: "purple",
    //       },
    //     },
    //   }
    // );
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
