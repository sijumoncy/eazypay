"use client";
import React from "react";
import { SidebarItem } from "../components/SideBarItem";
import {
  ClockIcon,
  TransferArrowIcon,
  ShareMoneyIcon,
  DashBoardIcon,
  BankIcon,
} from "@repo/icons/icons";
import Navbar from "@repo/ui/navbar";
import { useToggleSidebar } from "@repo/store/storeHooks";

const sidebarNav = [
  {
    id: 1,
    href: "/dashboard",
    title: "Dashboard",
    icon: <DashBoardIcon classes="w-7 h-7" />,
  },
  {
    id: 2,
    href: "/transfer",
    title: "Transfer",
    icon: <BankIcon classes="w-8 h-8 " />,
  },
  {
    id: 3,
    href: "/transactions",
    title: "Transactions",
    icon: <TransferArrowIcon classes="w-7 h-7 " />,
  },
  {
    id: 4,
    href: "/p2ptransfer",
    title: "P2P Payment",
    icon: <ShareMoneyIcon classes="w-7 h-7 " />,
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
