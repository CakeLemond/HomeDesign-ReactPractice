import React from "react";

const Card = ({ children, extraClasses, width, height, image, guys }) => {
  const style = {
    ...(image ? { backgroundImage: `url(${image})` } : {}),
  };
  const widthClass = width && !guys ? `w-[${width}]` : "w-full";
  const heightClass = height && !guys ? `h-[${height}]` : "h-full";
  return (
    <div
      className={`rounded-lg bg-cover mx-auto  object-center  ${widthClass} ${heightClass}${
        extraClasses || ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
