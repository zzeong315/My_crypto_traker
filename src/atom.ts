import { atom } from "recoil";

export const isDarkAtom = atom<boolean>({
  key: "isDark",
  default: true,
});

export const coinIdAtom = atom<string>({
  key: "coinId",
  default: "",
});