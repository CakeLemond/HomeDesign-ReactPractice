import React, { useState } from "react";

const Accordion = ({ children, array }) => {
  const [selected, setselected] = useState(null);
  const Toggle = (i) => {
    if (selected == i) {
      return setselected(null);
    }
    setselected(i);
  };
  const items = [
    {
      title: "About Us",
      description: [
        "Our story",
        "Store Location ",
        "Sustainability",
        "Careers",
        "Contact",
      ],
    },
    {
      title: "Customer Service",
      description: [
        "Prices and Payment",
        "Shipping",
        "Return Policy",
        "Terms of Service",
        "Privacy Policy",
      ],
    },
    {
      title: "Socials",
      description: [
        "Instagram",
        "Facebook",
        "Linkedin",
        "Pinterest",
        "Twitter",
      ],
    },
  ];
  return items.map((item, index) => (
    <div
      className="border border-white rounded px-3 py-1 text-white"
      key={index}
    >
      <div
        className="flex items-center justify-between w-full h-1/2 cursor-pointer"
        onClick={() => Toggle(index)}
      >
        <p className="text-lg">{item.title}</p>
        <p className="text-2xl">{selected == index ? "-" : "+"}</p>
      </div>
      <div className={`w-full mt-3  ${selected == index ? "block" : "hidden"}`}>
        <ul className="w-full flex flex-col gap-2">
          <hr />
          {item.description.map((stuff, index) => (
            <li className="w-full" key={index}>
              <a
                className="p-1 rounded-sm font-poppins font-light w-full block hover:underline"
                href={`/${stuff.toLowerCase()}`}
              >
                {stuff}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
};

export default Accordion;
