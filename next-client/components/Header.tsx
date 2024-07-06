"use client";
import { navigationLinks } from "@/data/navigation-link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
  const pathname = usePathname();
  const [isMobileNavExpanded, setIsMobileNavExpanded] =
    React.useState<boolean>(false);

  const handleMobileNavExpand = () => {
    setIsMobileNavExpanded(true);
  };

  const handleMobileNavCollapse = () => {
    setIsMobileNavExpanded(false);
  };

  const MobileNav = () => (
    <div
      onMouseEnter={handleMobileNavExpand}
      onMouseLeave={handleMobileNavCollapse}
      className="w-full flex flex-col items-center gap-5 md:hidden"
    >
      <div
        className="h-1/2
      "
      >
        Cena Tours Logo
      </div>
      {isMobileNavExpanded && (
        <div className="h-1/2 flex flex-col items-center justify-center gap-2">
          {navigationLinks.map((link) => (
            <Link
              href={link.url}
              className={`${
                pathname === link.url && "text-cream font-semibold"
              } cursor-pointer hover:scale-[110%] transition-all duration-200 ease-in-out antialiased`}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  const DefaultNav = () => (
    <div className="w-full hidden md:flex">
      <div className="w-1/2">Cena Tours Logo</div>
      <div className="w-1/2 flex gap-5 items-center justify-end">
        {navigationLinks.map((link) => (
          <Link
            href={link.url}
            className={`${
              pathname === link.url && "text-cream font-semibold"
            } cursor-pointer hover:scale-[110%] transition-all duration-200 ease-in-out antialiased`}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="absolute top-0 w-full p-6 bg-black/40 z-50 text-white">
      <DefaultNav />
      <MobileNav />
    </header>
  );
};
