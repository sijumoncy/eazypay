import { atom } from "recoil";


export const appStatesAtom = atom<boolean>({
    key: "sidebartoggleStatus",
    default: false
})