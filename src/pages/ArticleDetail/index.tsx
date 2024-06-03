import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MentoTag from "../../components/MentoTag";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  ArticleDetailPageNavWrap,
  ArticleDetailWrap,
  ArticleInfoStateWrap,
  ArticleInfoSummaryWrap,
  ArticleLikeWrap,
  TopSection,
} from "./styles";
import { useEffect, useState } from "react";
import ArticleTag from "../../components/ArticleTag";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  ArticleApplyUserListState,
  ArticleApplyUserResumeModalState,
  ArticleCurrentState,
  ArticleDetailIntroOrQnaTabState,
  UserArticleInteractionState,
} from "../../utils/recoil/atom";
import ArticleDetailMenuModal from "../../components/ ArticleDetailMenuModal";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteArticleLike,
  sendArticleApplyUser,
  sendArticleLike,
  viewArticleApplyUserList,
  viewCurrentArticle,
} from "../../utils/apimodule/article";
import { getTimeAgo } from "../../utils/utils";
import MemberListModal from "../../components/ArticleMemberListModal";
import SkeletonArticleDetail from "../../utils/skeleton/SkeletonArticleDetail";
import { toast } from "react-toastify";
import { ArticleApplyState } from "../../typings/db";
import ArticleIntroContainer from "../../components/ArticleIntroContainer";

