import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Number = ({ children, top, description, number }) => {
  const PlusSign = () => <span className="text-2xl font-semibold">+</span>;
  const [counterOn, setCounterOn] = useState(false);
  const FirstSign = ({ children }) => (
    <p className="text-4xl ">
      {children}
      <sup>st</sup>
    </p>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center">
        <span className="ml-2 text-4xl ">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            {counterOn && <CountUp start={0} end={number} duration={4} />}
          </ScrollTrigger>
        </span>
        {top ? <FirstSign>1</FirstSign> : <PlusSign />} <br />
      </div>
      <p className="md:text-lg font-light text-sm">{description}</p>
    </div>
  );
};

export default Number;
