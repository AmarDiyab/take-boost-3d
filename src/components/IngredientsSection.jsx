const IngredientsSection = () => {
  return (
    <div className="mt-[10rem] mx-12 ">
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

      <div className="h-[100vh] flex justify-between items-center">
        <div className="flex flex-col gap-3">
            <p>INGREDIENTS</p>
            <h4 className="text-7xl font-bold outline-text">ELDERBERRY</h4>
            <h4 className="text-7xl font-bold">VITAMIN C</h4>
            <h4 className="text-7xl font-bold outline-text">ZINC</h4>
        </div>
        <div className="flex flex-col gap-0 mr-[5rem]">
            <p className="mb-2">BENEFITS</p>
            <h5 className="my-1 text-xl">01. Improves Common Cold Symptoms</h5>
            <hr />
            <h5 className="my-1 text-xl">02. Holds Antioxidant Properties</h5>
            <hr />
            <h5 className="my-1 text-xl">03. Promotes Glowing Skin</h5>
            <hr />
            <h5 className="my-1 text-xl">04. Enhances Brain Function</h5>
            <hr />
            <p className="mt-5 text-xs">BOOST has 100mg of Vitamin C per serving</p>
        </div>
      </div>

      <div className="h-[500vh]">
        pinned section
      </div>
    </div>
  );
};

export default IngredientsSection;
