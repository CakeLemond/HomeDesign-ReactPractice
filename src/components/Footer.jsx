import React, { useState } from "react";
import footer from "../assets/images/Footer.jpg";
import Accordion from "./Accordion";

const Footer = () => {
  return (
    <footer className="p-6 bg-black w-full lg:h-[125vh]  md:mt-[700px] lg:mt-[25px]  text-white">
      <div className=" lg:flex lg:flex-row h-1/2 lg:gap-14">
        <div className="flex flex-col text-center gap-10 lg:gap-16 items-center w-full lg:h-full mb-12 lg:w-1/2">
          <h2 className="text-3xl lg:text-6xl lg:text-left">
            Engage with Us in Conversations
          </h2>
          <p className=" w-[85%] lg:text-2xl lg:leading-snug lg:text-left lg:w-full font-light  ">
            We believe great design begins with a conversation. Share your
            ideas, ask questions, and collaborate with us to create a space that
            truly reflects your style and needs. Let's work together to bring
            your vision to life, one thoughtful design at a time.
          </p>
        </div>
        <img
          src={footer}
          className="w-full h-[175px] lg:h-[100%] object-cover rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className=" mt-10 mx-auto flex flex-col gap-6">
        <Accordion />
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
