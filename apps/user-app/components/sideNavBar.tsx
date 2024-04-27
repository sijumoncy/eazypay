"use client";
import React from "react";
import { SidebarItem } from "../components/SideBarItem";
import {
  HomeIcon,
  ClockIcon,
  TransferArrowIcon,
  ShareMoneyIcon,
} from "@repo/icons/icons";
import Navbar from "@repo/ui/navbar";
import { useToggleSidebar } from "@repo/store/storeHooks";

const sidebarNav = [
  {
    id: 1,
    href: "/dashboard",
    title: "Home",
    icon: <HomeIcon classes="w-5 h-5 fill-black" />,
  },
  {
    id: 2,
    href: "/transfer",
    title: "Transfer",
    icon: <ClockIcon classes="w-5 h-5 fill-black" />,
  },
  {
    id: 3,
    href: "/transactions",
    title: "Transactions",
    icon: <TransferArrowIcon classes="w-5 h-5 fill-black" />,
  },
  {
    id: 4,
    href: "/p2ptransfer",
    title: "P2P Payment",
    icon: <ShareMoneyIcon classes="w-5 h-5 fill-black" />,
  },
];

function SideNavBar() {
  const { sidebarStatus } = useToggleSidebar();

  return (
    <Navbar isMinimised={sidebarStatus}>
      <div className="w-full">
        {sidebarNav.map(({ href, icon, title, id }) => (
          <SidebarItem key={id} href={href} icon={icon} title={title} />
        ))}
      </div>
    </Navbar>
  );
}

export default SideNavBar;
