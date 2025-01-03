import React, { useState } from "react";
import footer from "../assets/RezisedImg/Footer.jpg";
import Accordion from "./Accordion";

const Footer = () => {
  const items = [
    {
      title: "About Us",
      description: [
        "Our story",
        "Store Location ",
        "Sustainability",
        "Careers",
        "Contact",
      ],
    },
    {
      title: "Help",
      description: [
        "Prices and Payment",
        "Shipping",
        "Return Policy",
        "Terms of Service",
        "Privacy Policy",
      ],
    },
    {
      title: "Socials ",
      description: [
        "Instagram",
        "Facebook",
        "Linkedin",
        "Pinterest",
        "Twitter",
      ],
    },
  ];
  return (
    <footer className="p-6 bg-black w-full  text-white ">
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
        <div className="w-full lg:w-1/2 lg:h-[350px] h-[250px]">
          <img
            src={footer}
            className="w-full h-full lg:h-[100%] object-cover rounded-lg "
            alt=""
          />
        </div>
      </div>

      <div className="flex mt-14 gap-5 flex-col w-full  lg:items-center lg:flex-row  lg:mt-32">
        <div className="  w-full flex flex-col gap-6 lg:hidden ">
          <Accordion />
        </div>
        <div className="hidden lg:grid grid-cols-3 px-5 w-[60%] items-center  gap-x-6  ">
          {items.map((item, index) => (
            <div className="" key={index}>
              <h1 className="text-2xl font-bold mb-6 text-wrap ">
                {item.title}
              </h1>
              <ul className="flex flex-col gap-6">
                {item.description.map((stuff, index) => (
                  <li className="" key={index}>
                    <a
                      className=" transition-all duration-300 text-lg font-light text-gray-400 hover:text-white"
                      href={`/${stuff.toLowerCase()}`}
                    >
                      {stuff}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h1 className="lg:text-9xl text-6xl font-bold lg:w-[40%] text-center">
          Alenia
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
