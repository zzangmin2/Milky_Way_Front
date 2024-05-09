import { useRecoilState } from "recoil";
import { articleDetailModalClickState } from "../../utils/recoil/atom";
import { ArticleDetailModal } from "./styles";
import { useEffect } from "react";
import {
  deleteCurrentArticle,
  editCurrentArticle,
} from "../../utils/apimodule/article";
import { useNavigate, useParams } from "react-router-dom";

const ArticleDetailMenuModal = () => {
  //모달 클릭 상태
  const [articleDetailModalState, setArticleDetailModalState] = useRecoilState(
    articleDetailModalClickState
  );

  const navigate = useNavigate();
  const { articleId } = useParams();

  // article 수정 ( 미리 모집 완료 ) 버튼 눌렀을 때
  const handleArticleEditClick = async () => {
    try {
      if (articleId) {
        const result = await editCurrentArticle(parseInt(articleId));
        if (result.success) {
          alert("수정 완료!");
          navigate(`/home/articlelist/all`);
        } else {
          throw new Error("수정 실패");
        }
      }
    } catch (error: any) {
      console.log(`실패: ${error.message}`);
    }
  };

  // article 삭제 눌렀을 때
  const handleArticleDeleteClick = async () => {
    try {
      if (articleId) {
        const result = await deleteCurrentArticle(parseInt(articleId));

        if (result.success) {
          alert("삭제 완료!");
          navigate(`/home/articlelist/all`);
        } else {
          throw new Error("삭제 실패");
        }
      }
    } catch (error: any) {
      console.log(`실패: ${error.message}`);
    }
  };

  return (
    <>
      <ArticleDetailModal isopen={articleDetailModalState ? true : undefined}>
        <div onClick={handleArticleEditClick}>스터디/프로젝트 모집 완료</div>
        <div onClick={handleArticleDeleteClick}>
          스터디/프로젝트 모집 글 삭제
        </div>
      </ArticleDetailModal>
    </>
  );
};

export default ArticleDetailMenuModal;
