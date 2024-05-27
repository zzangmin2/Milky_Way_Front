import Button from "../../components/Button";
import {
  BottomSection,
  HomeContentContainer,
  Section,
  TopSection,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import ArticleInfoCard from "../../components/ArticleInfoCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { viewArticleList, viewMyCareer } from "../../utils/apimodule/article";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoggedInUserName } from "../../utils/recoil/atom";
const Home = () => {
  const userNameState = useSetRecoilState<any>(isLoggedInUserName);
  const userName = useRecoilValue<any>(isLoggedInUserName);
  const navigate = useNavigate();

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
        {/* <Button
          text={"스터디 / 프로젝트 등록"}
          
        /> */}
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
                <h3>내가 참여 중인 스터디 /프로젝트</h3>
                <button onClick={() => navigate("/home/myinfo")}>
                  전체보기
                </button>
              </div>

              {/* data 없을 때 */}
              {/* <div>
              <FontAwesomeIcon icon={faFaceSadTear} />
              <div>아직 없네요 ..</div>
              <div>스터디 / 프로젝트 찾으러 가기</div>
            </div> */}
              <ArticleInfoCard
                cardType="main"
                navigateRoute="/articledetail/1"
                articleType={""}
                articleMentorNeeded={false}
                articleTitle={"esfwsefwrge"}
                articleContent={"ewfewfewsfefw"}
                articleCurrentApply={0}
                articleApply={""}
                articleLikes={0}
                articleEndDay={""}
                articleRecruitmentState={false}
                articleStartDay={""}
              />
            </div>
          </HomeContentContainer>
        </BottomSection>
      </Section>
    </>
  );
};

export default Home;
