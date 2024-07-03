export type NavBarComponent = {
  key: string;
  name: string;
  href: string;
};
export const navBar: NavBarComponent[] = [
  {
    key: "home",
    name: "Home",
    href: "/",
  },
  {
    key: "gallery",
    name: "Gallery",
    href: "/gallery",
  },
  {
    key: "contact",
    name: "Contact Us",
    href: "/contact",
  },
];
