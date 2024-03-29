import api from "../instanceapi/axiosInstance";

export const postsLists = (type: any) => {
  // 구인 게시글 목록 페이지
  return api({ url: `/` });
};

export const postsInfo = (type: any) => {
  // 구인 게시글 상세 확인
  return api({ url: `/` });
};

export const postsDelete = (type: any) => {
  return api({ url: `/` });
};
