import { useSetRecoilState } from "recoil";
import api from "../api/axiosInstance";
import { isLoggedInUserName } from "../recoil/atom";

interface article {
  articleType: string;
  articleApply: number;
  articleMentorNeeded: boolean;
  mentorTag: string;
  articleEndDay: string;
  articleTitle: string;
  articleContent: string;
}

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

const sendNewArticle = async (newArticleData: article) => {
  const userName: any = useSetRecoilState(isLoggedInUserName);
  try {
    const response = await api.post("", {
      articleMemberId: userName, // 추후 id로 수정
      articleType: newArticleData.articleType,
      articleApply: newArticleData.articleApply,
      findMentor: newArticleData.articleMentorNeeded,
      mentorTag: newArticleData.mentorTag,
      articleEndDay: newArticleData.articleEndDay,
      articleTitle: newArticleData.articleTitle,
      articleContent: newArticleData.articleContent,
    });

    if (response.data.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

export { sendNewArticle };
