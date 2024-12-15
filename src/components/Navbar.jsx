import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const LinkArrays = ["Product", "Lifestyle", "News", "Project"];
  const [IsOpen, SetIsOpen] = useState(true);
  return (
    <header className="my-3 sticky top-0 ">
      <nav className="flex  justify-between items-center ">
        <div className="left-side">
          <h1 className="text-5xl font-bold font-poppins">Alinea</h1>
        </div>
        <div className="right-side hidden lg:block ">
          <ul className=" flex justify-between gap-6">
            {LinkArrays.map((item, index) => (
              <li key={index}>
                <a className="font-poppins" href={`${item.toLowerCase}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" lg:hidden">
          <Hamburger />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
