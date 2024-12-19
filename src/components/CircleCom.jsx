import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CircleCom = ({ white, Section1 }) => {
  return (
    <div
      className={`rounded-full  ${white ? "bg-white" : "bg-black"} ${
        Section1 ? "md:w-16 md:h-16 w-12 h-12 " : ""
      } grid place-items-center absolute right-0 bottom-0`}
    >
      <FaArrowRightLong
        className={`${
          white ? "text-black" : "text-white text-3xl"
        } -rotate-45 `}
      />
    </div>
  );
};

export default CircleCom;
