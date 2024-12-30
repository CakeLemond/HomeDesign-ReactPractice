import React from "react";
import CircleCom from "./CircleCom";

const BentoCard = ({ children, width, height, image, extraClass }) => {
  const style = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };
  return (
    <div
      className={`flex items-end justify-between rounded-md  relative md:h-[18.75rem] h-[200px] lg:h-full  w-full   ${
        extraClass || ""
      }`}
      style={style}
    >
      <div className="w-full h-full ">
        <img
          className="w-full h-full rounded-md brightness-50 object-cover object-center"
          src={image}
          alt=""
        />
      </div>

      <p className="text-3xl font-semibold text-white z-10 absolute left-5 bottom-7 ">
        {children}
      </p>
      <CircleCom white />
    </div>
  );
};

export default BentoCard;
