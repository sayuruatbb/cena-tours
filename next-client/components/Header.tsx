"use client";
import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export const Header = () => {
  const MobileNav = () => {
    return (
      <div>
        <div className="flex items-center justify-start gap-2 w-full h-full m-3">
          <div
            key="side-bar-nav"
            className="md:hidden inline-flex hover:cursor-pointer"
          >
            <SideBar />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-black/40  text-white absolute top-0 z-20 py-5 w-full">
      <div className="flex items-center justify-between  px-5 w-full max-w-full mx-auto">
        <div className="w-1/4 hidden md:block">Cena-tours</div>
        <div className="flex w-1/2 space-x-4 max-w-xl items-center justify-start ">
          <div className="hidden md:block">
            <div key="" className="flex gap-7">
              <NavBar />
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};
