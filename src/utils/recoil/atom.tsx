import { atom, selector } from "recoil";
import { Article, CurrentArticle } from "../../typings/db";

interface UserCompareState {
  email?: string;
  id?: string;
  password?: string;
  name?: string;
  dpt?: string;
  number?: string;
}

interface UserCareerState {
  userName?: any;
  userCareer?: any;
  userCertificate?: any;
  userLineText?: any;
}

/**
 * signupemail -> signupcompare state상태
 * @type {boolean}
 */

export const emailSuccesses = atom<boolean>({
  key: "emailSuccessIn",
  default: false,
});

/**
 * signupcompare -> signupinfo state상태
 * @type {boolean}
 */

export const compareSuccesses = atom<boolean>({
  key: "compareSuccessIn",
  default: false,
});

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

/**
 * 이력서페이지 정보조회
 */
export const userCareerState = atom<UserCareerState>({
  key: "userCareerState",
  default: {
    userName: "",
    userCareer: [],
    userCertificate: [],
    userLineText: "",
  },
});

export const userCareerStateValues = selector<UserCareerState>({
  key: "userCareerValues",
  get: ({ get }) => {
    const userCareer = get(userCareerState);
    return userCareer;
  },
  set: ({ set }, newValue: any) => {
    set(userCompareState, newValue);
  },
});

/**
 * 마이페이지 정보조회
 */
export const userInfoState = atom<any>({
  key: "userInfoState",
  default: {
    userName: "",
    userEmail: "",
    userNickName: "",
    userCareerCard: "",
    userNumber: "",
  },
});

//스터디 게시물

/**
 * <atom> article 등록
 */

export const ArticleRegisterState = atom({
  key: "articleRegisterState",
  default: {
    articleType: "",
    articleApply: 0,
    findMentor: false,
    mentorTag: "",
    articleStartDay: "",
    articleEndDay: "",
    articleTitle: "",
    articleContent: "",
  },
});

/**
 * <atom> article 상세 조회
 */
export const ArticleCurrentState = atom({
  key: "articleCurrentState",
  default: {
    articleId: 0,
    articleMemberId: "",
    //articleMemberName 필요
    articleType: "",
    articleRecruitmentState: true,
    articleTitle: "",
    articleContent: "",
    articleLikes: "",
    articleApply: 0,
    articleApplyNow: 0,
    articleStartDay: "",
    articleEndDay: "",
    articleMentorNeeded: false,
    articleMentorTag: [],
    articleApplyState: [
      {
        id: 0,
        applicantName: "",
        applicationDate: "",
        status: "",
      },
    ],
  },
});

/**
 * <atom> article 리스트 조회
 */

export const ArticleListTypeState = atom({
  key: "articleListTypeState",
  default: [],
});

/**
 * <atom> 현재 리스트 타입 필터링 기준
 */
export const ArticleListTypeFilterState = atom({
  key: "articleListTypeFilterState",
  default: "all", // "all", "study", "project"
});

/**
 * <selector> 리스트 타입에 따라 필터링 된 article 리스트
 */
export const filteredArticleListTypeState = selector({
  key: "filteredArticleListState",
  get: ({ get }) => {
    const filter = get(ArticleListTypeFilterState);
    const list = get(ArticleListTypeState);

    switch (filter) {
      case "study":
        return list.filter(
          (article: Article) => article.articleType === "study"
        );
      case "project":
        return list.filter(
          (article: Article) => article.articleType === "project"
        );

      default:
        return list;
    }
  },
});

/**
 * <atom> 현재 모집 상태 필터링 기준
 */

export const ArticleRecruitmentOptionState = atom({
  key: "articleRecruitmentOptionState",
  default: "recruting",
});

/**
 * <selector> 모집 상태에 따라 필터링된 article리스트
 */

export const filteredArticleRecruitmentOptionListState = selector({
  key: "filteredArticleRecruitmentOptionState",
  get: ({ get }) => {
    const filter = get(ArticleRecruitmentOptionState);
    const list = get(filteredArticleListTypeState);

    const currentDate = new Date();
    switch (filter) {
      case "all":
        return list;
      case "recruting":
        return list.filter(
          (article: Article) => new Date(article.articleEndDay) > currentDate
        );
      case "recruitmentCompleted":
        return list.filter(
          (article: Article) => new Date(article.articleEndDay) < currentDate
        );

      default:
        return list;
    }
  },
});

/**
 * <atom> 최신순/인기순 정렬 방식 기준
 */

export const ArticleLatestOrPopularOptionState = atom({
  key: "articleLatestOrPopularOptionState",
  default: "latest",
});

/**
 * <selector> 최신순/인기순 정렬 방식 기준에 따라 재 정렬한 article 리스트
 */
export const filteredArticleLatestOrPopularOptionListState = selector({
  key: "filteredArticleLatestOrPopularOptionListState",
  get: ({ get }) => {
    const option = get(ArticleLatestOrPopularOptionState);
    const list = get(filteredArticleRecruitmentOptionListState);
    console.log(option);

    switch (option) {
      case "latest":
        return list.slice().sort((a: CurrentArticle, b: CurrentArticle) => {
          const articleEndDayA = new Date(a.articleEndDay);
          const articleEndDayB = new Date(b.articleEndDay);
          return articleEndDayB.getTime() - articleEndDayA.getTime();
        });

      case "popular":
        return list.slice().sort((a: CurrentArticle, b: CurrentArticle) => {
          return b.articleLikes - a.articleLikes;
        });

      default:
        return list;
    }
  },
});