const ArticleDetail = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //게시물 상세 접속 시 사용자 상태 (작성, 좋아요, 지원 여부)
  const [userArticleInteractionState, setUserArticleInteractionState] =
    useRecoilState(UserArticleInteractionState);

  // 현재 페이지에서 보여주고 있는 article 데이터
  const [articleCurrentState, setArticleCurrentState] =
    useRecoilState(ArticleCurrentState);

  // 소개 / QnA 탭 상태
  const [articleDetailIntroOrQnaState, setArticleDetailIntroOrQnaState] =
    useRecoilState(ArticleDetailIntroOrQnaTabState);

  //현재 게시물 지원자 리스트 상태
  const setArticleApplyUserListState = useSetRecoilState(
    ArticleApplyUserListState
  );

  //현재 지원자 리스트 이력서 모달 상태
  const [articleApplyUserResumeModalState] = useRecoilState(
    ArticleApplyUserResumeModalState
  );

  const { articleId } = useParams();

  // 마운트 시 해당 article 불러옴
  useEffect(() => {
    loadArticleData();
  }, []);

  const loadArticleData = async () => {
    try {
      if (articleId) {
        const [articleResult, applyUserListResult] = await Promise.all([
          viewCurrentArticle(parseInt(articleId)),
          viewArticleApplyUserList(parseInt(articleId)),
        ]);

        if (articleResult) {
          const newResult = {
            articleId: articleResult.article_no,
            articleMemberNo: articleResult.member.memberNo,
            articleMemberName: articleResult.member.memberName,
            articleType: articleResult.articleType,
            articleTitle: articleResult.title,
            articleContent: articleResult.content,
            articleLikes: articleResult.likes,
            articleApply: articleResult.apply,
            articleApplyNow: articleResult.applyNow,
            articleStartDay: articleResult.startDay,
            articleEndDay: articleResult.endDay,
            articleRecruitmentState: articleResult.recruit,
            articleMentorNeeded: articleResult.findMentor,
            articleMentorTag: articleResult.mentorTag,
            isAuthor: articleResult.isAuthor,
            isApplier: articleResult.isApplier,
            isLike: articleResult.isLike,
          };
          console.log(newResult);
          setArticleCurrentState(newResult);
          setUserArticleInteractionState({
            isAuthor: articleResult.isAuthor,
            isLike: articleResult.isLike,
            isApplier: articleResult.isApplier,
          });
          setLoading(false);
        } else {
          throw articleResult;
        }

        console.log(applyUserListResult);
        setArticleApplyUserListState(applyUserListResult);
      }
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
      setLoading(false);
      toast.error("정보를 불러오는 중에\n 오류가 발생했습니다", {
        onClose: () => navigate(-1),
      });
    }
  };

  //게시물 찜꽁 함수
  const handleArticleLike = async () => {
    try {
      //찜이 안 눌러져있는 상태인 경우 -> 찜등록
      if (articleId && !userArticleInteractionState.isLike) {
        const result = await sendArticleLike(parseInt(articleId));
        setArticleCurrentState((prev: any) => ({
          ...prev,
          articleLikes: prev.articleLikes + 1,
        }));

        setUserArticleInteractionState((prev) => ({
          ...prev,
          isLike: true,
        }));

        //중복 등록 방지
        if (result.error === 409) {
          setArticleCurrentState((prev: any) => ({
            ...prev,
            articleLikes: prev.articleLikes - 1,
          }));
          toast.error("이미 찜한 게시물입니다!");
          return;
        }
        return;
      }

      //찜이 눌러져 있는 경우 -> 찜 취소
      if (articleId && userArticleInteractionState.isLike) {
        await deleteArticleLike(parseInt(articleId));
        setArticleCurrentState((prev: any) => ({
          ...prev,
          articleLikes: prev.articleLikes - 1,
        }));

        setUserArticleInteractionState((prev) => ({
          ...prev,
          isLike: false,
        }));

        console.log("취소");
        return;
      }
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
      toast.error("오류가 발생했습니다. 다시 시도해주세요");
    }
  };

  // 소개 / QnA 탭 클릭 함수
  const handleTabClick = (tab: string) => {
    setArticleDetailIntroOrQnaState(tab);
  };

  return (
    <>
      {loading ? (
        <SkeletonArticleDetail />
      ) : (
        <>
          <ArticleDetailMenuModal />
          {articleCurrentState.articleId > 0 && (
            <ArticleDetailWrap>
              <TopSection>
                <ArticleInfoStateWrap>
                  <div className="articleRecruitment">
                    {articleCurrentState.articleRecruitmentState ? (
                      <div className="articleRecruitmentState articleRecruitmentActive"></div>
                    ) : (
                      <div className="articleRecruitmentState"></div>
                    )}
                    <div>{articleCurrentState.articleEndDay} 까지</div>
                  </div>
                  <ArticleLikeWrap
                    $articleLike={userArticleInteractionState.isLike}
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      onClick={handleArticleLike}
                    />
                    <p>{articleCurrentState.articleLikes}</p>
                  </ArticleLikeWrap>
                </ArticleInfoStateWrap>
                <ArticleInfoSummaryWrap>
                  <div>
                    <ArticleTag
                      tagType={
                        articleCurrentState.articleType === "study"
                          ? "스터디"
                          : "프로젝트"
                      }
                    />
                    {articleCurrentState.articleMentorNeeded && <MentoTag />}
                  </div>
                  <div className="articleInfoSummary">
                    <h3>{articleCurrentState.articleTitle}</h3>
                    <div className="articleRecruiter">
                      <p>{articleCurrentState.articleMemberName}</p>
                    </div>
                    <div className="articleState">
                      <div>
                        <p>모집 현황</p>
                        <p>
                          {articleCurrentState.articleApplyNow}/
                          {articleCurrentState.articleApply}
                        </p>
                      </div>
                      <div>
                        <p>모집 시작일</p>
                        <p>{getTimeAgo(articleCurrentState.articleStartDay)}</p>
                      </div>
                    </div>
                  </div>
                </ArticleInfoSummaryWrap>
              </TopSection>
              <ArticleDetailPageNavWrap>
                <ul>
                  <li
                    className={
                      articleDetailIntroOrQnaState === "intro"
                        ? "activeTab"
                        : ""
                    }
                    onClick={() => handleTabClick("intro")}
                  >
                    {articleCurrentState.articleType === "study"
                      ? "스터디 소개"
                      : "프로젝트 소개"}
                  </li>
                  <li
                    className={
                      articleDetailIntroOrQnaState === "qna" ? "activeTab" : ""
                    }
                    onClick={() => handleTabClick("qna")}
                  >
                    Q&A
                  </li>
                </ul>
              </ArticleDetailPageNavWrap>
              {articleDetailIntroOrQnaState === "intro" ? (
                <ArticleIntroContainer />
              ) : (
                <div>
                  Q&A 기능은 열심히 개발 중입니다!
                  <br />
                  조금만 기다려주세요!
                </div>
              )}
              {articleApplyUserResumeModalState.modalState && (
                <MemberListModal />
              )}
            </ArticleDetailWrap>
          )}
        </>
      )}
    </>
  );
};

export default ArticleDetail;
