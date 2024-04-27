import { ReactNode } from "react";
import { Button } from "./button";
import { ArrowIcon, Logo, MenuBarIcon, SignOutIcon} from "@repo/icons/icons";

interface AppbarProps {
  isAuthenticated: boolean;
  onSignin: any;
  onSignout: any;
  fnToggleNav?: () => void;
  toggleNav?: boolean;
  OptionsComponentWithAuth?: ReactNode; // options is components have navs / menu to render in the top bar when authenticated
  OptionsComponentWithoutAuth?: ReactNode; // options is components have navs / menu to render in the top bar when not authenticated
}

export const Appbar = ({
  isAuthenticated,
  onSignin,
  onSignout,
  OptionsComponentWithAuth,
  OptionsComponentWithoutAuth,
  toggleNav,
  fnToggleNav,
}: AppbarProps) => {
  return (
    <div className="flex justify-between px-4">
      <div className="w-full flex justify-between p-1 gap-2 items-center min-h-20 md:min-h-16">
        <div className="flex gap-5 justify-between items-center">
          <Logo classes="w-10 h-10" />
          <h1 className="font-bold text-[25px] text-heading">eazyPay</h1>
          {fnToggleNav && (
            <button className="" onClick={fnToggleNav}>
              {toggleNav ? (
                  <ArrowIcon classes="w-7 h-7 fill-heading" />
                ) : (
                  <MenuBarIcon classes="w-7 h-7 fill-dark" />
              )}
            </button>
          )}
        </div>
        <div className="flex gap-2 justify-between items-center">
          {!isAuthenticated && OptionsComponentWithoutAuth}
          {isAuthenticated && OptionsComponentWithAuth}
          
          {isAuthenticated ? 
          <button className="" onClick={onSignout} title="signout">
            <SignOutIcon classes="fill-red-500 w-7 h-7 hover:fill-red-600"/>
          </button> 
          :
          <Button onClick={onSignin} className="">
            Login
          </Button> 
          }
        </div>
      </div>
    </div>
  );
};
