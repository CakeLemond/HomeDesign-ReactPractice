import React from "react";
import Image from "..//assets/RezisedImg/Section3.jpg";
import Button from "./Button";

import { FaArrowRightLong } from "react-icons/fa6";

const Section2 = () => {
  return (
    <div className=" w-full  bg-LightBeige p-10">
      <div className="h-full w-full lg:flex mb-10 ">
        <div className="w-full h-[350px] lg:h-[500px] lg:w-[60%]">
          <img
            src={Image}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className="w-full h-full flex flex-col gap-16 lg:gap-10  mt-6 items-center lg:w-[40%]">
          <p>Elegance &#x2022; Simplicity </p>
          <h2 className="text-5xl font-bold text-center lg:w-[85%]">
            Elegance in Simplicity
          </h2>
          <p className=" text-center lg:text-left w-[85%]">
            Embrace the beauty of simplicity with designs that focus on clean
            lines, neutral tones, and functional elegance. Every element is
            carefully curated to create spaces that are both calming and
            inspiring, where less truly becomes more.
          </p>
          <Button bgNone center width={150}>
            <p className="text-white text-xl">About Us</p>
          </Button>
        </div>
      </div>

      <h2 className="text-6xl font-bold text-center  lg:text-left lg:max-w-[500px]">
        Explore Our Prodly Collection
      </h2>
      <div className="w-full flex flex-col items-center justify-center mt-24 gap-24 lg:justify-end lg:items-end lg:gap-5 lg:mt-6">
        <Button width={175}>
          <p className="text-xl ">View More</p>
          <FaArrowRightLong className="  translate-y-[3.5px]" />
        </Button>
        <div className="lg:w-full lg:h-full lg:flex lg:justify-end">
          <p className="text-center w-full lg:text-right lg:w-[500px] ">
            Discover how minimalist interiors can transform your space. Click
            above to view more of our carefully crafted projects that blend
            modern elegance with timeless simplicity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
