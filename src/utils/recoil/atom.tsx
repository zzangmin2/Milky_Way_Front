import { atom, selector } from "recoil";

interface UserCompareState {
  email: string;
  id: string;
  password: string;
  name: string;
  dpt: string;
  number: string;
}

export const userJoinState = atom<boolean>({
  key: "userJoinState",
  default: false,
});

export const isLoggedInState = atom<boolean>({
  // 로그인 상태관리(selector 써야할까?)
  key: "isLoggedIn",
  default: localStorage.getItem("token") ? true : false,
});

export const isLoggedInUserName = atom<String>({
  // api모듈에서 받거나 auth에서 response받은 데이터.username?userid 저장
  key: "isLoggedIn",
  default: "",
});

export const userCompareState = atom<UserCompareState>({
  key: "userCompareState",
  default: {
    email: "",
    id: "",
    password: "",
    name: "",
    dpt: "",
    number: "",
  },
});

export const userCompareValues = selector<UserCompareState>({
  key: "userCompareValues",
  get: ({ get }) => {
    const userCompare = get(userCompareState);
    return userCompare;
  },
  set: ({ set }, newValue) => {
    set(userCompareState, newValue);
  },
});
