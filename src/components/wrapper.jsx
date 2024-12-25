import React from "react";

const wrapper = ({
  children,
  isImageContain,
  additionalClasses,
  width,
  height,
}) => {
  return (
    <div
      className={`text-white font-sans bg-black rounded-md border border-white bg-opacity-50 backdrop-blur  ${
        isImageContain
          ? "flex justify-center items-center p-6 "
          : "p-6 flex justify-around flex-col"
      } ${additionalClasses || ""} ${
        !width && isImageContain ? "max-w-[450px]" : ""
      } ${!width ? "max-w-[500px]" : ""} `}
      style={{ ...(width ? { width } : {}), ...(height ? { height } : {}) }}
    >
      {children}
    </div>
  );
};

export default wrapper;
