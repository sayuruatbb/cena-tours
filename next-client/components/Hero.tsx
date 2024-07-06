import React from "react";
import hero from "../public/hero.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className=" absolute z-20 ml-[200px] pt-[340px]">
        <h1 className=" font-medium text-[#fde68a] text-[70px] leading-3 hidden md:block ">
          Welcome to
        </h1>
        <p className="hidden md:block font-bold text-[#fde68a] text-[150px] m-[10px]">
          Cena-Tours
          <span className="text-[60px] text-[#fde68a]">.</span>
        </p>
      </div>
      <div className="h-full w-full absolute z-10">
        <Image src={hero} alt="hero.png " className="h-screen object-cover" />
      </div>
    </div>
  );
};
