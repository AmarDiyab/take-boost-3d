import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import blueMolecule from "../../assets/blue-molecule.png";
import orange from "../../assets/orange.png";
import zinc from "../../assets/zinc.png";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP);

const IngredientsSection = () => {

  useGSAP(() => {
    const ingredientSectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#ingredient-section",
        start: "top top",
        end: "bottom+=5000 top",
        scrub: true,
        pin: "#ingredient-section"
      },
    });

    // BLUE MOLECULE ANIMATION
    ingredientSectionTimeline.to(".blue-molecule", {
      opacity: 1,
      scale: 1.5,
      rotation: 45,
      stagger: 0.5,
    });
    ingredientSectionTimeline.to(".blue-molecule", {
      opacity: 0,
      scale: 2,
      rotation: 90,
      stagger: 0.5,
    });
    // BG TRANSITION 1
    ingredientSectionTimeline.to(document.body, {
      background: "rgb(111, 0, 255)",
      duration: 0,
    });
    // OUTLINE TRANSITION 1
    ingredientSectionTimeline.to(
      ".main-text-1",
      {
        className: "text-7xl font-bold main-text-1 outline-text",
      },
      "<"
    );
    ingredientSectionTimeline.to(
      ".main-text-2",
      {
        className: "text-7xl font-bold main-text-2",
      },
      "<"
    );
    // TEXT TRANSITION 1
    ingredientSectionTimeline.to(
      ".benefit-text-1",
      {
        text: "Supports Immune System Function",
        overwrite: "auto",
      },
      "<"
    );
    ingredientSectionTimeline.to(
      ".benefit-text-2",
      {
        text: "Rich in Antioxidants",
        overwrite: "auto",
      },
      "<"
    );
    ingredientSectionTimeline.to(
      ".benefit-text-3",
      {
        text: "Natural Anti-inflammatory",
        overwrite: "auto",
      },
      "<"
    );
    ingredientSectionTimeline.to(
      ".benefit-text-4",
      {
        text: "Helps Fight Common Cold",
        overwrite: "auto",
      },
      "<"
    );
    ingredientSectionTimeline.to(".benefit-text-5", {
      text: "100mg of Vitamin C per serving",
      overwrite: "auto",
    }),

    // ORANGE ANIMATION
      ingredientSectionTimeline.to(".orange-slice", {
        opacity: 1,
        scale: 1.5,
        rotation: 45,
        stagger: 0.5,
      });
    ingredientSectionTimeline.to(".orange-slice", {
      opacity: 0,
      scale: 2,
      rotation: 90,
      stagger: 0.5,
    });
    // BG TRANSITION 2
    ingredientSectionTimeline.to(document.body, {
      background: "#acb3ff",
      color: "black",
      duration: 0,
    });
    // ingredientSectionTimeline.to([".main-text-1", ".main-text-2", ".main-text-3", ".outline-text"], {
    //   color: "black",
    //   duration: 0.5,
    // });
    // OUTLINE TRANSITION 1
    ingredientSectionTimeline.to(
      ".main-text-2",
      {
        className: "text-7xl font-bold main-text-1 outline-text",
      },
      "<"
    );
    ingredientSectionTimeline.to(
      ".main-text-3",
      {
        className: "text-7xl font-bold main-text-3",
      },
      "<"
    );
    // TEXT TRANSITION 2
    ingredientSectionTimeline.to(
      ".benefit-text-1",
      {
        text: "Helps Balance Hormones",
        overwrite: "auto",
      },
      "<"
    );
    ingredientSectionTimeline.to(
      ".benefit-text-2",
      {
        text: "Maintain Heart Health",
        overwrite: "auto",
      },
      "<"
    );
    ingredientSectionTimeline.to(
      ".benefit-text-3",
      {
        text: "Aids in Digestion",
        overwrite: "auto",
      },
      "<"
    );
    ingredientSectionTimeline.to(
      ".benefit-text-4",
      {
        text: "Act as a Powerful Anti-Oxidant",
        overwrite: "auto",
      },
      "<"
    );
    ingredientSectionTimeline.to(".benefit-text-5", {
      text: "10mg of Zinc per serving",
      overwrite: "auto",
    }),

    ingredientSectionTimeline.to(".zinc-piece", {
      opacity: 1,
      scale: 1.5,
      rotation: 45,
      stagger: 0.5,
    });
    ingredientSectionTimeline.to(".zinc-piece", {
      opacity: 0,
      scale: 2,
      rotation: 90,
      stagger: 0.5,
    });
    ingredientSectionTimeline.to(document.body, {
      background: "#fffcf4",
      duration: 0,
    });
  }, []);

  return (
      <div className="mt-[10rem] mx-12 " id="last">
        <p className="flex flex-col items-start ml-10 text-[11vw] font-bold leading-[1]">
          <span className="">INGREDIENTS</span>
          <span className="flex-auto self-end">
            <p className="text-[11vw] leading-[1] font-bold flex items-center ">
              <span className="text-xl flex flex-col font-normal">
                <span>AND YOU,</span> <span>OF COURSE.</span>
              </span>
              YOUR MOM
            </p>
          </span>
          <span className="">WILL LOVE</span>
        </p>

        <div id="pin-container">
          <div id="ingredient-section">
            <div className="h-screen flex justify-between items-center relative">
              <div className="flex flex-col gap-3">
                <p>INGREDIENTS</p>
                <h4 className="text-7xl font-bold main-text-1">ELDERBERRY</h4>
                <h4 className="text-7xl font-bold outline-text main-text-2">VITAMIN C</h4>
                <h4 className="text-7xl font-bold outline-text main-text-3">ZINC</h4>
              </div>
              <div className="flex flex-col gap-0 mr-[5rem]">
                <p className="mb-2">BENEFITS</p>
                <h5 className="my-1 text-xl benefit-text-1">
                  01. Improves Common Cold Symptoms
                </h5>
                <hr />
                <h5 className="my-1 text-xl benefit-text-2">
                  02. Holds Antioxidant Properties
                </h5>
                <hr />
                <h5 className="my-1 text-xl benefit-text-3">
                  03. Promotes Glowing Skin
                </h5>
                <hr />
                <h5 className="my-1 text-xl benefit-text-4">
                  04. Enhances Brain Function
                </h5>
                <hr />
                <p className="mt-5 text-xs benefit-text-5">
                  BOOST has 100mg of Vitamin C per serving
                </p>
              </div>
              <img
                src={blueMolecule}
                alt="blue-molecule"
                className="blue-molecule absolute -top-[7%] left-[10%] opacity-0"
                width={250}
              />
              <img
                src={blueMolecule}
                alt="blue-molecule"
                className="blue-molecule absolute -top-[10%] right-[5%] opacity-0"
                width={350}
              />
              <img
                src={blueMolecule}
                alt="blue-molecule"
                className="blue-molecule absolute -bottom-[15%] left-[7%] opacity-0"
                width={350}
              />
              <img
                src={blueMolecule}
                alt="blue-molecule"
                className="blue-molecule absolute -bottom-[5%] right-[10%] opacity-0"
                width={250}
              />

              <img
                src={orange}
                alt="orange"
                className="orange-slice absolute -top-[7%] left-[10%] opacity-0"
                width={200}
              />
              <img
                src={orange}
                alt="orange"
                className="orange-slice absolute -top-[10%] right-[5%] opacity-0"
                width={250}
              />
              <img
                src={orange}
                alt="orange"
                className="orange-slice absolute -bottom-[15%] left-[7%] opacity-0"
                width={250}
              />
              <img
                src={orange}
                alt="orange"
                className="orange-slice absolute -bottom-[5%] right-[10%] opacity-0"
                width={200}
              />

              <img
                src={zinc}
                alt="zinc"
                className="zinc-piece absolute -top-[7%] left-[10%] opacity-0"
                width={200}
              />
              <img
                src={zinc}
                alt="zinc"
                className="zinc-piece absolute -top-[10%] right-[5%] opacity-0"
                width={250}
              />
              <img
                src={zinc}
                alt="zinc"
                className="zinc-piece absolute -bottom-[15%] left-[7%] opacity-0"
                width={250}
              />
              <img
                src={zinc}
                alt="zinc"
                className="zinc-piece absolute -bottom-[5%] right-[10%] opacity-0"
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default IngredientsSection;
