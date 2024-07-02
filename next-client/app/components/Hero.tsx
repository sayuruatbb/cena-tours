import React from "react";
import hero from "../assets/iamges/hero.png";
import Image from "next/image";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <div className="bg-slate-500 h-screen">
      <div className=" absolute pl-40 pt-[240px]">
        <h1 className="font-medium text-white/90 text-[40px] leading-3 ">
          Welcome to
        </h1>
        <p className="font-bold text-white text-[80px] mt-[10px]">Cena-Tours</p>
      </div>
      <div className="">
        <Image src={hero} alt="hero.png " className="h-screen" />
      </div>
    </div>
  );
};
