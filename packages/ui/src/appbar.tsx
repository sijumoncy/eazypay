import { ReactNode } from "react";
import { Button } from "./button";
import { Logo, MenuBarIcon } from "@repo/icons/icons";

interface AppbarProps {
  isAuthenticated: boolean;
  onSignin: any;
  onSignout: any;
  OptionsComponentWithAuth?: ReactNode; // options is components have navs / menu to render in the top bar when authenticated
  OptionsComponentWithoutAuth?: ReactNode; // options is components have navs / menu to render in the top bar when not authenticated
}

export const Appbar = ({
  isAuthenticated,
  onSignin,
  onSignout,
  OptionsComponentWithAuth,
  OptionsComponentWithoutAuth,
}: AppbarProps) => {
  return (
    <div className="flex justify-between px-4">
      <div className="w-full flex justify-between p-1 gap-2 items-center min-h-20 md:min-h-16">
        <div className="flex gap-5 justify-between items-center">
          <Logo classes="w-10 h-10" />
          <h1 className="font-bold text-[25px] text-heading">eazyPay</h1>
          <MenuBarIcon classes="w-7 h-7 fill-dark" />
        </div>
        <div className="flex gap-2 justify-between items-center">
          {!isAuthenticated && OptionsComponentWithoutAuth}
          {isAuthenticated && OptionsComponentWithAuth}
          <Button onClick={isAuthenticated ? onSignout : onSignin} className="">
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
      {/* <div className="w-full flex justify-between px-1 gap-2 items-center">
        <Logo classes="w-10 h-10" />
        <h1 className="font-bold text-[25px] text-heading">eazyPay</h1>
        <MenuBarIcon classes="w-10 h-10 fill-dark" />
      </div>
      <div className="flex flex-col justify-center pt-2">
        <Button onClick={isAuthenticated ? onSignout : onSignin}>
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
      </div> */}
    </div>
  );
};
