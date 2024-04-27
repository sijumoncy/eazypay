import React from "react";

interface INavbarProps {
  isMinimised: boolean;
}

function Navbar({ isMinimised }: INavbarProps) {
  
  return (
    <div
      className={`max-w-72 ${isMinimised ? "w-28" : "w-full"} min-h-screen mr-4 p-4 transition-width duration-1000`}
    >
      <div className="w-full h-full rounded-xl p-2 border border-black">
        <div className="w-full">Profile</div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
