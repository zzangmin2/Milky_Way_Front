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
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ArticleCurrentState } from "../../utils/recoil/atom";
import { useParams } from "react-router-dom";
import { viewCurrentArticle } from "../../utils/apimodule/article";

const ArticleDetail = () => {
  const articleData = useRecoilValue(ArticleCurrentState);
  const setArticleCurrentState = useSetRecoilState(ArticleCurrentState);

  const [activeTab, setActiveTab] = useState("intro");
  const { articleId } = useParams();

  useEffect(() => {
    loadCurrentArticle();
    console.log(articleId);
  }, []);

  useEffect(() => {
    console.log("Article data updated:", articleData);
  }, [articleData]);

  const loadCurrentArticle = async () => {
    try {
      if (articleId) {
        const result = await viewCurrentArticle(parseInt(articleId));
        console.log(result);
        if (result) {
          console.log("불러오기 성공!");
          console.log(result);
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

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <ArticleDetailWrap>
        <TopSection>
          <ArticleInfoStateWrap>
            <div className="articlePeriod">
              <div className="articlePeriodState"></div>

              <div>{articleData.articleEndDay} 까지</div>
            </div>
            <div className="articleLike">
              <FontAwesomeIcon icon={faStar} />
              <p>{articleData.articleLikes}</p>
            </div>
          </ArticleInfoStateWrap>
          <ArticleInfoSummaryWrap>
            <div>
              <ArticleTag tagType="스터디" />
              <MentoTag />
            </div>
            <div className="articleInfoSummary">
              <h3>{articleData.articleTitle}</h3>
              <div className="articleRecruiter">
                <p>컴퓨터정보학부</p>
                <p>{articleData.articleMemberId}</p>
              </div>
              <div className="articleState">
                <div>
                  <p>모집 현황</p>
                  <p>
                    {articleData.articleApplyNow}/{articleData.articleApply}
                  </p>
                </div>
                <div>
                  <p>모집 시작 날짜</p>
                  <p>{articleData.articleStartDay}</p>
                </div>
              </div>
            </div>
          </ArticleInfoSummaryWrap>
        </TopSection>
        <ArticleDetailPageNavWrap>
          <ul>
            <li
              className={activeTab === "intro" ? "activeTab" : ""}
              onClick={() => handleTabClick("intro")}
            >
              스터디 소개
            </li>
            <li
              className={activeTab === "qna" ? "activeTab" : ""}
              onClick={() => handleTabClick("qna")}
            >
              Q&A
            </li>
          </ul>
        </ArticleDetailPageNavWrap>
        <ArticleIntrowrap>
          <p>우리에게 필요한 멘토는?</p>
          <p>
            {articleData.articleMentorTag
              ? articleData.articleMentorTag.map((tag, idx) => {
                  return <p>#{tag}</p>;
                })
              : ""}
          </p>
          <p>{articleData.articleContent}</p>
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
            {articleData.articleApplyState.map((applicant, idx) => {
              return (
                <div className="tableRow" key={idx}>
                  <div className="tableCell">{applicant.id}</div>
                  <div className="tableCell">{applicant.applicantName}</div>
                  <div className="tableCell">{applicant.applicationDate}</div>
                  <div className="tableCell">{applicant.status}</div>
                </div>
              );
            })}
          </ArticleApplyStateTableWrap>
        </section>
      </ArticleDetailWrap>
    </>
  );
};

export default ArticleDetail;
