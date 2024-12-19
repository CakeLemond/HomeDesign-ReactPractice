import React from "react";

const Card = ({ children, extraClasses, width, height, image }) => {
  const style = {
    ...(image ? { backgroundImage: `url(${image})` } : {}),
  };
  const widthClass = width ? `w-[${width}]` : "w-full";
  const heightClass = height ? `h-[${height}]` : "h-full";
  return (
    <div
      className={`rounded-lg bg-cover mx-auto   ${widthClass} ${heightClass}${
        extraClasses || ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
