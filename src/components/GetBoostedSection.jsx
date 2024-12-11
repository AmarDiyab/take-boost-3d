import { PiArrowUpRightLight, PiArrowUpRightThin } from "react-icons/pi";

const GetBoostedSection = () => {
  return (
    <div className="py-20 mx-20 max-lg:mx-12">
      <p className="text-[10rem] max-lg:text-6xl leading-[10rem] font-extrabold">
        GET <br />
        <div className="flex gap-3 items-center">
        <span>BOOSTED</span>
        <div className="border border-black h-[120px] w-[120px] rounded-full flex justify-center items-center">
          <PiArrowUpRightThin className="hover:rotate-[360deg] ease-soft-spring duration-300" />
        </div>
        </div>
      </p>
    </div>
  );
};

export default GetBoostedSection;
