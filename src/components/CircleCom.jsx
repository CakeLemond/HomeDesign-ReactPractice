import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CircleCom = ({ white, Section1 }) => {
  return (
    <div
      className={`rounded-full  ${white ? "bg-white" : "bg-black"} ${
        Section1
          ? "md:w-16 md:h-16 w-12 h-12 absolute right-0 bottom-0"
          : "w-12 h-12 absolute right-5 bottom-5"
      } grid place-items-center `}
    >
      <FaArrowRightLong
        className={`${
          white ? "text-black" : "text-white text-2xl"
        } -rotate-45 `}
      />
    </div>
  );
};

export default CircleCom;
