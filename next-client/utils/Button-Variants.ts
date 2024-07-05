import { Variants } from "framer-motion";

export const buttonVariants: Variants = {
  active: {
    scale: [1, 1, 1],
    rotate: [0, 0, 360],
    borderRadius: ["20%", "20%", "50%"],
    transition: {
      duration: 1,
      ease: "anticipate",
    },
  },
  inactive: {},
};
