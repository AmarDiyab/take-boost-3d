import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="py-40">
      <Marquee direction="left" autoFill speed={50} className="relative">
        <div className="flex gap-2 w-full justify-between pl-2 text-xl font-bold">
          <p>DONT PANIC, TAKE BOOST ;</p>
          <p>AN IMMUNITY VITAMIN ;</p>
          <p>FOMO FOR YOUR HEALTH ;</p>
          <p>TAKE BOOST ;</p>
          <p>VITAMINS ;</p>
        </div>
      </Marquee>
      <Marquee direction="right" autoFill speed={50} className="relative">
        <div className="flex gap-2 w-full justify-between pl-2 text-xl font-bold">
          <p>DONT PANIC, TAKE BOOST ;</p>
          <p>AN IMMUNITY VITAMIN ;</p>
          <p>FOMO FOR YOUR HEALTH ;</p>
          <p>TAKE BOOST ;</p>
          <p>VITAMINS ;</p>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
