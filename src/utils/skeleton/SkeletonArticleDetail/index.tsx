// SkeletonArticleDetail.tsx
import React from "react";
import {
  SkeletonBody,
  SkeletonHeader,
  SkeletonText,
  SkeletonWrapper,
} from "../styles";
import { ArticleDetailPageNavWrap } from "../../../pages/ArticleDetail/styles";
import { useRecoilState } from "recoil";
import {
  ArticleCurrentState,
  articleDetailIntroOrQnaTabState,
} from "../../recoil/atom";

const SkeletonArticleDetail = () => {
  //현재 페이지에서 보여주고 있는 article 데이터
  const [articleCurrentState, setArticleCurrentState] =
    useRecoilState(ArticleCurrentState);

  //소개 / QnA탭 상태
  const [articleDetailIntroOrQnaState, setArticleDetailIntroOrQnaState] =
    useRecoilState(articleDetailIntroOrQnaTabState);

  // 소개 / qna 탭 클릭 함수
  const handleTabClick = (tab: string) => {
    setArticleDetailIntroOrQnaState(tab);
  };

  return (
    <SkeletonWrapper>
      <div style={{ marginBottom: "20px" }}>
        <SkeletonHeader />
        <SkeletonHeader />
        <SkeletonText />
        <SkeletonText />
      </div>
      <ArticleDetailPageNavWrap>
        <ul>
          <li className={"activeTab"} onClick={() => handleTabClick("intro")}>
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
      <div style={{ marginTop: "20px" }}>
        <SkeletonBody />
      </div>
    </SkeletonWrapper>
  );
};

export default SkeletonArticleDetail;
