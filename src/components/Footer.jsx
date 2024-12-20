import React, { useState } from "react";
import footer from "../assets/images/Footer.jpg";
import Accordion from "./Accordion";
const AboutInfo = [
  "Our story",
  "Store Location ",
  "Sustainability",
  "Careers",
  "Contact",
];
const CustomerInfo = [
  "Prices and Payment",
  "Shipping",
  "Return Policy",
  "Terms of Service",
  "Privacy Policy",
];
const SocialInfo = [
  "Instagram",
  "Facebook",
  "Linkedin",
  "Pinterest",
  "Twitter",
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the same accordion or close it
  };
  return (
    <div className="p-6 bg-black w-full  md:mt-[700px] lg:mt-[25px]  text-white lg:flex lg:flex-row lg:gap-14">
      <div className="flex flex-col text-center gap-10 lg:gap-16 items-center w-full lg:h-full mb-12 lg:w-1/2">
        <h2 className="text-3xl lg:text-6xl lg:text-left">
          Engage with Us in Conversations
        </h2>
        <p className=" w-[85%] lg:text-2xl lg:leading-snug lg:text-left lg:w-full font-light  ">
          We believe great design begins with a conversation. Share your ideas,
          ask questions, and collaborate with us to create a space that truly
          reflects your style and needs. Let's work together to bring your
          vision to life, one thoughtful design at a time.
        </p>
      </div>
      <img
        src={footer}
        className="w-full h-[175px] lg:h-[65%] object-cover rounded-lg lg:w-1/2"
        alt=""
      />
      <div className="mt-10 w-[95%] mx-auto flex flex-col gap-6">
        <Accordion
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
          array={AboutInfo}
        >
          About
        </Accordion>
        <Accordion
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
          array={CustomerInfo}
        >
          Customer Service
        </Accordion>
        <Accordion
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
          array={SocialInfo}
        >
          Socials
        </Accordion>
      </div>
    </div>
  );
};

export default Footer;
