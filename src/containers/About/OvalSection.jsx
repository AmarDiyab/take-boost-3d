import PropTypes from "prop-types";

const OvalSection = ({ FAQ }) => {
  return (
    <div className="my-40 pb-40 pt-40 max-lg:pb-0 max-lg:my-0">
      <div className="about-parallax">
        <div className="flex max-lg:flex-col justify-center items-center py-10 px-40 max-lg:px-12 -ml-[5vw] relative">
          <svg
            className="w-[110vw] -mr-[5vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:hidden"
            viewBox="0 0 1579 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1577.95 340c0 46.692-21.96 91.236-61.79 131.818-39.84 40.586-97.52 77.17-168.85 107.91-142.67 61.478-339.82 99.522-557.615 99.522-217.799 0-414.943-38.044-557.61-99.522-71.335-30.74-129.015-67.324-168.85-107.91C23.4 431.236 1.444 386.692 1.444 340c0-46.692 21.956-91.236 61.79-131.818 39.835-40.586 97.515-77.17 168.85-107.91C374.752 38.794 571.896.75 789.695.75c217.795 0 414.945 38.044 557.615 99.522 71.33 30.74 129.01 67.324 168.85 107.91 39.83 40.582 61.79 85.126 61.79 131.818z"
              stroke={FAQ ? "orange" : "white"}
              strokeWidth="1.5"
            ></path>
          </svg>
          <div>
            <div className="w-3/4 max-lg:w-3/4">
              <h3 className="text-7xl max-lg:text-2xl font-extrabold uppercase">
                We make products to help you feel good while still tasting 👅
                good.
              </h3>
            </div>
            <div className="w-1/4 max-lg:w-3/4 max-lg:text-xs">
              <p>
                We hope to BOOST your mood in the process. BOOST is not just
                another brand, it&apos;s a movement. Your immune system will
                thank you later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OvalSection.propTypes = {
  FAQ: PropTypes.bool,
};

export default OvalSection;
