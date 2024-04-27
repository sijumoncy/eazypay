import { useRecoilState } from "recoil";
import { appStatesAtom } from "../atoms/appStates";

export const useToggleSidebar = () => {
  const [sidebarStatus, toggleSideBarState] = useRecoilState(appStatesAtom);
  
  const handleToggleSidebar = () => {
    toggleSideBarState((prev) => !prev);
  };

  return { sidebarStatus, handleToggleSidebar };
};
