import React from "react";

const Card = ({ children, extraClasses, width, height, image }) => {
  const style = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(image ? { backgroundImage: `url(${image})` } : {}),
  };
  return (
    <div
      className={`rounded-lg bg-cover mx-auto mb-10  ${
        !width ? "w-[100%]" : ""
      } ${extraClasses || ""} bg-red-300`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
