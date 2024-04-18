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
import { useRecoilState } from "recoil";
import { ArticleListState } from "../../utils/recoil/atom";

const ArticleList = () => {
  const [articleListState, setArticleListState] =
    useRecoilState(ArticleListState);
  // const setArticleListState = useSetRecoilState(ArticleListState);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    loadArticleList();
  }, []);

  const loadArticleList = async () => {
    try {
      const result = await viewArticleList();
      if (result) {
        console.log(result);
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
              className={activeTab === "all" ? "activeTab" : ""}
              onClick={() => handleTabClick("all")}
            >
              ALL
            </li>
            <li
              className={activeTab === "study" ? "activeTab" : ""}
              onClick={() => handleTabClick("study")}
            >
              스터디
            </li>
            <li
              className={activeTab === "project" ? "activeTab" : ""}
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
            {articleListState &&
              articleListState?.map((article, idx) => {
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
