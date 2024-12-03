import React from "react";

const Navbar = () => {
  const LinkArrays = ["Product", "Lifestyle", "News", "Project"];
  return (
    <nav className="flex  justify-between items-center ">
      <div className="left-side">
        <h1 className="text-5xl font-bold">Alinea</h1>
      </div>
      <div className="right-side">
        <ul className=" flex justify-between gap-6">
          {LinkArrays.map((item, index) => (
            <li key={index}>
              <a href={`${item.toLowerCase}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
