import React from "react";

const menu = ({ Opened }) => {
  const LinkArrays = ["Product", "Lifestyle", "News", "Project"];

  return (
    <div
      className={` absolute top-16  w-full h-56   bg-white shadow-lg border ${
        Opened ? "grid" : "hidden"
      }  place-items-left p-6 `}
    >
      <ul className=" flex justify-between flex-col gap-6">
        {LinkArrays.map((item, index) => (
          <li key={index}>
            <a className="font-poppins" href={`/${item.toLowerCase()}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default menu;
