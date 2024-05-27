import { useRecoilState } from "recoil";
import {
  ArticleCurrentState,
  articleDetailModalClickState,
} from "../../utils/recoil/atom";
import { ArticleDetailModal } from "./styles";
import { useEffect } from "react";
import {
  deleteCurrentArticle,
  editCurrentArticle,
} from "../../utils/apimodule/article";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

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
          toast.success("수정 완료!");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          toast.error("수정 실패");
          throw new Error("수정 실패");
        }
      }
    } catch (error: any) {
      console.log(`실패: ${error.message}`);
    }

    setArticleDetailModalState(false);
  };

  // article 삭제 눌렀을 때
  const handleArticleDeleteClick = async () => {
    try {
      if (articleId) {
        const result = await deleteCurrentArticle(parseInt(articleId));

        if (result.success) {
          toast.success("삭제 성공!");
          navigate(`/home/articlelist`);
        } else {
          toast.error("삭제 실패");

          throw new Error("삭제 실패");
        }
      }
    } catch (error: any) {
      console.log(`실패: ${error.message}`);
    }

    setArticleDetailModalState(false);
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
