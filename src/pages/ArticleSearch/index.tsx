import { useState } from "react";
import Input from "../../components/Input";
import StudyInfoCard from "../../components/ArticleInfoCard";
import {
  ArticleAddButton,
  ArticleFilterWrap,
  ArticleInfoCardWrap,
  ArticleListWrap,
  ArticleProjectTypeNavWrap,
  ArticleSearchWrap,
} from "./styles";
import ArticleInfoCard from "../../components/ArticleInfoCard";

const ArticleSearch = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
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
            <ArticleInfoCard navigateRoute="/articledetail/1" />
            <ArticleInfoCard navigateRoute="/articledetail/1" />
            <ArticleInfoCard navigateRoute="/articledetail/1" />
            <ArticleInfoCard navigateRoute="/articledetail/1" />
            <ArticleInfoCard navigateRoute="/articledetail/1" />
            <ArticleInfoCard navigateRoute="/articledetail/1" />
          </ArticleInfoCardWrap>
        </ArticleListWrap>
      </ArticleSearchWrap>
    </>
  );
};

export default ArticleSearch;
