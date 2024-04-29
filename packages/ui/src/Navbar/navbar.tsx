import React from "react";
import Profile from "@repo/ui/profile";
import { IDropDownItem } from "../interace";

interface INavbarProps {
  isMinimised: boolean;
  children: React.ReactNode;
}

const profileMenuItems: IDropDownItem[][] = [
  [{ name: "Profile" }],
  [{ name: "Logout" }],
];

function Navbar({ isMinimised, children }: INavbarProps) {
  return (
    <div
      className={`max-w-72 ${isMinimised ? "w-28" : "w-full"} h-full mr-4 p-4 transition-width duration-1000 bg-[var(--navBg)] rounded-xl`}
    >
      <div className="w-full h-full rounded-xl p-2 flex flex-col gap-2">
        <div className="w-full">
          <Profile
            name="Alice"
            userId="1111222288"
            dropdownItemsArr={profileMenuItems}
          />
        </div>
        <div className="w-full rounded-xl p-2 border h-full">{children}</div>
      </div>
    </div>
  );
}

export default Navbar;
