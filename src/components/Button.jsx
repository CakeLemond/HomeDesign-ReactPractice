import React from "react";

const Button = ({ children, MoreClasses, width }) => {
  return (
    <button
      className={`border-white border rounded-md p-2 flex items-center gap-3 ${
        MoreClasses || ""
      } `}
      style={{ width: width || "" }}
    >
      {children}
    </button>
  );
};

export default Button;
