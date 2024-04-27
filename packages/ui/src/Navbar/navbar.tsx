import React from "react";
import Profile from "@repo/ui/profile";
import { IDropDownItem } from "../interace";

interface INavbarProps {
  isMinimised: boolean;
}

const profileMenuItems: IDropDownItem[][] = [
  [{ name: "Profile" }],
  [{ name: "Logout" }],
];

function Navbar({ isMinimised }: INavbarProps) {
  return (
    <div
      className={`max-w-72 ${isMinimised ? "w-28" : "w-full"} min-h-screen mr-4 p-4 transition-width duration-1000 bg-[var(--navBg)] rounded-xl`}
    >
      <div className="w-full h-full rounded-xl p-2 border border-black">
        <div className="w-full">
          <Profile
            name="Alice"
            userId="1111222288"
            dropdownItemsArr={profileMenuItems}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
