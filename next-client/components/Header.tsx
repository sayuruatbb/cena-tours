"use client";
import React from "react";
import NavBar from "./NavBar";

export const Header = () => {
  return (
    <div className="bg-black/40  text-white absolute top-0 z-20 py-5 w-full">
      <div className="flex items-center justify-between  px-5 w-full max-w-full mx-auto">
        <div className="w-1/4">Cena-tours</div>
        <div className="flex w-1/2 space-x-4 max-w-xl items-center justify-start ">
          <div className="hidden md:block">
            <div
            key="" className="flex gap-7">
              <NavBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
