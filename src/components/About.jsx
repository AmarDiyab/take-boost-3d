import arrow from "../assets/logo.svg";

const About = () => {
  return (
    <div className="h-screen">
      {/* <img src={arrow} alt="arrow" /> */}
      <div className="border border-white rounded-full h-[80vh] w-[80vh] flex justify-center items-center text-8xl font-semibold -ml-10" id="#about">
        <p className="flex flex-col items-end ml-10">
          <span className="1">STAY</span>
          <span className="flex-auto self-start">SICK 🤙 </span>
          <span className="3">🤧 NOT</span>
          <span className="flex-auto self-start">SICK</span>
        </p>
      </div>
    </div>
  );
};

export default About;
