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

function SideNavBar() {
  const { sidebarStatus } = useToggleSidebar();

  return <Navbar isMinimised={sidebarStatus} />;
}

export default SideNavBar;
