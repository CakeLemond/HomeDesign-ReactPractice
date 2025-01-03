import React from "react";
import Image from "..//assets/RezisedImg/Hero.jpg";
import SmallImage from "..//assets/RezisedImg/Small.jpg";
import { IoTriangle } from "react-icons/io5";
import Button from "./Button";
import Wrapper from "./wrapper";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div
      className="h-[750px] sm:min-h-[500px] bg-cover bg-center rounded-xl flex flex-col justify-end py-3 pl-3 w-[95%] mx-auto"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="grid place-items-center  w-full h-full">
        <h1 className=" md:text-[75px] text-[40px] overflow-hidden text-white font-bold lg:text-[125px] ">
          Contemporary
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2  w-[85%] gap-x-6 gap-6">
        <Wrapper width="" height={250}>
          <p className=" h-auto text-xl xs:text-2xl">
            Elevate your interiors with a seamless blend of modern aesthetics
            and functional design.
          </p>
          <Button white bg width="150px">
            <p>View More</p>
            <FaArrowRightLong />
          </Button>
        </Wrapper>
        <Wrapper
          className="flex-1 md:w-[350px] "
          isImageContain={true}
          height={250}
        >
          <div className="w-full h-full ">
            <img
              className=" w-full h-full object-cover rounded-md "
              src={SmallImage}
              alt=""
            />
            <span className="w-[47px] h-[47px] bg-black bg-opacity-50 rounded-full absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
              <IoTriangle size={24} className=" rotate-90 ml-1  " />
            </span>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Hero;
