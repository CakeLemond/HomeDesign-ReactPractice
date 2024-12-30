import React, { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Menu from "./menu";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimationControls,
} from "framer-motion";
const Navbar = () => {
  const LinkArrays = ["Product", "Lifestyle", "News", "Project"];
  const [IsOpen, SetIsOpen] = useState(false);
  const [IsScrolled, SetScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 50) {
      SetScrolled(true);
    } else {
      SetScrolled(false);
    }
  });
  const controls = useAnimationControls();

  useEffect(() => {
    if (IsOpen) {
      console.log("IsOpen:", IsOpen);
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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !IsOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`py-3  my-3 sticky top-0 max-w-screen-2xl mx-auto px-6 w-full z-20 bg-white ${
          IsScrolled && !IsOpen ? "  shadow-lg" : ""
        }`}
      >
        <nav className="flex justify-between items-center">
          <div className="left-side">
            <h1 className="text-5xl font-bold font-poppins">Alinea</h1>
          </div>
          <div className="right-side hidden lg:block">
            <ul className="flex justify-between gap-6">
              {LinkArrays.map((item, index) => (
                <li key={index}>
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.p
                      className="font-poppins cursor-pointer LinkParent"
                      variants={{
                        rest: { y: "0%" },
                        hover: { y: "-100%" },
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      {item}
                    </motion.p>

                    <motion.p
                      className="font-poppins absolute right-0 top-0 cursor-pointer Transform-anime"
                      variants={{
                        rest: { y: "100%" },
                        hover: { y: "0%" },
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      href={`${`/${item.toLowerCase()}`}`}
                    >
                      {item}
                    </motion.p>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <Hamburger toggled={IsOpen} toggle={ToggleMenu}></Hamburger>
          </div>
        </nav>
      </motion.header>
      <Menu Opened={IsOpen} />
    </>
  );
};

export default Navbar;
