import React from "react";
import hero from "../public/hero.png";
import Image from "next/image";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <div className="relative bg-slate-500 h-screen">
      <div className=" absolute z-20 pl-40 pt-[240px]">
        <h1 className="font-medium text-white/90 text-[40px] leading-3 ">
          Welcome to
        </h1>
        <p className="font-bold text-white text-[80px] mt-[10px]">Cena-Tours</p>
      </div>
      <div className="h-full w-full absolute z-10">
        <Image src={hero} alt="hero.png " className="h-screen" />
      </div>
    </div>
  );
};
