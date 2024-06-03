import api from "../api/axiosInstance";

import { ArticleDetail } from "../../typings/db";

/**
 * articleRegister 에서 작성자, article유형, 모집인원, 멘토필요 여부, 멘토 태그?, 모집 시작 날, 모집 끝나는 날, article 제목, article 내용 넘기기
 * @param articleType
 * @param articleApply
 * @param articleMentorNeeded
 * @param mentorTag
 * @param articleEndDay
 * @param articleTitle
 * @param articleContent

 */
const sendNewArticle = async (newArticleData: ArticleDetail) => {
  const {
    articleType,
    articleApply,
    articleMentorNeeded,
    articleMentorTag,
    articleStartDay,
    articleEndDay,
    articleTitle,
    articleContent,
    articleContactMethod,
    articleContactInfo,
  } = newArticleData;

  const newArticle = {
    articleType: articleType,
    apply:
      typeof articleApply === "string" ? parseInt(articleApply) : undefined,
    findMentor: articleMentorNeeded,
    mentorTag: articleMentorTag,
    startDay: articleStartDay,
    endDay: articleEndDay,
    title: articleTitle,
    content: articleContent,
    conMethod: articleContactMethod,
    conInfo: articleContactInfo,
  };
  try {
    await api.post("/posts/write", newArticle);
    console.log(newArticle);

    return { success: true };
  } catch (error) {
    console.log(newArticle);

    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 게시물 상세 조회하기
 * @param articleId
 * @returns
 */
const viewCurrentArticle = async (articleId: number) => {
  try {
    const response = await api.get(`/posts/${articleId}`);
    console.log(response.data);

    if (response.data) {
      return response.data;
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 게시물 수정하기
 * @param articleId
 * @returns
 */
const editCurrentArticle = async (articleId: number) => {
  try {
    const response = await api.put(`/posts/done/${articleId}`, {
      articleRecruitmentState: false,
    });
    console.log("Success:", response.data);

    return { success: true };
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 게시물 삭제하기
 * @param articleId
 * @returns
 */
const deleteCurrentArticle = async (articleId: number) => {
  try {
    const response = await api.delete(`/posts/${articleId}`);

    return { success: true };
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 게시물 찜꽁!
 * @returns
 */
const sendArticleLike = async (articleId: number) => {
  try {
    const response = await api.post(`posts/likes/${articleId}`);

    return { success: true, response };
  } catch (error: any) {
    console.error("error:", error);
    return { success: false, error: error.response.status };
  }
};

/**
 * 게시물 찜 취소
 * @returns
 */
const deleteArticleLike = async (articleId: number) => {
  try {
    await api.delete(`posts/likes/${articleId}`);

    return { success: true };
  } catch (error: any) {
    console.error("error:", error);
    return { success: false, error: error.response.status };
  }
};

/**
 * 게시물 지원하기 (헤더에 토큰 심어서 보냄)
 * @param articleId
 * @returns sucess
 */
const sendArticleApplyUser = async (articleId: number) => {
  try {
    const response = await api.post(`/posts/apply/${articleId}`);

    console.log(response);
    return { success: true };
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 게시물 지원자 리스트 조회
 * @param articleId
 * @returns
 */
const viewArticleApplyUserList = async (articleId: number) => {
  try {
    const response = await api.get(`/posts/applylist/${articleId.toString()}`);

    console.log(response.data);
    if (response.data) {
      return response.data;
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 게시물 리스트
 * @returns
 */
const viewArticleList = async () => {
  try {
    const response = await api.get("/posts/list");
    if (response.data) {
      console.log(response.data.content);
      return response.data.content;
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 마이페이지 정보 불러오기
 * @returns success, data
 */
const viewMyInfo = async () => {
  try {
    const response = await api.get(`/info`);
    const data = response.data;

    console.log(data);

    if (response.status === 200) {
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 마이페이지에서 내가 등록한 게시글정보 가져오기
 * @returns @success @data
 */
const viewMyApplyInfo = async () => {
  try {
    const response = await api.get(`/applyinfo`);
    const data = response.data;

    if (response.status === 200) {
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 마이페이지에서 내가 등록한 게시글정보 가져오기
 * @returns @success @data
 */
const viewMyArticleInfo = async () => {
  try {
    const response = await api.get(`/articleinfo`);
    const data = response.data;

    if (response.status === 200) {
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 마이페이지에서 내가 찜한 정보 불러오기
 * @returns @success @data
 */
const viewMyDibsInfo = async () => {
  try {
    const response = await api.get(`/dibsinfo`);
    const data = response.data;

    if (response.status === 200) {
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 이력서 기본 정보 조회
 * @returns success, data
 */
const viewMyCareerInfo = async () => {
  try {
    const response = await api.get(`/myResume/basicInfo`);
    const data = response.data;

    console.log(data);

    if (response.data) {
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 이력서 기본 정보 조회
 * @returns success, data
 */
const viewMyCareerList = async () => {
  try {
    const response = await api.get(`/myResume/careerAndCertification`);
    const data = response.data;

    console.log(data);

    if (response.data) {
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

export {
  sendNewArticle,
  sendArticleLike,
  deleteArticleLike,
  viewCurrentArticle,
  editCurrentArticle,
  deleteCurrentArticle,
  sendArticleApplyUser,
  viewArticleApplyUserList,
  viewArticleList,
  viewMyInfo,
  viewMyCareerInfo,
  viewMyArticleInfo,
  viewMyApplyInfo,
  viewMyCareerList,
  viewMyDibsInfo,
};
