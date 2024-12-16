import React from "react";

const Button = ({ children, MoreClasses, width, white, bg }) => {
  return (
    <button
      className={`${white ? "border-white" : "border-black"} ${
        bg ? "bg-black bg-opacity-50 backdrop-blur " : ""
      } border rounded-md p-2 flex items-center gap-3 ${MoreClasses || ""} `}
      style={{ width: width || "" }}
    >
      {children}
    </button>
  );
};

export default Button;
