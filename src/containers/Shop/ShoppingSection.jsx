const ShoppingSection = () => {
    return (
      <div className="flex justify-between pt-10 mr-10">
        <div className="w-1/2">
          <div
            className="border-2 border-orange rounded-full h-[600px] w-[600px] flex justify-center items-center text-8xl font-semibold -ml-10"
          >
            {/* <p
              className="flex flex-col items-start ml-10 text-[5rem]"
            >
              <span className="1">LET THE</span>
              <span className="">💪BOOST💪 </span>
              <span className="">FLOW THRU</span>
              <span className="flex-auto self-center">YOU</span>
            </p> */}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
           <h1 className="text-6xl font-extrabold">IMMUNITY <br /> GUMMY VITAMINS</h1>
           <p className="text-lg">BOOST immunity gummy vitamins are loaded with Elderberry, Vitamin C and Zinc — the three power ingredients that put your immune system on the offense. BOOST has 3g of sugar (half the amount of sugar as the leading gummy vitamins) per serving.</p>
           <h5 className="text-3xl font-semibold">BECAUSE BEING SICK SUCKS</h5>
           <hr className="-mt-4" />
           <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-3 p-5 w-full h-[250px] border border-black rounded-3xl">
                  <div className="flex justify-between">
                      <p className="text-xl">SINGLE <br /> PURCHASE</p>
                      <p className="text-xl">$ 35.00</p>
                  </div>
                      <hr className="-mx-5 border-black" />
                  <div className="flex flex-col gap-1 text-sm">
                      <p>+ ONE BOTTLE</p>
                      <p>+ ONE BOTTLE</p>
                      <p>+ ONE BOTTLE</p>
                      <p className="mt-2">+ Standard tips include weekly immunity consulting and FIRE</p>
                  </div>
              </div>

              <div className="flex flex-col gap-3 p-5 w-full h-[250px] border border-black rounded-3xl">
                  <div className="flex justify-between">
                      <p className="text-xl">SUBSCRIBE <br /> AND SAVE</p>
                      <p className="text-xl">$ 30.00</p>
                  </div>
                      <hr className="-mx-5 border-black" />
                  <div className="flex flex-col gap-1 text-sm">
                      <p>+ ONE BOTTLE</p>
                      <p>+ ONE BOTTLE</p>
                      <p>+ ONE BOTTLE</p>
                      <p className="mt-2">+ Standard tips include weekly immunity consulting and FIRE</p>
                  </div>
              </div>
           </div>
           <button className="w-full flex justify-center py-3 border border-black rounded-full">ADD TO CART</button>
        </div>
      </div>
    );
  };
  
  export default ShoppingSection;
  