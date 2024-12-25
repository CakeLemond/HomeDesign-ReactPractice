import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CircleCom = ({ white, Section1 }) => {
  return (
    <div
      className={`rounded-full cursor-pointer parent ${
        white
          ? "bg-white hover:bg-opacity-30 transition-all duration-1000"
          : "bg-black"
      } ${
        Section1
          ? "md:w-16 md:h-16 w-12 h-12 absolute right-0 bottom-0"
          : "w-12 h-12 absolute right-5 bottom-5"
      } grid place-items-center `}
    >
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute"
      >
        <circle
          cx="27"
          cy="27"
          r="25"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeDasharray="440" /* Circumference = 2 * π * r */
          strokeDashoffset="440" /* Start completely hidden */
          className="circle-animation transition-all duration-1000 "
        />
      </svg>

      <FaArrowRightLong
        className={`${
          white ? "text-black" : "text-white text-2xl"
        } -rotate-45 `}
      />
    </div>
  );
};

export default CircleCom;
