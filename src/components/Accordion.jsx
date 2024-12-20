import React, { useState } from "react";

const Accordion = ({ children, array }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white rounded px-3 py-1 text-white">
      {/* Header Section */}
      <div
        className="flex items-center justify-between w-full h-1/2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state
      >
        <p className="text-lg">{children}</p>
        <p className="text-2xl">{isOpen ? "−" : "+"}</p>
      </div>

      {/* Content Section */}
      {isOpen && (
        <div className="w-full mt-3">
          <ul className="w-full flex flex-col gap-2">
            <hr />
            {array.map((item, index) => (
              <li className="w-full" key={index}>
                <a
                  className="p-1 rounded-sm font-poppins font-light w-full block hover:underline"
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} // Replace spaces with hyphens for URLs
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
