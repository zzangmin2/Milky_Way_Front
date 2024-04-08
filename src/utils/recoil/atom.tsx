import { atom, selector } from "recoil";

interface UserCompareState {
  email: string;
  id: string;
  password: string;
  name: string;
  dpt: string;
  number: string;
}

/**
 * sendLogin 성공시 로그인 유저네임 저장
 * @type {string}
 */

export const isLoggedInUserName = atom<string>({
  key: "isLoggedInUserName",
  default: "",
});

/**
 * 회원가입 state, 필요한지 따져봐야함k
 * @type {boolean}
 */

export const userJoinState = atom<boolean>({
  key: "userJoinState",
  default: false,
});

/**
 * 로그인 상태 관리 state, true값으로 usercomparevalue안에서 email, name등 정보를 사용할지 여부?
 * @type {boolean}
 */

export const isLoggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: localStorage.getItem("token") ? true : false,
});

/**
 * <atom> 회원가입 단계에서 사용자 이메일, id, 사용자 비밀번호, 사용자 이름, 사용자 학과, 사용자 전화번호
 * @type {string}
 * @param {string} email 사용자 이메일
 * @param {string} id 사용자 ID
 * @param {string} password 사용자 비밀번호
 * @param {string} name 사용자 이름
 * @param {string} dpt 사용자 학과
 * @param {string} number 사용자 전화번호
 */

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

/**
 * <selector> 회원가입 단계에서 사용자 이메일, id, 사용자 비밀번호, 사용자 이름, 사용자 학과, 사용자 전화번호
 * @type {string}
 * @param {string} email 사용자 이메일
 * @param {string} id 사용자 ID
 * @param {string} password 사용자 비밀번호
 * @param {string} name 사용자 이름
 * @param {string} dpt 사용자 학과
 * @param {string} number 사용자 전화번호
 */

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

//스터디 게시물

/**
 * <atom> 게시글 상세
 */
export const ArticleState = atom({
  key: "articleState",
  default: {
    articleMemberId: "",
    articleType: "",
    articleTitle: "",
    articleContent: "",
    articleLikes: "",
    aritcleApply: "",
    articleApplyNow: "",
    articleStartDay: "",
    articleEndDay: "",
    articleFindMentor: "",
  },
});
