import React from "react";
import BentoCard from "./BentoCard";
import Bento1 from "../assets/images/bento1.jpg";
import Bento2 from "../assets/images/bento2.jpg";
import Bento3 from "../assets/images/bento3.jpg";
import Bento4 from "../assets/images/Bento4.jpg";
import Bento5 from "../assets/images/bento5.jpg";
import Bento6 from "../assets/images/bento6.jpg";

const BentoSection = () => {
  return (
    <div
      className=" grid overflow-auto w-full p-6 
            h-auto lg:max-h-[1000px] 
            grid-rows-6 md:grid-rows-3 lg:grid-rows-3 
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-6 mx-auto "
    >
      <BentoCard extraClass={"lg:col-span-2 "} image={Bento3}>
        Nirnia
      </BentoCard>
      <BentoCard image={Bento2}>Artex</BentoCard>
      <BentoCard
        extraClass={"lg:row-span-2 md:col-span-2 lg:col-span-1"}
        image={Bento5}
      >
        Brera
      </BentoCard>
      <BentoCard extraClass={"md:col-span-2 lg:col-span-1"} image={Bento4}>
        Alea Pro
      </BentoCard>
      <BentoCard extraClass={"lg:row-span-2"} image={Bento6}>
        Nirnia
      </BentoCard>
      <BentoCard extraClass={""} image={Bento1}>
        Mondrian
      </BentoCard>
    </div>
  );
};

export default BentoSection;
