import React from "react";

const Number = ({ children, top, description }) => {
  const PlusSign = () => <span className="text-2xl font-semibold">+</span>;

  const FirstSign = ({ children }) => (
    <p className="text-4xl ">
      {children}
      <sup clas>st</sup>
    </p>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center">
        <span className="ml-2 text-4xl ">{children}</span>
        {top ? <FirstSign>1</FirstSign> : <PlusSign />} <br />
      </div>
      <p className="md:text-lg font-light text-sm">{description}</p>
    </div>
  );
};

export default Number;
