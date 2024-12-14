import { PiArrowUpRightThin } from "react-icons/pi";
import { Link, useLocation } from "react-router";

const GetBoostedSection = () => {
  const location = useLocation();

  return (
    <div className="py-20 mx-20 max-lg:mx-12">
      <p className="text-[10rem] max-lg:text-6xl leading-[10rem] font-extrabold">
        GET <br />
        <div className="flex gap-3 items-center">
          <span>BOOSTED</span>
          <Link to="/shop">
            <div
              className={`border-2  h-[120px] w-[120px] rounded-full flex justify-center items-center ${
                location.pathname === "/about" ? "border-black" : "border-white"
              }`}
            >
              <PiArrowUpRightThin className="hover:rotate-[360deg] ease-soft-spring duration-300" />
            </div>
          </Link>
        </div>
      </p>
    </div>
  );
};

export default GetBoostedSection;
