import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const TestimonialSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#shop-testimonial",
        start: "center bottom",
        end: "bottom center",
        scrub: true,
        // markers: {
        //   startColor: "purple",
        //   endColor: "purple",
        // }
      },
    });

    tl.to(
      "#shop-testimonial-card-1",
      {
        x: -100,
      },
      "<"
    );
    tl.to("#shop-testimonial-card-2", { x: -50 }, "<");
    tl.to("#shop-testimonial-card-3", { x: -25 }, "<");
  });
  return (
    <div className="flex gap-10 mt-40 items-end" id="shop-testimonial">
      <div className="border-2 border-white rounded-full w-[400px] h-[400px] flex justify-center items-center text-8xl font-semibold -ml-10">
        <p className="flex flex-col items-start ml-10 text-[3rem]">
          <span className="1">WORD ON</span>
          <span className="">THE STREET</span>
          <span className="mt-2 text-lg font-normal">
            Trust us with your Immunity
          </span>
        </p>
      </div>

      <div className="flex gap-10">
        <div
          className="p-5 border-orange bg-white text-black border-2 rounded-lg w-[300px] h-[200px]
        relative rotate-6"
          id="shop-testimonial-card-1"
        >
          <p className="text-lg">It&apos;s like a refreshing cold shower</p>
          <div className="border-t-2 border-orange flex absolute w-full bottom-0 left-0">
            <div className="flex gap-1.5 p-3">
              <svg width="33" height="32" fill="none">
                <g clipPath="url(#profile_svg__clip0)">
                  <rect
                    x="1.303"
                    y="0.611"
                    width="30.555"
                    height="30.555"
                    rx="15.277"
                    fill="#000"
                  ></rect>
                  <path
                    d="M10.63 5.435a4.18 4.18 0 00-1.375 8.126c1.36-3.47 3.666-5.249 4.921-6.145a4.17 4.17 0 00-3.546-1.98z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                  <path
                    d="M16.363 20.853c1.243 0 5.733-.819 7.036-2.5a4.76 4.76 0 00.677-2.461c0-.854-.224-1.647-.602-2.33-2.035-3.728-3.097-4.677-4.922-6.145a4.497 4.497 0 00-2.166-.555h-.045c-.787 0-1.524.202-2.167.555-1.255.898-3.56 2.676-4.921 6.146a4.736 4.736 0 00-.603 2.329c0 .907.252 1.751.678 2.46 2.634 2.615 5.792 2.5 7.035 2.5z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                  <path
                    d="M26.274 9.617a4.172 4.172 0 00-7.723-2.202c1.827 1.468 2.887 2.417 4.922 6.146a4.174 4.174 0 002.8-3.944zm-.198 17.017c-2.742-1.526-5.464-3.665-5.993-6.475-1.514.46-3.065.685-3.718.685-.835 0-2.536.051-4.36-.709-.839 2.957-2.737 4.553-5.353 6.497a4.531 4.531 0 00-1.868 3.667 4.528 4.528 0 004.526 4.534c4.047 0 4.214-3.262 7.053-3.262 2.839 0 3.006 3.262 7.053 3.262a4.53 4.53 0 004.526-4.534 4.506 4.506 0 00-1.866-3.665z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                  <path
                    d="M12.003 20.14a8.252 8.252 0 01-2.675-1.791 3.672 3.672 0 00-.326-.018 4.486 4.486 0 00-4.481 4.49c0 1.614.852 3.027 2.131 3.816 2.617-1.944 4.513-3.54 5.351-6.497zm16.202 2.677a4.489 4.489 0 00-4.482-4.49c-.11 0-.22.009-.325.017-.618.798-1.952 1.4-3.317 1.815.53 2.81 3.25 4.949 5.993 6.475a4.476 4.476 0 002.131-3.817z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                </g>
                <rect
                  x="1.303"
                  y="0.611"
                  width="30.555"
                  height="30.555"
                  rx="15.277"
                  stroke="#000"
                  strokeWidth="0.804"
                ></rect>
                <defs>
                  <clipPath id="profile_svg__clip0">
                    <rect
                      x="1.303"
                      y="0.611"
                      width="30.555"
                      height="30.555"
                      rx="15.277"
                      fill="#fff"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p>@JesseClemente</p>
            </div>
          </div>
        </div>

        <div
          className="p-5 border-orange bg-white text-black border-2 rounded-lg w-[300px] h-[200px]
        relative -rotate-3"
          id="shop-testimonial-card-2"
        >
          <p className="text-lg">It&apos;s like a refreshing cold shower</p>
          <div className="border-t-2 border-orange flex absolute w-full bottom-0 left-0">
            <div className="flex gap-1.5 p-3">
              <svg width="33" height="32" fill="none">
                <g clipPath="url(#profile_svg__clip0)">
                  <rect
                    x="1.303"
                    y="0.611"
                    width="30.555"
                    height="30.555"
                    rx="15.277"
                    fill="#000"
                  ></rect>
                  <path
                    d="M10.63 5.435a4.18 4.18 0 00-1.375 8.126c1.36-3.47 3.666-5.249 4.921-6.145a4.17 4.17 0 00-3.546-1.98z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                  <path
                    d="M16.363 20.853c1.243 0 5.733-.819 7.036-2.5a4.76 4.76 0 00.677-2.461c0-.854-.224-1.647-.602-2.33-2.035-3.728-3.097-4.677-4.922-6.145a4.497 4.497 0 00-2.166-.555h-.045c-.787 0-1.524.202-2.167.555-1.255.898-3.56 2.676-4.921 6.146a4.736 4.736 0 00-.603 2.329c0 .907.252 1.751.678 2.46 2.634 2.615 5.792 2.5 7.035 2.5z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                  <path
                    d="M26.274 9.617a4.172 4.172 0 00-7.723-2.202c1.827 1.468 2.887 2.417 4.922 6.146a4.174 4.174 0 002.8-3.944zm-.198 17.017c-2.742-1.526-5.464-3.665-5.993-6.475-1.514.46-3.065.685-3.718.685-.835 0-2.536.051-4.36-.709-.839 2.957-2.737 4.553-5.353 6.497a4.531 4.531 0 00-1.868 3.667 4.528 4.528 0 004.526 4.534c4.047 0 4.214-3.262 7.053-3.262 2.839 0 3.006 3.262 7.053 3.262a4.53 4.53 0 004.526-4.534 4.506 4.506 0 00-1.866-3.665z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                  <path
                    d="M12.003 20.14a8.252 8.252 0 01-2.675-1.791 3.672 3.672 0 00-.326-.018 4.486 4.486 0 00-4.481 4.49c0 1.614.852 3.027 2.131 3.816 2.617-1.944 4.513-3.54 5.351-6.497zm16.202 2.677a4.489 4.489 0 00-4.482-4.49c-.11 0-.22.009-.325.017-.618.798-1.952 1.4-3.317 1.815.53 2.81 3.25 4.949 5.993 6.475a4.476 4.476 0 002.131-3.817z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                </g>
                <rect
                  x="1.303"
                  y="0.611"
                  width="30.555"
                  height="30.555"
                  rx="15.277"
                  stroke="#000"
                  strokeWidth="0.804"
                ></rect>
                <defs>
                  <clipPath id="profile_svg__clip0">
                    <rect
                      x="1.303"
                      y="0.611"
                      width="30.555"
                      height="30.555"
                      rx="15.277"
                      fill="#fff"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p>@JesseClemente</p>
            </div>
          </div>
        </div>

        <div
          className="p-5 border-orange bg-white text-black border-2 rounded-lg w-[300px] h-[200px]
        relative rotate-6"
          id="shop-testimonial-card-3"
        >
          <p className="text-lg">It&apos;s like a refreshing cold shower</p>
          <div className="border-t-2 border-orange flex absolute w-full bottom-0 left-0">
            <div className="flex gap-1.5 p-3">
              <svg width="33" height="32" fill="none">
                <g clipPath="url(#profile_svg__clip0)">
                  <rect
                    x="1.303"
                    y="0.611"
                    width="30.555"
                    height="30.555"
                    rx="15.277"
                    fill="#000"
                  ></rect>
                  <path
                    d="M10.63 5.435a4.18 4.18 0 00-1.375 8.126c1.36-3.47 3.666-5.249 4.921-6.145a4.17 4.17 0 00-3.546-1.98z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                  <path
                    d="M16.363 20.853c1.243 0 5.733-.819 7.036-2.5a4.76 4.76 0 00.677-2.461c0-.854-.224-1.647-.602-2.33-2.035-3.728-3.097-4.677-4.922-6.145a4.497 4.497 0 00-2.166-.555h-.045c-.787 0-1.524.202-2.167.555-1.255.898-3.56 2.676-4.921 6.146a4.736 4.736 0 00-.603 2.329c0 .907.252 1.751.678 2.46 2.634 2.615 5.792 2.5 7.035 2.5z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                  <path
                    d="M26.274 9.617a4.172 4.172 0 00-7.723-2.202c1.827 1.468 2.887 2.417 4.922 6.146a4.174 4.174 0 002.8-3.944zm-.198 17.017c-2.742-1.526-5.464-3.665-5.993-6.475-1.514.46-3.065.685-3.718.685-.835 0-2.536.051-4.36-.709-.839 2.957-2.737 4.553-5.353 6.497a4.531 4.531 0 00-1.868 3.667 4.528 4.528 0 004.526 4.534c4.047 0 4.214-3.262 7.053-3.262 2.839 0 3.006 3.262 7.053 3.262a4.53 4.53 0 004.526-4.534 4.506 4.506 0 00-1.866-3.665z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                  <path
                    d="M12.003 20.14a8.252 8.252 0 01-2.675-1.791 3.672 3.672 0 00-.326-.018 4.486 4.486 0 00-4.481 4.49c0 1.614.852 3.027 2.131 3.816 2.617-1.944 4.513-3.54 5.351-6.497zm16.202 2.677a4.489 4.489 0 00-4.482-4.49c-.11 0-.22.009-.325.017-.618.798-1.952 1.4-3.317 1.815.53 2.81 3.25 4.949 5.993 6.475a4.476 4.476 0 002.131-3.817z"
                    fill="#fff"
                    stroke="#000"
                    strokeWidth="0.804"
                  ></path>
                </g>
                <rect
                  x="1.303"
                  y="0.611"
                  width="30.555"
                  height="30.555"
                  rx="15.277"
                  stroke="#000"
                  strokeWidth="0.804"
                ></rect>
                <defs>
                  <clipPath id="profile_svg__clip0">
                    <rect
                      x="1.303"
                      y="0.611"
                      width="30.555"
                      height="30.555"
                      rx="15.277"
                      fill="#fff"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p>@JesseClemente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
