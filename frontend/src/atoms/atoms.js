import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: "none",
});
export const userName = atom({
  key: "userName",
  default: null,
});
