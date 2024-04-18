import { useEffect, useState } from "react";
import Input from "../../components/Input";
import {
  ArticleAddButton,
  ArticleFilterWrap,
  ArticleInfoCardWrap,
  ArticleListWrap,
  ArticleProjectTypeNavWrap,
  ArticleSearchWrap,
} from "./styles";
import ArticleInfoCard from "../../components/ArticleInfoCard";
import { viewArticleList } from "../../utils/apimodule/article";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  ArticleListFilterState,
  ArticleListState,
  filteredArticleListState,
} from "../../utils/recoil/atom";
import { useNavigate } from "react-router-dom";

const ArticleList = () => {
  const setArticleListState = useSetRecoilState(ArticleListState);
  const [articleListFilterState, setArticleListFilterState] = useRecoilState(
    ArticleListFilterState
  );

  const filteredArticleList = useRecoilValue(filteredArticleListState);
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
      }
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
    }
  };

  return (
    <>
      <ArticleSearchWrap>
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
          <select name="" id="">
            <option value="">모집 중</option>
            <option value="">모집 완료</option>
          </select>

          <select name="" id="">
            <option value="">카테고리</option>
            <option value="">언어</option>
          </select>
        </ArticleFilterWrap>
        <ArticleListWrap>
          <div>
            <select name="" id="">
              <option value="">최신순</option>
              <option value="">인기순</option>
            </select>
          </div>
          <ArticleAddButton>+</ArticleAddButton>

          <ArticleInfoCardWrap>
            {filteredArticleList &&
              filteredArticleList?.map((article, idx) => {
                return (
                  <ArticleInfoCard
                    key={idx}
                    navigateRoute={`/articledetail/${article.articleId}`}
                    articleType={article.articleType}
                    articleMentorNeeded={article.articleMentorNeeded}
                    articleTitle={article.articleTitle}
                    articleApply={article.articleApply}
                    articleCurrentApply={article.articleApplyNow}
                    articleLikes={article.articleLikes}
                    articleEndDay={article.articlEndDay}
                  />
                );
              })}
          </ArticleInfoCardWrap>
        </ArticleListWrap>
      </ArticleSearchWrap>
    </>
  );
};

export default ArticleList;
