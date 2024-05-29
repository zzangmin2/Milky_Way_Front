import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MentoTag from "../../components/MentoTag";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  ArticleApplyStateTableWrap,
  ArticleDetailPageNavWrap,
  ArticleDetailWrap,
  ArticleInfoStateWrap,
  ArticleInfoSummaryWrap,
  ArticleIntrowrap,
  TopSection,
} from "./styles";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import ArticleTag from "../../components/ArticleTag";
import { useRecoilState } from "recoil";
import {
  ArticleApplyUserListState,
  ArticleCurrentState,
  ArticleDetailAuthorState,
  ArticleDetailIntroOrQnaTabState,
} from "../../utils/recoil/atom";
import ArticleDetailMenuModal from "../../components/ ArticleDetailMenuModal";
import { useNavigate, useParams } from "react-router-dom";
import {
  sendArticleApplyUser,
  viewArticleApplyUserList,
  viewCurrentArticle,
} from "../../utils/apimodule/article";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import { getTimeAgo } from "../../utils/utils";
import MemberListModal from "../../components/ArticleMemberListModal";
import SkeletonArticleDetail from "../../utils/skeleton/SkeletonArticleDetail";
import { toast } from "react-toastify";
import { ArticleApplyState } from "../../typings/db";

const ArticleDetail = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // const openModalMemberCareer = () => {
  //   setModalOpen(true);
  // };

  const handleModalState = () => {
    setModalOpen(!modalOpen);
  };

  //현재 로그인 된 사용자가 작성한 게시물인지 판별 상태
  const [articleDetailAuthorState, setArticleDetailAuthorState] =
    useRecoilState(ArticleDetailAuthorState);

  // 현재 페이지에서 보여주고 있는 article 데이터
  const [articleCurrentState, setArticleCurrentState] =
    useRecoilState(ArticleCurrentState);

  // 소개 / QnA 탭 상태
  const [articleDetailIntroOrQnaState, setArticleDetailIntroOrQnaState] =
    useRecoilState(ArticleDetailIntroOrQnaTabState);

  //현재 게시물 지원자 리스트 상태
  const [articleApplyUserListState, setArticleApplyUserListState] =
    useRecoilState(ArticleApplyUserListState);

  const { articleId } = useParams();

  // 마운트 시 해당 article 불러옴
  useEffect(() => {
    loadCurrentArticle();
  }, []);

  // 지원 리스트 상태 변경 될 때마다 새로 불러옴
  useEffect(() => {
    if (articleCurrentState && articleCurrentState.articleId) {
      articleApplyUserList();
    }
  }, [articleCurrentState]);

  // 해당 article 불러오는 함수
  const loadCurrentArticle = async () => {
    try {
      if (articleId) {
        const result = await viewCurrentArticle(parseInt(articleId));

        if (result) {
          const newResult = {
            articleId: result.article_no,
            articleMemberNo: result.member.memberNo,
            articleMemberName: result.member.memberName,
            articleType: result.articleType,
            articleTitle: result.title,
            articleContent: result.content,
            articleLikes: result.likes,
            articleApply: result.apply,
            articleApplyNow: result.applyNow,
            articleStartDay: result.startDay,
            articleEndDay: result.endDay,
            articleRecruitmentState: result.recruit,
            articleMentorNeeded: result.findMentor,
            articleMentorTag: result.mentorTag,
            isAuthor: result.isAuthor,
          };
          console.log(newResult);
          setArticleCurrentState(newResult);
          setArticleDetailAuthorState(newResult.isAuthor);
          setLoading(false);
        } else {
          throw result;
        }
      }
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
      setLoading(false);
      toast.error("정보를 불러오는 중에\n 오류가 발생했습니다", {
        onClose: () => navigate(-1),
      });
    }
  };

  //article 지원하기 함수
  const articleApplyUser = async () => {
    try {
      if (articleCurrentState && articleCurrentState.articleRecruitmentState) {
        await sendArticleApplyUser(articleCurrentState.articleId);
        toast.success("지원 성공!");
        await articleApplyUserList();
      } else {
        toast.error("모집이 완료된 게시물입니다.");
      }
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
      toast.error("오류가 발생했습니다. 다시 시도해주세요");
    }
  };

  //article 지원자 리스트 조회 함수
  const articleApplyUserList = async () => {
    try {
      if (articleCurrentState.articleId >= 1) {
        const result = await viewArticleApplyUserList(
          articleCurrentState.articleId
        );

        console.log(result);
        setArticleApplyUserListState(result);
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
                  <div className="articleLike">
                    <FontAwesomeIcon icon={faStar} />
                    <p>{articleCurrentState.articleLikes}</p>
                  </div>
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
                <>
                  <ArticleIntrowrap>
                    {articleCurrentState.articleMentorTag &&
                    articleCurrentState.articleMentorTag.length >= 1 ? (
                      <p className="mentorTagTitle">우리에게 필요한 멘토는?</p>
                    ) : (
                      <></>
                    )}
                    <div className="mentorTagWrapper">
                      {articleCurrentState.articleMentorTag &&
                      articleCurrentState.articleMentorTag.length >= 1 ? (
                        articleCurrentState.articleMentorTag
                          .split("#")
                          .filter((tag: any) => tag !== "")
                          .map((tag: any, idx: any) => {
                            return (
                              <p className="mentorTag" key={idx}>
                                #{tag}
                              </p>
                            );
                          })
                      ) : (
                        <></>
                      )}
                    </div>
                    <p>{articleCurrentState.articleContent}</p>
                  </ArticleIntrowrap>
                  {!articleDetailAuthorState ? (
                    <div className="buttonWrap">
                      <Button
                        text={
                          articleCurrentState.articleRecruitmentState
                            ? `${
                                articleCurrentState.articleType === "study"
                                  ? "스터디"
                                  : "프로젝트"
                              } 신청하기`
                            : "모집이 완료된 게시물입니다. "
                        }
                        buttonState={
                          articleCurrentState.articleRecruitmentState
                            ? ""
                            : "inactive"
                        }
                        onClick={articleApplyUser}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <section style={{ marginBottom: "100px" }}>
                    <h3>스터디 신청현황</h3>
                    <ArticleApplyStateTableWrap>
                      <div className="tableRow tableRowTop">
                        <div className="tableCell">번호</div>
                        <div className="tableCell">신청자명</div>
                        <div className="tableCell">신청일</div>
                        <div className="tableCell">상태</div>
                      </div>
                      {articleDetailAuthorState &&
                      articleApplyUserListState.length >= 1 ? (
                        articleApplyUserListState.map(
                          (applicant: any, idx: any) => {
                            return (
                              <div className="tableRow" key={idx}>
                                <div className="tableCell">{applicant.id}</div>
                                <div className="tableCell">
                                  {applicant.applicantName}
                                </div>
                                <div className="tableCell">
                                  {applicant.applicationDate}
                                </div>
                                <div
                                  className="tableCell"
                                  onClick={handleModalState}
                                >
                                  {applicant.status}
                                </div>
                              </div>
                            );
                          }
                        )
                      ) : articleDetailAuthorState ? (
                        <div className="applicantMessage">
                          <p>아직 없네요..</p>
                        </div>
                      ) : (
                        <>
                          <div className="applicantMessage">
                            스터디 / 프로젝트 신청현황은
                            <br /> 게시물 작성자와 신청자만 확인할 수 있습니다.
                            <br /> <br />
                            <b>
                              본 스터디 / 프로젝트와 함께하는 팀원이 궁금하다면
                              <br /> 지금 바로 신청하세요 !
                            </b>
                          </div>
                        </>
                      )}
                    </ArticleApplyStateTableWrap>
                  </section>
                </>
              ) : (
                <div>
                  Q&A 기능은 열심히 개발 중입니다!
                  <br />
                  조금만 기다려주세요!
                </div>
              )}
              {modalOpen && (
                <MemberListModal
                  show={modalOpen}
                  handleClose={handleModalState}
                />
              )}
            </ArticleDetailWrap>
          )}
        </>
      )}
    </>
  );
};

export default ArticleDetail;
