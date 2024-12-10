import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from 'prop-types'

gsap.registerPlugin(ScrollTrigger, useGSAP);
const StaySickText = ({setFAQ}) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#faq",
        start: "top+=200 bottom",
        end: "top+=200 bottom",
        scrub: true,
        onEnter: () => {
          setFAQ(true)
        },
        onLeaveBack: () => {
          setFAQ(false)
        },
        // markers: {
        //   startColor: "purple",
        //   endColor: "purple",
        // }
      },
    });

    tl.to(document.body, {
      color: "black",
      background: "white",
    });
  });
  return (
    <div
      className="flex w-full justify-center items-center mt-20"
      id="sick-text"
    >
      <h4 className="about-parallax text-8xl font-bold uppercase">
        Stay sick 🤙 <br /> 🤧 not sick
      </h4>
    </div>
  );
};

StaySickText.propTypes = {
  setFAQ: PropTypes.func,
};

export default StaySickText;
