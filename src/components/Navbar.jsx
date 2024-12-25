import React, { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Menu from "./menu";
const Navbar = () => {
  const LinkArrays = ["Product", "Lifestyle", "News", "Project"];
  const [IsOpen, SetIsOpen] = useState(false);
  const [IsScrolled, SetScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        SetScrolled(true);
      } else {
        SetScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (IsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [IsOpen]);

  const ToggleMenu = () => {
    SetIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <header
        className={`my-3 sticky top-0  mx-auto px-6 transition-all w-full duration-300 ease z-20  bg-white  ${
          IsScrolled ? "    shadow-lg" : ""
        } `}
      >
        <nav className="flex  justify-between items-center ">
          <div className="left-side">
            <h1 className="text-5xl font-bold font-poppins">Alinea</h1>
          </div>
          <div className="right-side hidden lg:block ">
            <ul className=" flex justify-between gap-6">
              {LinkArrays.map((item, index) => (
                <li key={index}>
                  <a className="font-poppins" href={`/${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" lg:hidden">
            <Hamburger toggled={IsOpen} toggle={ToggleMenu}></Hamburger>
          </div>
        </nav>
      </header>
      <Menu Opened={IsOpen} />
    </>
  );
};

export default Navbar;
