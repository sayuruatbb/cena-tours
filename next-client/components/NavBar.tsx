"use client";
import { navBar } from "@/utils/NavBar";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname: string = usePathname();

  return (
    <div className="flex gap-8 items-center ">
      {navBar.map((navComponent) => (
        <a
          className={` uppercase font-semibold text-sm transition-all duration-200 ease-in-out${
            pathname === navComponent.href
          }`}
          key={navComponent.key}
          href={navComponent.href}
        >
          {navComponent.name}
        </a>
      ))}
    </div>
  );
};

export default NavBar;
