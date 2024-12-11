import { Canvas } from "@react-three/fiber";
import { Model } from "../../WawaOffice";
import { useEffect, useState } from "react";

const ShoppingSection = () => {
  const [selected, setSelected] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (selected !== null) {
      setIsDisabled(false);
    }
  }, [selected]);

  return (
    <div className="flex max-lg:flex-col justify-between pt-10 mr-10 max-lg:gap-20">
      <div className="w-1/2">
        <div className="border-2 border-orange rounded-full h-[600px] w-[600px] flex justify-center items-center text-8xl font-semibold -ml-10 max-md:-ml-32">
          {/* <p
              className="flex flex-col items-start ml-10 text-[5rem]"
            >
              <span className="1">LET THE</span>
              <span className="">💪BOOST💪 </span>
              <span className="">FLOW THRU</span>
              <span className="flex-auto self-center">YOU</span>
            </p> */}
          <Canvas
            className="w-full z-50 relative rotate-45 -mt-40"
            id="canvas-shop"
          >
            <ambientLight />
            <Model />
          </Canvas>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/2 max-lg:w-full max-lg:mx-8">
        <h1 className="text-6xl max-md:text-4xl font-extrabold">
          IMMUNITY <br /> GUMMY VITAMINS
        </h1>
        <p className="text-lg max-md:text-base">
          BOOST immunity gummy vitamins are loaded with Elderberry, Vitamin C
          and Zinc — the three power ingredients that put your immune system on
          the offense. BOOST has 3g of sugar (half the amount of sugar as the
          leading gummy vitamins) per serving.
        </p>
        <h5 className="text-3xl font-semibold">BECAUSE BEING SICK SUCKS</h5>
        <hr className="-mt-4" />
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
          <div
            onClick={() => setSelected(1)}
            className={`flex flex-col gap-3 p-5 w-full h-[250px] border border-black hover:border-orange hover:bg-orange group rounded-3xl duration-300 ${
              selected === 1 ? "bg-orange border-orange" : ""
            }`}
          >
            <div className="flex justify-between">
              <p className="text-xl">
                SINGLE <br /> PURCHASE
              </p>
              <p className="text-xl">$ 35.00</p>
            </div>
            <hr
              className={`-mx-5 border-black group-hover:border-white ${
                selected === 1 ? "border-white" : ""
              }`}
            />
            <div className="flex flex-col gap-1 text-sm">
              <p>+ ONE BOTTLE</p>
              <p>+ ONE BOTTLE</p>
              <p>+ ONE BOTTLE</p>
              <p className="mt-2">
                + Standard tips include weekly immunity consulting and FIRE
              </p>
            </div>
          </div>

          <div
            onClick={() => setSelected(2)}
            className={`flex flex-col gap-3 p-5 w-full h-[250px] border border-black hover:border-orange hover:bg-orange group rounded-3xl duration-300 ${
              selected === 2 ? "bg-orange border-orange" : ""
            }`}
          >
            <div className="flex justify-between">
              <p className="text-xl">
                SUBSCRIBE <br /> AND SAVE
              </p>
              <p className="text-xl">$ 30.00</p>
            </div>
            <hr
              className={`-mx-5 border-black group-hover:border-white ${
                selected === 2 ? "border-white" : ""
              }`}
            />
            <div className="flex flex-col gap-1 text-sm">
              <p>+ ONE BOTTLE</p>
              <p>+ ONE BOTTLE</p>
              <p>+ ONE BOTTLE</p>
              <p className="mt-2">
                + Standard tips include weekly immunity consulting and FIRE
              </p>
            </div>
          </div>
        </div>

        <button
          disabled={isDisabled}
          className={`w-full flex justify-center py-3 border text-white ${
            !isDisabled ? "bg-orange hover:bg-purple-600 border-orange hover:border-purple-600" : "bg-gray-500 border-gray-500"
          } duration-300 rounded-full`}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ShoppingSection;
