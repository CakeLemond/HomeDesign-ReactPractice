import React, { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Number = ({ top, description, number }) => {
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onViewportEnter={() => setCounterOn(true)} // Trigger animation on enter
            onViewportLeave={() => setCounterOn(false)} // Reset state on leave
          >
            {counterOn && <CountUp start={0} end={number} duration={4} />}
          </motion.div>
        </span>
        {top ? <FirstSign>1</FirstSign> : <PlusSign />} <br />
      </div>
      <p className="md:text-lg font-light text-sm">{description}</p>
    </div>
  );
};

export default Number;
