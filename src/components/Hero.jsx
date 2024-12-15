import React from "react";
import Image from "..//assets/images/Hero.jpg";
import SmallImage from "..//assets/images/Small.jpg";
import { IoTriangle } from "react-icons/io5";
import Button from "./Button";
import Wrapper from "./wrapper";
const Hero = () => {
  return (
    <div
      className="w-full h-[750px] sm:min-h-[500px] bg-cover bg-center rounded-xl flex flex-col justify-end py-3 pl-3  "
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className=" grid grid-cols-1 md:grid-cols-2  w-[85%]  gap-5">
        <Wrapper width="" height={250} className="flex-1">
          <p className=" h-[50px] text-xl">
            Elevate your interiors with a seamless blend of modern aesthetics
            and functional design.
          </p>
        </Wrapper>
        <Wrapper
          className="flex-1 md:w-[350px] "
          isImageContain={true}
          width=""
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
