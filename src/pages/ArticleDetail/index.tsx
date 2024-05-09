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
  ArticleCurrentState,
  articleDetailIntroOrQnaTabState,
} from "../../utils/recoil/atom";
import Modal from "../../components/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { viewCurrentArticle } from "../../utils/apimodule/article";
import ArticleDetailMenuModal from "../../components/ ArticleDetailMenuModal";

const ArticleDetail = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModalMemberCareer = () => {
    setModalOpen(true);
  };
  //현재 페이지에서 보여주고 있는 article 데이터
  const [articleCurrentState, setArticleCurrentState] =
    useRecoilState(ArticleCurrentState);

  //소개 / QnA탭 상태
  const [articleDetailIntroOrQnaState, setArticleDetailIntroOrQnaState] =
    useRecoilState(articleDetailIntroOrQnaTabState);

  const { articleId } = useParams();

  const navigate = useNavigate();

  // 마운트 시 해당 article 불러옴
  useEffect(() => {
    console.log(articleId);
    loadCurrentArticle();
  }, []);

  //모두/스터디/프로젝트 네비게이션 변경 시
  useEffect(() => {
    navigate(`/articledetail/${articleId}/${articleDetailIntroOrQnaState}`);
  }, [articleDetailIntroOrQnaState]);

  // 해당 article 불러오는 함수
  const loadCurrentArticle = async () => {
    try {
      if (articleId) {
        const result = await viewCurrentArticle(parseInt(articleId));

        if (result) {
          console.log("불러오기 성공!");
          setArticleCurrentState({
            articleId: result.articleId,
            articleMemberId: result.articleMemberId,
            articleType: result.articleType,
            articleTitle: result.articleTitle,
            articleContent: result.articleContent,
            articleLikes: result.articleLikes,
            articleApply: result.articleApply,
            articleApplyNow: result.articleApplyNow,
            articleStartDay: result.articleStartDay,
            articleEndDay: result.articleEndDay,
            articleRecruitmentState:
              new Date(result.articleEndDay).getTime() - new Date().getTime() >
              0
                ? true
                : false,
            articleMentorNeeded: result.articleMentorNeeded,
            articleMentorTag: result.articleMentorTag,
            articleApplyState: result.articleApplyState,
          });
        } else {
          throw result;
        }
      }
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
    }
  };

  //
  const handleTabClick = (tab: string) => {
    setArticleDetailIntroOrQnaState(tab);
  };

  return (
    <>
      <ArticleDetailMenuModal />
      {articleCurrentState && (
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
                <ArticleTag tagType="스터디" />
                <MentoTag />
              </div>
              <div className="articleInfoSummary">
                <h3>{articleCurrentState.articleTitle}</h3>
                <div className="articleRecruiter">
                  <p>컴퓨터정보학부</p>
                  <p>{articleCurrentState.articleMemberId}</p>
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
                    <p>모집 시작 날짜</p>
                    <p>{articleCurrentState.articleStartDay}</p>
                  </div>
                </div>
              </div>
            </ArticleInfoSummaryWrap>
          </TopSection>
          <ArticleDetailPageNavWrap>
            <ul>
              <li
                className={
                  articleDetailIntroOrQnaState === "intro" ? "activeTab" : ""
                }
                onClick={() => handleTabClick("intro")}
              >
                스터디 소개
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
                {articleCurrentState.articleMentorTag.length >= 1 ? (
                  <p className="mentorTagTitle">우리에게 필요한 멘토는?</p>
                ) : (
                  ""
                )}
                <div className="mentorTagWrapper">
                  {articleCurrentState.articleMentorTag.length >= 1 &&
                    articleCurrentState.articleMentorTag
                      .split("#")
                      .map((tag, idx) => {
                        return (
                          <p className="mentorTag" key={idx}>
                            #{tag}
                          </p>
                        );
                      })}
                </div>
                <p>{articleCurrentState.articleContent}</p>
              </ArticleIntrowrap>
              <div className="buttonWrap">
                <Button text="참여 신청하기" />
              </div>
              <section style={{ marginBottom: "100px" }}>
                <h3>스터디 신청현황</h3>
                <ArticleApplyStateTableWrap>
                  <div className="tableRow tableRowTop">
                    <div className="tableCell">번호</div>
                    <div className="tableCell">신청자명</div>
                    <div className="tableCell">신청일</div>
                    <div className="tableCell">상태</div>
                  </div>
                  {articleCurrentState.articleApplyState ? (
                    articleCurrentState.articleApplyState.map(
                      (applicant, idx) => {
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
                              onClick={openModalMemberCareer}
                            >
                              {applicant.status}
                            </div>
                          </div>
                        );
                      }
                    )
                  ) : (
                    <div>아직 없네요 ..</div>
                  )}
                </ArticleApplyStateTableWrap>
              </section>{" "}
            </>
          ) : (
            <div>
              Q&A 기능은 열심히 개발 중입니다!
              <br />
              조금만 기다려주세요!
            </div>
          )}
          {modalOpen ? (
            <>
              <Modal
                show={false}
                handleClose={function (): void {
                  throw new Error("Function not implemented.");
                }}
                modalType={undefined}
              ></Modal>
            </>
          ) : (
            <></>
          )}
        </ArticleDetailWrap>
      )}
    </>
  );
};

export default ArticleDetail;
