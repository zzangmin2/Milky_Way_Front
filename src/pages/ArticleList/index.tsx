import { useEffect, useState } from "react";
import Input from "../../components/Input";
import {
  ArticleAddButton,
  ArticleFilterWrap,
  ArticleInfoCardWrap,
  ArticleListWrap,
  ArticleProjectTypeNavWrap,
  ArticleListContainer,
} from "./styles";
import ArticleInfoCard from "../../components/ArticleInfoCard";
import { viewArticleList } from "../../utils/apimodule/article";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  ArticleLatestOrPopularOptionState,
  ArticleListTypeFilterState,
  ArticleListTypeState,
  ArticleRecruitmentOptionState,
  filteredArticleLatestOrPopularOptionListState,
} from "../../utils/recoil/atom";
import { useNavigate } from "react-router-dom";
import { Article } from "../../typings/db";

const ArticleList = () => {
  // article 전체 리스트
  const setArticleListState = useSetRecoilState(ArticleListTypeState);
  // article 타입 필터링 기준
  const [articleListFilterState, setArticleListFilterState] = useRecoilState(
    ArticleListTypeFilterState
  );

  //article 모집 상태 필터링 기준 (모집 중/모집 완료)
  const [recruitmentOptionState, setRecruitmentOptionState] = useRecoilState(
    ArticleRecruitmentOptionState
  );

  //article 정렬 방식 기준 (최신순/인기순)
  const [
    articleLatestOrPopularOptionState,
    setArticleLatestOrPopularOptionState,
  ] = useRecoilState(ArticleLatestOrPopularOptionState);

  //article 타입 + 모집 상태 + 정렬 상태에 따라 필터링 된 리스트
  const filteredArticleLatestOrPopularOptionList = useRecoilValue(
    filteredArticleLatestOrPopularOptionListState
  );
  const navigate = useNavigate();

  useEffect(() => {
    loadArticleList();
  }, []);

  //모두/스터디/프로젝트 네비게이션 변경 시
  useEffect(() => {
    navigate(`/home/articlelist/${articleListFilterState}`);
  }, [articleListFilterState]);

  //네비게이션 변경 함수
  const handleTabClick = (tab: string) => {
    setArticleListFilterState(tab);
  };

  //현재 article 데이터 불러오는 함수
  const loadArticleList = async () => {
    try {
      const result = await viewArticleList();
      if (result) {
        setArticleListState(result);
        console.log(result);
      }
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
    }
  };

  return (
    <>
      <ArticleListContainer>
        <section>
          <Input placeholder="스터디/프로젝트를 찾아 보세요!" />
        </section>

        <ArticleProjectTypeNavWrap>
          <ul>
            <li
              className={articleListFilterState === "all" ? "activeTab" : ""}
              onClick={() => handleTabClick("all")}
            >
              ALL
            </li>
            <li
              className={articleListFilterState === "study" ? "activeTab" : ""}
              onClick={() => handleTabClick("study")}
            >
              스터디
            </li>
            <li
              className={
                articleListFilterState === "project" ? "activeTab" : ""
              }
              onClick={() => handleTabClick("project")}
            >
              프로젝트
            </li>
          </ul>
        </ArticleProjectTypeNavWrap>

        <ArticleFilterWrap>
          <select
            name=""
            id=""
            value={recruitmentOptionState}
            onChange={(e) => setRecruitmentOptionState(e.target.value)}
          >
            <option value="all">전체</option>
            <option value="recruting">모집 중</option>
            <option value="recruitmentCompleted">모집 완료</option>
          </select>

          <select name="" id="">
            <option value="">카테고리</option>
            <option value="">언어</option>
          </select>
        </ArticleFilterWrap>
        <ArticleListWrap>
          <div>
            <select
              name=""
              id=""
              value={articleLatestOrPopularOptionState}
              onChange={(e) =>
                setArticleLatestOrPopularOptionState(e.target.value)
              }
            >
              <option value="latest">최신순</option>
              <option value="popular">인기순</option>
            </select>
          </div>
          <ArticleAddButton onClick={() => navigate("/articleregister")}>
            +
          </ArticleAddButton>

          <ArticleInfoCardWrap>
            {filteredArticleLatestOrPopularOptionList &&
              filteredArticleLatestOrPopularOptionList?.map(
                (article: Article, idx: any) => {
                  return (
                    <ArticleInfoCard
                      key={idx}
                      navigateRoute={`/articledetail/${article.articleId}/intro`}
                      articleType={article.articleType}
                      articleRecruitmentState={article.articleRecruitmentState}
                      articleMentorNeeded={article.articleMentorNeeded}
                      articleTitle={article.articleTitle}
                      articleApply={article.articleApply}
                      articleCurrentApply={article.articleApplyNow}
                      articleLikes={article.articleLikes}
                      articleEndDay={article.articleEndDay}
                    />
                  );
                }
              )}
          </ArticleInfoCardWrap>
        </ArticleListWrap>
      </ArticleListContainer>
    </>
  );
};

export default ArticleList;
