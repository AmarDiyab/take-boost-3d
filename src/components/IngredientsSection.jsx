import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import blueMolecule from "../assets/blue-molecule.png";
import orange from "../assets/orange.png";
import zinc from "../assets/zinc.png";
import { useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const IngredientsSection = () => {
  // useGSAP(() => {
  //   gsap.to("#ingredient-section", {
  //     scrollTrigger: {
  //       trigger: "#ingredient-section",
  //       pin: true,
  //       pinSpacing: true,
  //       scrub: true,
  //       start: "0% 0%",
  //       end: "2000% 0%",
  //       // markers: {
  //       //   startColor: "blue",
  //       //   endColor: "blue",
  //       // },
  //     },
  //   });
  // }, []);

  // useGSAP(() => {
  //   gsap.to("#blue-molecule-1", {
  //     opacity: 0,
  //     scale: 2,
  //     rotation: 45,
  //     stagger: 0.5,
  //     scrollTrigger: {
  //       trigger: "#ingredient-section",
  //       start: "0% 0%",
  //       end: "200% 0%",
  //       scrub: true,
  //       // markers: {
  //       //   startColor: "yellow",
  //       //   endColor: "yellow",
  //       // },
  //     },
  //   });
  // }, []);

  // useGSAP(() => {
  //   gsap.to(document.body, {
  //     background:
  //       "linear-gradient(155.92deg, rgb(146, 157, 255) 5.36%, rgba(63, 82, 255, 0) 85.08%)",
  //     overwrite: "auto",
  //     duration: 0,
  //     scrollTrigger: {
  //       trigger: "#pin-container",
  //       start: "10% 0%",
  //       end: "10% 0%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  // }, []);

  // useGSAP(() => {
  //   gsap.to("#benefit-text", {
  //     text: "hello this is a sample text",
  //     overwrite: "auto",
  //     scrollTrigger: {
  //       trigger: "#pin-container",
  //       start: "10% 0%",
  //       end: "30% 0%",
  //       scrub: true,
  //       // markers: {
  //       //   startColor: "yellow",
  //       //   endColor: "yellow",
  //       // },
  //     },
  //   });
  // }, []);

  // useGSAP(() => {
  //   gsap.to(document.body, {
  //     background:
  //       "linear-gradient(155.92deg, rgb(146, 157, 255) 5.36%, #afb6ff",
  //     overwrite: "auto",
  //     duration: 0,
  //     scrollTrigger: {
  //       trigger: "#pin-container",
  //       start: "30% 0%",
  //       end: "30% 0%",
  //       toggleActions: "play none none reverse",
  //       // markers: {
  //       //   startColor: "fuchsia",
  //       //   endColor: "fuchsia",
  //       // },
  //     },
  //   });
  // }, []);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     "#orange",
  //     {
  //       opacity: 0,
  //       rotate: 45,
  //       scale: 0.5,
  //     },
  //     {
  //       opacity: 1,
  //       rotate: 120,
  //       scale: 1.5,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: "#pin-container",
  //         start: "10%, 0%",
  //         end: "20% 0%",
  //         scrub: true,
  //         // markers: {
  //         //   startColor: "fuchsia",
  //         //   endColor: "fuchsia",
  //         // },
  //       },
  //     }
  //   );
  // }, []);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     "#orange",
  //     {
  //       opacity: 1,
  //       rotate: 120,
  //       scale: 1.5,
  //     },
  //     {
  //       opacity: 0,
  //       rotate: 150,
  //       scale: 2,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: "#pin-container",
  //         start: "20%, 0%",
  //         end: "30% 0%",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     "#zinc",
  //     {
  //       opacity: 0,
  //       rotate: 45,
  //       scale: 0.5,
  //     },
  //     {
  //       opacity: 1,
  //       rotate: 120,
  //       scale: 1.5,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: "#pin-container",
  //         start: "30%, 0%",
  //         end: "40% 0%",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     "#zinc",
  //     {
  //       opacity: 1,
  //       rotate: 120,
  //       scale: 1.5,
  //     },
  //     {
  //       opacity: 0,
  //       rotate: 150,
  //       scale: 2,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: "#pin-container",
  //         start: "40%, 0%",
  //         end: "50% 0%",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <>
      <div className="mt-[10rem] mx-12 " id="last">
        <p className="flex flex-col items-start ml-10 text-[11vw] font-bold leading-[1]">
          <span className="">INGREDIENTS</span>
          <span className="flex-auto self-end">
            <h1 className="text-[11vw] leading-[1] font-bold flex items-center ">
              <span className="text-xl flex flex-col font-normal">
                <p>AND YOU,</p> <p>OF COURSE.</p>
              </span>
              YOUR MOM
            </h1>
          </span>
          <span className="">WILL LOVE</span>
        </p>

        <div id="pin-container">
          <div id="ingredient-section">
            <div className="h-screen flex justify-between items-center relative">
              <div className="flex flex-col gap-3">
                <p>INGREDIENTS</p>
                <h4 className="text-7xl font-bold">ELDERBERRY</h4>
                <h4 className="text-7xl font-bold outline-text">VITAMIN C</h4>
                <h4 className="text-7xl font-bold outline-text">ZINC</h4>
              </div>
              <div className="flex flex-col gap-0 mr-[5rem]">
                <p className="mb-2">BENEFITS</p>
                <h5 className="my-1 text-xl" id="benefit-text">
                  01. Improves Common Cold Symptoms
                </h5>
                <hr />
                <h5 className="my-1 text-xl" id="benefit-text">
                  02. Holds Antioxidant Properties
                </h5>
                <hr />
                <h5 className="my-1 text-xl" id="benefit-text">
                  03. Promotes Glowing Skin
                </h5>
                <hr />
                <h5 className="my-1 text-xl" id="benefit-text">
                  04. Enhances Brain Function
                </h5>
                <hr />
                <p className="mt-5 text-xs">
                  BOOST has 100mg of Vitamin C per serving
                </p>
              </div>
              <img
                src={blueMolecule}
                alt="blue-molecule"
                className="absolute -top-[7%] left-[10%]"
                width={250}
                id="blue-molecule-1"
              />
              <img
                src={blueMolecule}
                alt="blue-molecule"
                className="absolute -top-[10%] right-[5%]"
                width={350}
                id="blue-molecule-1"
              />
              <img
                src={blueMolecule}
                alt="blue-molecule"
                className="absolute -bottom-[15%] left-[7%]"
                width={350}
                id="blue-molecule-1"
              />
              <img
                src={blueMolecule}
                alt="blue-molecule"
                className="absolute -bottom-[5%] right-[10%]"
                width={250}
                id="blue-molecule-1"
              />

              <img
                src={orange}
                alt="orange"
                className="absolute -top-[7%] left-[10%] opacity-0"
                width={200}
                id="orange"
              />
              <img
                src={orange}
                alt="orange"
                className="absolute -top-[10%] right-[5%] opacity-0"
                width={250}
                id="orange"
              />
              <img
                src={orange}
                alt="orange"
                className="absolute -bottom-[15%] left-[7%] opacity-0"
                width={250}
                id="orange"
              />
              <img
                src={orange}
                alt="orange"
                className="absolute -bottom-[5%] right-[10%] opacity-0"
                width={200}
                id="orange"
              />

              <img
                src={zinc}
                alt="zinc"
                className="absolute -top-[7%] left-[10%] opacity-0"
                width={200}
                id="zinc"
              />
              <img
                src={zinc}
                alt="zinc"
                className="absolute -top-[10%] right-[5%] opacity-0"
                width={250}
                id="zinc"
              />
              <img
                src={zinc}
                alt="zinc"
                className="absolute -bottom-[15%] left-[7%] opacity-0"
                width={250}
                id="zinc"
              />
              <img
                src={zinc}
                alt="zinc"
                className="absolute -bottom-[5%] right-[10%] opacity-0"
                width={200}
                id="zinc"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[500vh]"></div>
    </>
  );
};

export default IngredientsSection;
