"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../public/hero.png";
import { ImageIcon, VideoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  const [isVideo, setIsVideo] = useState(false);

  return (
    <div className="relative h-screen flex items-center justify-end">
      <div className="absolute z-20 text-center mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="font-medium text-[#fde68a] text-6xl hidden md:block"
        >
          Welcome to
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="hidden md:block font-bold text-[#fde68a] text-[8rem]"
        >
          Cena-Tours
          <span className="text-4xl text-red-500 animate-pulse">.</span>
        </motion.p>
      </div>
      <div className="absolute inset-0 z-10">
        {isVideo ? (
          <video
            src="/hero-alt.mp4"
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={heroImage}
            alt="hero.png"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="absolute bottom-10 right-10 z-30">
        <button
          onClick={() => setIsVideo(!isVideo)}
          className="p-3 bg-[#fde68a] text-black rounded-full"
        >
          {isVideo ? <ImageIcon /> : <VideoIcon />}
        </button>
      </div>
    </div>
  );
};
