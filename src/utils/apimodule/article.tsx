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
    articleMemberId,
    articleType,
    articleApply,
    articleMentorNeeded,
    articleMentorTag,
    articleStartDay,
    articleEndDay,
    articleTitle,
    articleContent,
  } = newArticleData;
  try {
    await api.post("http://localhost:3000/currentArticle", {
      articleMemberId: articleMemberId,
      articleType: articleType,
      articleApply: articleApply,
      findMentor: articleMentorNeeded,
      articleMentorTag: articleMentorTag,
      articleStartDay: articleStartDay,
      articleEndDay: articleEndDay,
      articleTitle: articleTitle,
      articleContent: articleContent,
    });

    return { success: true };
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

const viewCurrentArticle = async (articleId: number) => {
  try {
    const response = await api.get(
      `http://localhost:3000/currentArticle?articleId=${articleId}`
    );
    if (response.data) {
      return response.data[0];
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

const viewArticleList = async () => {
  try {
    const response = await api.get(`http://localhost:3000/currentArticle`);
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

export { sendNewArticle, viewCurrentArticle, viewArticleList };
