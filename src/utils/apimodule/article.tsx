import { useSetRecoilState } from "recoil";
import api from "../api/axiosInstance";
import { ArticleCurrentState, isLoggedInUserName } from "../recoil/atom";
import { Article } from "../../typings/db";

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
const sendNewArticle = async (newArticleData: Article) => {
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
const sendArticleLike = async () => {
  try {
    await api.post(`posts/likes/1`);

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
    // const memberIds = localStorage.getItem("memberNo");
    const response = await api.post(`/info`);
    const data = response.data[0];
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
 * 이력서 정보 불러오기
 * @returns success, data
 */
const viewMyCareer = async () => {
  try {
    const response = await api.get(`/myResume`);
    const data = response.data[0];
    console.log(response.data);

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
  viewCurrentArticle,
  editCurrentArticle,
  deleteCurrentArticle,
  sendArticleApplyUser,
  viewArticleApplyUserList,
  viewArticleList,
  viewMyInfo,
  viewMyCareer,
};
