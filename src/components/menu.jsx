import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
const menu = ({ Opened }) => {
  const LinkArrays = ["Product", "Lifestyle", "News", "Project"];
  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.35, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,

      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5 },
      ease: [0.37, 0, 0.63, 1],
    },
    open: {
      y: 0,
      transition: { duration: 0.7, ease: [0.37, 0.55, 0.45, 1] },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };
  return (
    <AnimatePresence>
      {Opened && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-[4.5rem] w-full h-56 origin-top  bg-white shadow-lg border z-20 place-items-left p-6"
        >
          <motion.ul
            className="flex justify-between flex-col gap-6 absolute "
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
          >
            {LinkArrays.map((item, index) => (
              <div key={index} className="overflow-hidden">
                <motion.li
                  variants={mobileLinkVars} // Individual animation for each child
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="font-poppins cursor-pointer"
                  >
                    {" "}
                    {item}
                  </Link>
                </motion.li>
              </div>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default menu;
