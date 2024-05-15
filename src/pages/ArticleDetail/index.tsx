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
import { useNavigate, useParams } from "react-router-dom";
import {
  sendArticleApplyUser,
  viewCurrentArticle,
} from "../../utils/apimodule/article";
import ArticleDetailMenuModal from "../../components/ ArticleDetailMenuModal";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const ArticleDetail = () => {
  //현재 페이지에서 보여주고 있는 article 데이터
  const [articleCurrentState, setArticleCurrentState] =
    useRecoilState(ArticleCurrentState);

  //소개 / QnA탭 상태
  const [articleDetailIntroOrQnaState, setArticleDetailIntroOrQnaState] =
    useRecoilState(articleDetailIntroOrQnaTabState);

  const { articleId } = useParams();

  // 마운트 시 해당 article 불러옴
  useEffect(() => {
    loadCurrentArticle();
  }, []);

  // 해당 article 불러오는 함수
  const loadCurrentArticle = async () => {
    try {
      if (articleId) {
        const result = await viewCurrentArticle(parseInt(articleId));

        if (result) {
          setArticleCurrentState({
            articleId: result.article_no,
            articleMemberId: "testuser",
            articleType: result.articleType,
            articleTitle: result.title,
            articleContent: result.content,
            articleLikes: result.likes,
            articleApply: result.apply,
            articleApplyNow: result.applyNow,
            articleStartDay: result.startDay,
            articleEndDay: result.endDay,
            articleRecruitmentState: result.recurit,
            articleMentorNeeded: result.findMentor,
            articleMentorTag: result.metorTag,
            articleApplyState: [
              {
                id: 1,
                applicantName: "김복이",
                applicationDate: "2024-01-22",
                status: "선정",
              },
              {
                id: 2,
                applicantName: "김마니",
                applicationDate: "2024-01-29",
                status: "신청",
              },
              {
                id: 3,
                applicantName: "김정민",
                applicationDate: "2024-01-25",
                status: "반려",
              },
            ],
          });
        } else {
          throw result;
        }
      }
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
    }
  };

  // 게시물 시간과 현재 시간 사이의 간격 표현 함수
  const getTimeAgo = (dateTime: string) => {
    const now = moment();
    const targetDateTime = moment(dateTime);

    const diffInMinutes = now.diff(targetDateTime, "minutes");
    const diffInHours = now.diff(targetDateTime, "hours");
    const diffInDays = now.diff(targetDateTime, "days");

    if (diffInMinutes < 60) {
      return `${diffInMinutes} 분 전`;
    } else if (diffInHours < 24) {
      return `${diffInHours} 시간 전`;
    } else if (diffInDays < 14) {
      return `${diffInDays} 일 전`;
    } else {
      return targetDateTime.format("YYYY-MM-DD");
    }
  };

  // 소개 / qna 탭 클릭 함수
  const handleTabClick = (tab: string) => {
    setArticleDetailIntroOrQnaState(tab);
  };

  return (
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
                  articleDetailIntroOrQnaState === "intro" ? "activeTab" : ""
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
                {articleCurrentState.articleMentorTag.length >= 1 && (
                  <p className="mentorTagTitle">우리에게 필요한 멘토는?</p>
                )}
                <div className="mentorTagWrapper">
                  {articleCurrentState.articleMentorTag.length >= 1 &&
                    articleCurrentState.articleMentorTag
                      .split("#")
                      .filter((tag) => tag !== "")
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
                  onClick={() => {
                    sendArticleApplyUser(articleCurrentState.articleId);
                  }}
                />
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
                  {articleCurrentState.articleApplyState.length >= 1 ? (
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
                            <div className="tableCell">{applicant.status}</div>
                          </div>
                        );
                      }
                    )
                  ) : (
                    <>
                      <div className="noApplicantMessage">아직 없네요 ..</div>
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
        </ArticleDetailWrap>
      )}
    </>
  );
};

export default ArticleDetail;
