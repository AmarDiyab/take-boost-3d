import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TestimonialSection = () => {
  useGSAP(() => {
    const testimonyTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimony",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        // markers: {
        //   startColor: "purple",
        //   endColor: "purple",
        // }
      },
    });

    testimonyTimeline.fromTo(
      "#testimonial-circle",
      {
        y: 0,
      },
      {
        y: -100,
      },
      "<"
    );

    testimonyTimeline.fromTo(
      "#circle-text2",
      {
        y: 50,
      },
      {
        y: -50,
      },
      "<"
    );
  }, []);

  useGSAP(() => {
    const myTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimony",
        start: "center-=300px bottom",
        end: "bottom bottom",
        scrub: true,
        // markers: {
        //   startColor: "yellow",
        //   endColor: "yellow",
        // }
      },
    });

    myTl.to("#testimonial-card-1", { y: "50px" }, "<");
    myTl.to("#testimonial-card-2", { y: "150px" }, "<");
    myTl.to("#testimonial-card-3", { y: "200px" }, "<");

    myTl.to("#testimonial-card-4", { y: "50px" }, "<");
    myTl.to("#testimonial-card-5", { y: "100px" }, "<");

    myTl.to(document.body, {
      background: "linear-gradient(to left, #fe710b, #ffb804)",
      color: "white",
      borderColor: "white",
      duration: 0,
    });
    myTl.to(
      [
        "#testimonial-card-1",
        "#testimonial-card-2",
        "#testimonial-card-3",
        "#testimonial-card-4",
        "#testimonial-card-5",
      ],
      { borderColor: "white", duration: 0 },
      "<"
    );
  }, []);

  return (
    <div className="flex justify-between mt-40 pb-72 mb-20" id="testimony">
      <div className="w-1/2">
        <div
          className="border-2 border-orange rounded-full h-[600px] w-[600px] flex justify-center items-center text-8xl font-semibold -ml-10"
          id="testimonial-circle"
        >
          <p
            className="flex flex-col items-start ml-10 text-[5rem]"
            id="circle-text2"
          >
            <span className="1">LET THE</span>
            <span className="">💪BOOST💪 </span>
            <span className="">FLOW THRU</span>
            <span className="flex-auto self-center">YOU</span>
          </p>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <div
            className="p-5 border-orange border-2 rounded-lg w-[300px] h-[200px] relative -rotate-[8deg]"
            id="testimonial-card-4"
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
            className="p-5 border-orange border-2 rounded-lg w-[300px] h-[200px] relative rotate-6"
            id="testimonial-card-5"
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

      <div className="w-[10%]"></div>

      <div className="w-[40%] flex flex-col gap-16" id="testimonial-right">
        <div className="flex flex-col">
          <p className="text-3xl">
            WORD ON <br /> THE STREET
          </p>
          <p>Trust us with your immunity.</p>
        </div>

        <div className="flex flex-col gap-10">
          <div
            className="p-5 border-orange border-2 rounded-lg w-[300px] h-[200px] relative -rotate-[8deg]"
            id="testimonial-card-1"
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
            className="p-5 border-orange border-2 rounded-lg w-[300px] h-[200px] relative rotate-2"
            id="testimonial-card-2"
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
            className="p-5 border-orange border-2 rounded-lg w-[300px] h-[200px] relative -rotate-6"
            id="testimonial-card-3"
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
    </div>
  );
};

export default TestimonialSection;
