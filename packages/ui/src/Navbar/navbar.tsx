import React from "react";
import { Logo, MenuBarIcon } from "@repo/icons/icons";

function Navbar() {
  return (
    <div className="max-w-72  w-full min-h-screen mr-4 p-4">
      <div className="w-full h-full rounded-xl p-2 border border-black">
        <div className="w-full flex justify-between px-1 gap-2 items-center">
          <Logo classes="w-10 h-10" />
          <h1 className="font-bold text-[25px] text-[rgb(25,59,98)]">
            eazyPay
          </h1>
          <MenuBarIcon classes="w-10 h-10  stroke-green-500"/>
        </div>
        <div>Content</div>
      </div>
    </div>
  );
}

export default Navbar;
