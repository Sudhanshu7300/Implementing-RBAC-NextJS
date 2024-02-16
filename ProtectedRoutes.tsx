import { RxDashboard } from "react-icons/rx";
import { MdProductionQuantityLimits } from "react-icons/md";

export const protectedRoutes: { [key: string]: string } = {
  "/": "1",
  "/product": "0",
};

export const ProtectedRoutes = [
  {
    role: "1",
    title: "Dashboard",
    href: "/",
    icon: RxDashboard,
  },
  {
    role: "0",
    title: "Product",
    href: "/product",
    icon: MdProductionQuantityLimits,
  },
  {
    role: "2",
    title: "Hospital",
    href: "/",
    icon: RxDashboard,
  },
  {
    role: "2",
    title: "Product",
    href: "/product",
    icon: MdProductionQuantityLimits,
  },
  {
    role: "3",
    title: "Hospital",
    href: "/",
    icon: RxDashboard,
  },
  {
    role: "3",
    title: "Product",
    href: "/product",
    icon: MdProductionQuantityLimits,
  },
];
