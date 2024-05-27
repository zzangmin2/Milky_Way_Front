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
  ArticleListSearchState,
  ArticleListTypeFilterState,
  ArticleListTypeState,
  ArticleRecruitmentOptionState,
  filteredArticleLatestOrPopularOptionListState,
  loadingStateAtom,
} from "../../utils/recoil/atom";
import { useNavigate } from "react-router-dom";
import { Article } from "../../typings/db";
import { toast } from "react-toastify";
import SkeletonArticleDetail from "../../utils/skeleton/SkeletonArticleDetail";
import SkeletonArticleList from "../../utils/skeleton/SkeletonArticleList";

const ArticleList = () => {
  // article 전체 리스트
  const setArticleListState = useSetRecoilState(ArticleListTypeState);

  //article 리스트 검색 기준
  const [articleListSearchState, setArticleListSearchState] = useRecoilState(
    ArticleListSearchState
  );
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

  // const [loading, setLoading] = useRecoilState(loadingStateAtom);
  const [loading, setLoading] = useState(true);

  //마운트 시 article리스트 불러오기!
  useEffect(() => {
    loadArticleList();
  }, []);

  //네비게이션 변경 함수
  const handleTabClick = (tab: string) => {
    setArticleListFilterState(tab);
  };

  //현재 article 데이터 불러오는 함수
  const loadArticleList = async () => {
    try {
      console.log(loading);
      const result = await viewArticleList();
      if (result) {
        const transformedData = result.map((item: any) => ({
          articleId: item.article_no,
          articleTitle: item.title,
          articleMentorNeeded: item.findMentor,
          articleEndDay: item.endDay,
          articleLikes: item.likes,
          articleRecruitmentState: item.recruit,
          articleApply: item.apply,
          articleApplyNow: item.applyNow,
          articleType: item.articleType,
        }));
        setArticleListState(transformedData);
        console.log(transformedData);
        setLoading(true);
      }
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ArticleListContainer>
        <section>
          <Input
            placeholder="스터디/프로젝트를 찾아 보세요!"
            value={articleListSearchState}
            setValue={setArticleListSearchState}
            onEnterPress={() => {
              toast.info("검색 기능은 개발 중입니다.");
              setArticleListSearchState("");
            }}
          />
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

          {/* 카테고리 */}
          {/* <select name="" id="">
            <option value="">카테고리</option>
            <option value="">언어</option>
          </select> */}
        </ArticleFilterWrap>
        <ArticleListWrap>
          <div>
            <select
              name=""
              id=""
              value={articleLatestOrPopularOptionState}
              onChange={(e) =>
                // setArticleLatestOrPopularOptionState(e.target.value)
                // 찜기능 미완성 -> 인기순 정렬 불가능
                setArticleLatestOrPopularOptionState("latest")
              }
            >
              <option value="latest">최신순</option>
              <option value="popular">인기순</option>
            </select>
          </div>
          <ArticleAddButton onClick={() => navigate("/articleregister")}>
            +
          </ArticleAddButton>

          {loading ? (
            <SkeletonArticleList />
          ) : (
            <ArticleInfoCardWrap>
              {filteredArticleLatestOrPopularOptionList.length >= 1 ? (
                filteredArticleLatestOrPopularOptionList?.map(
                  (article: Article, idx: any) => {
                    return (
                      <ArticleInfoCard
                        key={idx}
                        navigateRoute={`/articledetail/${article.articleId}`}
                        articleType={article.articleType}
                        articleRecruitmentState={
                          article.articleRecruitmentState
                        }
                        articleMentorNeeded={article.articleMentorNeeded}
                        articleTitle={article.articleTitle}
                        articleApply={article.articleApply}
                        articleCurrentApply={article.articleApplyNow}
                        articleLikes={article.articleLikes}
                        articleEndDay={article.articleEndDay}
                        // articleStartDay -> 아직 api에서 전달 x
                        articleStartDay={article.articleStartDay}
                      />
                    );
                  }
                )
              ) : (
                <div>게시물이 없습니다...</div>
              )}
            </ArticleInfoCardWrap>
          )}
        </ArticleListWrap>
      </ArticleListContainer>
    </>
  );
};

export default ArticleList;
