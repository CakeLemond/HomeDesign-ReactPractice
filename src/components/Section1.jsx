import React from "react";
import Card from "./Card";
import BgImage from "..//assets/images/Section2Bed.jpg";
import Button from "./Button";
import BgImage2 from "..//assets/images/Section2Dark.jpg";

const Section1 = () => {
  return (
    <div className="flex flex-col gap-1">
      <Card
        height={500}
        image={BgImage}
        extraClasses={"flex flex-col justify-end item-center pl-6 pb-10 "}
      >
        <Button MoreClasses={"grid text-lg"} width={195}>
          Gorgeous Interior
        </Button>
        <h3 className="text-[54px] item-center ">Modern Minimalist</h3>
      </Card>
      <Card
        height={300}
        extraClasses={"  gap-3 pl-6 flex flex-col py-6 justify-center"}
      >
        <Button MoreClasses={"grid place-item-center text-lg "} width={130}>
          Aesthetic
        </Button>
        <p className="w-[75%] grid place-items-center">
          Discover the art of minimalism, where every element in your home
          embodies beauty, simplicity, and purpose.
        </p>
        <h3 className="text-[45px] font-semibold w-[75%] leading-tight ">
          Into a gallery of elegance
        </h3>
      </Card>
      <Card height={400} image={BgImage2}></Card>
    </div>
  );
};

export default Section1;
