import { atom } from "recoil";

export const userJoinState = atom<boolean>({
  key: "userJoinState",
  default: false,
});

export const isEmailInState = atom<boolean>({
  key: "isEmailedIn",
  default: false,
});

export const isLoggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: localStorage.getItem("token") ? true : false,
});
