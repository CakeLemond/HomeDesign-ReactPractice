import React from "react";
import Card from "./Card";
import BgImage from "..//assets/images/Section2Bed.jpg";
import Button from "./Button";
import BgImage2 from "..//assets/images/Section2Dark.jpg";
import CircleCom from "./CircleCom";
import Number from "./number";
const Section1 = () => {
  return (
    <>
      <div className="flex flex-col gap-6 lg:flex-row lg:h-screen lg:max-h-[750px]   gap-x-6 w-[95%]  mx-auto ">
        <Card
          image={BgImage}
          extraClasses={
            "flex flex-col justify-end item-center pl-6 pb-10 lg:h-full h-[350px]   "
          }
        >
          <div className="h-full w-full flex flex-col justify-end items-center xs:items-start">
            <Button MoreClasses={"grid text-lg"} width={195}>
              Gorgeous Interior
            </Button>
            <h3 className="text-[40px] w-full text-center xs:text-left xs:text-[56px]">
              Modern Minimalist
            </h3>
          </div>
        </Card>
        <div className="h-full flex flex-col gap-6 ">
          <Card
            extraClasses={
              "  gap-3 pl-6 flex flex-col py-6 justify-center h-auto bg-LightBeige"
            }
          >
            <Button center MoreClasses={"  text-lg "} width={130}>
              Aesthetic
            </Button>
            <p className="w-[75%] grid place-items-center">
              Discover the art of minimalism, where every element in your home
              embodies beauty, simplicity, and purpose.
            </p>
            <h3 className="text-[30px] sm:text-[45px] font-semibold w-[75%] leading-tight ">
              Into a gallery of elegance
            </h3>
          </Card>
          <Card extraClasses={"h-[150px] lg:h-[55%] p-6"} image={BgImage2}>
            <div className="h-[300px] lg:h-full flex flex-col relative">
              <div>
                <Button center white width={150}>
                  <p className="text-white text-lg ">Best Furniture</p>
                </Button>
                <p className="lg:text-3xl sm:w-[90%] md:text-5xl mt-4 text-white xs:w-[300px]  text-2xl sm:text-3xl overflow-hidden">
                  Crafting spaces where less truly becomes more.
                </p>
              </div>
              <CircleCom Section1 />
            </div>
          </Card>
        </div>
      </div>
      <div className="my-20 grid grid-flow-row gap-16 xs:grid-cols-2 lg:flex lg:justify-between lg:items-center w-[85%] items-center justify-center mx-auto">
        <Number description="Products">500</Number>
        <Number description="Project">20</Number>
        <Number description="Satisfied Customers">85</Number>

        <Number description="Top 1 in Montreal" top></Number>
      </div>
    </>
  );
};

export default Section1;
