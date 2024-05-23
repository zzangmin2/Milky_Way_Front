import {
  BottomSection,
  Section,
  TopSection,
  InfoTitle,
  InfoNav,
  InfoProjectList,
  ArticleInfoCardWrap,
  LogoutText,
} from "./style";
import { useState, useEffect, Key } from "react";
import ArticleInfoCard from "../../components/ArticleInfoCard";
import Modal from "../../components/Modal";
import {
  viewMyApplyInfo,
  viewMyInfo,
  viewMyArticleInfo,
} from "../../utils/apimodule/article";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { userInfoStateSelector } from "../../utils/recoil/atom";
import ArticleApplyStateTable from "../../components/ArticleApplyStateTable";
import { ArticleCardStateSelector } from "../../utils/recoil/atom";
import { logout } from "../../utils/auth/auth";
import { ArticleCard } from "../../typings/db";

import MyInfoContent from "../../components/MyInfoContent";

const MyInfo = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [articleCurrentState, setArticleCurrentState] =
    useRecoilState<ArticleCard>(ArticleCardStateSelector);

  const infoValue = useSetRecoilState(userInfoStateSelector);

  const articleCardState = useSetRecoilState<ArticleCard>(
    ArticleCardStateSelector
  );
  const articleCardValue = useRecoilValue<ArticleCard>(
    ArticleCardStateSelector
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [additionalInfo, setAdditionalInfo] = useState<string>("");
  const [modalType, setModalType] = useState<string>("");

  /**
   * 로그아웃
   */
  const logoutEventClick = async () => {
    try {
      const result = await logout();
    } catch (error) {
      alert("로그아웃 실패...");
    }
  };

  /**
   * 유저정보불러옴
   */
  const userInfoData = async () => {
    try {
      const response: any = await viewMyInfo();
      const articleData: any = await viewMyArticleInfo();
      const applyData: any = await viewMyApplyInfo();
      const member = response.data;
      const article = articleData.data;
      const apply = applyData.data;

      console.log(article, apply);

      infoValue({
        userName: member.memberName,
        userEmail: member.memberEmail,
        userNumber: member.memberPhoneNum,
      });

      console.log(infoValue);
    } catch (error) {
      console.error("error", error);
    }
  };

  /**
   * 마운트시에 유저정보불러오고 setEditUser초기화
   */
  useEffect(() => {
    userInfoData();
  }, []);

  /**
   * articlelist상태 탭바
   * @param tab
   */
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleModalOpen = (additionalInfo: string) => {
    setIsModalOpen(true);
    setAdditionalInfo(additionalInfo);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Section>
        <TopSection>
          <MyInfoContent></MyInfoContent>
        </TopSection>
        <BottomSection>
          <InfoTitle>
            <div>스터디/프로젝트 관리</div>
          </InfoTitle>
          <InfoNav>
            <ul>
              <li
                className={activeTab === "all" ? "activeTab" : ""}
                onClick={() => handleTabClick("all")}
              >
                신청
              </li>
              <li
                className={activeTab === "create" ? "activeTab" : ""}
                onClick={() => {
                  handleTabClick("create");
                  setIsModalOpen(false);
                }}
              >
                등록
              </li>
              <li
                className={activeTab === "like" ? "activeTab" : ""}
                onClick={() => {
                  handleTabClick("like");
                  setIsModalOpen(false);
                }}
              >
                찜
              </li>
            </ul>
          </InfoNav>
          {activeTab === "all" && (
            <>
              <InfoProjectList>
                <div>현재 내가 신청한 스터디 / 프로젝트 </div>
                <div>
                  <p>Tips!</p>
                  <p>
                    스터디나 프로젝트가 선정되어 있을 때, "선정" 버튼을 누르면
                    해당 스터디나 프로젝트의 오픈 채팅방으로 이동하여 팀원들과
                    소통을 시작할 수 있습니다.
                  </p>
                </div>
              </InfoProjectList>
              <section style={{ marginTop: "50px" }}>
                <ArticleApplyStateTable
                  articleApplyState={articleCurrentState.articleApplyState}
                  handleModalOpen={handleModalOpen}
                  setModalType={setModalType}
                />
              </section>
            </>
          )}
          {activeTab === "like" && (
            <>
              <ArticleInfoCardWrap>
                {Array.isArray(articleCardValue) &&
                  articleCardValue.map(
                    (
                      article: {
                        articleId: any;
                        articleType: string;
                        articleMentorNeeded: string | boolean;
                        articleTitle: string;
                        articleApplyNow: number;
                        articleApply: string | number;
                        articleLikes: number;
                        articleEndDay: string;
                        articleRecruitmentState: boolean;
                        articleStartDay: string;
                      },
                      index: Key | null | undefined
                    ) => (
                      <ArticleInfoCard
                        key={index}
                        navigateRoute={`/articledetail/${article.articleId}`}
                        articleType={article.articleType}
                        articleMentorNeeded={article.articleMentorNeeded}
                        articleTitle={article.articleTitle}
                        articleCurrentApply={article.articleApplyNow}
                        articleApply={article.articleApply}
                        articleLikes={article.articleLikes}
                        articleEndDay={article.articleEndDay}
                        articleRecruitmentState={
                          article.articleRecruitmentState
                        }
                        articleStartDay={article.articleStartDay}
                      />
                    )
                  )}
              </ArticleInfoCardWrap>
            </>
          )}
          {activeTab === "create" && (
            <>
              <InfoProjectList>
                <div> 등록한 스터디 / 프로젝트 </div>
                <div>
                  <p>Tips!</p>
                  <p>
                    상태가 모집중일때, "모집중" 을 클릭하면 신청한 사람들의
                    리스트를 보여줍니다.
                  </p>
                </div>
              </InfoProjectList>
              <section style={{ marginTop: "50px" }}>
                <ArticleApplyStateTable
                  articleApplyState={articleCurrentState.articleApplyState}
                  handleModalOpen={handleModalOpen}
                  setModalType={setModalType}
                />

                <ArticleInfoCardWrap style={{ marginTop: "" }}>
                  {Array.isArray(articleCardValue) &&
                    articleCardValue.map(
                      (
                        article: {
                          articleId: any;
                          articleType: string;
                          articleMentorNeeded: string | boolean;
                          articleTitle: string;
                          articleApplyNow: number;
                          articleApply: string | number;
                          articleLikes: number;
                          articleEndDay: string;
                          articleRecruitmentState: boolean;
                          articleStartDay: string;
                        },
                        index: Key | null | undefined
                      ) => (
                        <ArticleInfoCard
                          key={index}
                          navigateRoute={`/articledetail/${article.articleId}`}
                          articleType={article.articleType}
                          articleMentorNeeded={article.articleMentorNeeded}
                          articleTitle={article.articleTitle}
                          articleCurrentApply={article.articleApplyNow}
                          articleApply={article.articleApply}
                          articleLikes={article.articleLikes}
                          articleEndDay={article.articleEndDay}
                          articleRecruitmentState={
                            article.articleRecruitmentState
                          }
                          articleStartDay={article.articleStartDay}
                        />
                      )
                    )}
                </ArticleInfoCardWrap>
              </section>
            </>
          )}
          {isModalOpen && (
            <Modal
              show={isModalOpen}
              handleClose={handleModalClose}
              modalType={"info"}
              additionalInfo={"http://google.com"}
            />
          )}
        </BottomSection>
        <LogoutText onClick={logoutEventClick}>로그아웃</LogoutText>
      </Section>
    </>
  );
};

export default MyInfo;
