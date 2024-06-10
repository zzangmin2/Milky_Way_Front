import {
  BottomSection,
  BottomSectionRadiusBox,
  HomeContentContainer,
  Section,
  TopSection,
} from "./styles";

import ArticleInfoCard from "../../components/ArticleInfoCard";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { ArticleDibsStateSelector } from "../../utils/recoil/atom";
import { useEffect } from "react";
import { viewMyDibsInfo } from "../../utils/apimodule/article";

const Home = () => {
  const userName = localStorage.getItem("memberName");
  const navigate = useNavigate();
  const [dibs, setDibs] = useRecoilState(ArticleDibsStateSelector);

  useEffect(() => {
    loadMyDibsInfo();
  }, []);

  const loadMyDibsInfo = async () => {
    try {
      const result = await viewMyDibsInfo();
      console.log(result.data);

      setDibs(result.data);
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
    }
  };

  return (
    <>
      <Section>
        <TopSection>
          <div>
            <h2>안녕하세요 {userName}님!</h2>
            <p>학생회원</p>
          </div>
          <img
            className="milkywayCharacter"
            src="/images/milkycharacter.svg"
            alt=""
          />
        </TopSection>
        <BottomSectionRadiusBox>
          <div />
        </BottomSectionRadiusBox>
        <BottomSection>
          <HomeContentContainer>
            <div
              className="ContentButton"
              onClick={() => navigate("/home/articlelist")}
            >
              <div className="ContentButtonIcon">🧐</div>
              <p>나에게 맞는</p>
              스터디/프로젝트 <br /> 찾아보기
            </div>
            <div
              className="ContentButton"
              onClick={() => navigate("/articleregister")}
            >
              <div className="ContentButtonIcon">✏️</div>
              <p>내가 직접</p>
              스터디/프로젝트
              <br /> 팀원 모집하기
            </div>
          </HomeContentContainer>
          <HomeContentContainer>
            <img
              className="homeBanner"
              src="/images/homeBanner.png"
              alt="밀키웨이에 대해 더 자세히 알아보세요"
              onClick={() =>
                window.open(
                  "https://lush-megaraptor-085.notion.site/milkyway-fe9c98cb00c24930b54a0b4a414ca6be?pvs=4"
                )
              }
            />
          </HomeContentContainer>

          <HomeContentContainer>
            <div>
              <div className="ContentTitleContainer">
                <h3>내가 찜한 스터디 / 프로젝트</h3>
                {dibs.length >= 1 ? (
                  <button onClick={() => navigate("/home/myinfo")}>
                    전체보기
                  </button>
                ) : (
                  <button onClick={() => navigate("/home/articlelist")}>
                    찜하러 가기
                  </button>
                )}
              </div>

              <div className="dibsContainer">
                {dibs.length >= 1 ? (
                  dibs.map((data: any, idx: any) => {
                    return (
                      <ArticleInfoCard
                        key={idx}
                        navigateRoute={`/articledetail/${data.cardArticle_no}`}
                        articleType={data.cardArticleType}
                        articleRecruitmentState={data.cardRecruit}
                        articleMentorNeeded={data.cardFindMentor}
                        articleTitle={data.cardTitle}
                        articleApply={data.cardApply}
                        articleCurrentApply={data.cardApplyNow}
                        articleLikes={data.cardLikes}
                        articleEndDay={data.cardEndDay}
                        articleStartDay={data.cardStartDay}
                      />
                    );
                  })
                ) : (
                  <div className="dibsEmptyMessage">
                    아직 찜한 게시물이 없네요! <br />
                  </div>
                )}
              </div>
            </div>
          </HomeContentContainer>
        </BottomSection>
      </Section>
    </>
  );
};

export default Home;
