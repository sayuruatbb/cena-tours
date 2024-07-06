"use client";
import { motion, useAnimation } from "framer-motion";
import { buttonVariants } from "@/utils/Button-Variants";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCollapseAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { navBar } from "@/utils/NavBar";

const SideBar = () => {
  const [isMenuButtonClicked, setIsMenuButtoClicked] = useState<boolean>(false);

  const [isMounted, setIsMounted] = useState<boolean>(false);

  function toogleMenuButton() {
    setIsMenuButtoClicked(!isMenuButtonClicked);
  }

  const controls = useAnimation();

  useEffect(() => {
    setIsMounted(true);
    controls.start({
      width: isMenuButtonClicked ? "300px" : "0px",
    });
  }, [controls, isMenuButtonClicked]);

  return (
    <div>
      <motion.button
        type="button"
        title="Menu Button"
        id="menu-button"
        onClick={toogleMenuButton}
        variants={buttonVariants}
        animate={isMenuButtonClicked ? "active" : "inactive"}
      >
        {!isMenuButtonClicked ? <GiHamburgerMenu size={22} /> : <></>}
      </motion.button>
      <motion.div
        className="absolute top-0 left-0 bg-[#064273] h-screen z-50 rounded-r-2xl"
        animate={controls}
      >
        <div
          className={`${
            isMounted ? "flex flex-col items-start mt-2 ml-2" : "hidden"
          }`}
        >
          <motion.button
            type="button"
            title="close Button"
            className={`${
              isMenuButtonClicked
                ? "inline-flex items-center justify-center p-5"
                : "hidden"
            }`}
            onClick={toogleMenuButton}
            variants={buttonVariants}
            animate={isMenuButtonClicked ? "inactive" : "active"}
          >
            <BiCollapseAlt className="text-white" size={20} />
          </motion.button>

          <div
            className={`${
              isMenuButtonClicked
                ? "p-5 flex flex-col justify-center text-white font-semibold gap-2"
                : "hidden"
            }`}
          >
            {navBar?.map((item) => (
              <motion.a key={item.key} href={item.href}>
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SideBar;
