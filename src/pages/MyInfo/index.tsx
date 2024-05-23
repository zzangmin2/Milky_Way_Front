import {
  BottomSection,
  Section,
  TopSection,
  InfoTitle,
  InfoNav,
  LogoutText,
} from "./style";
import { useState, useEffect } from "react";

import Modal from "../../components/Modal";
import {
  viewMyApplyInfo,
  viewMyInfo,
  viewMyArticleInfo,
} from "../../utils/apimodule/article";
import { useSetRecoilState, useRecoilState } from "recoil";
import {
  ArticleArticleSelector,
  userInfoStateSelector,
} from "../../utils/recoil/atom";
import ArticleApplyStateTable from "../../components/ArticleApplyStateTable";
import { logout } from "../../utils/auth/auth";
import { toast } from "react-toastify";
import { ArticleApplySelector } from "../../utils/recoil/atom";
import MyInfoContent from "../../components/MyInfoContent";

const MyInfo = () => {
  const [activeTab, setActiveTab] = useState<string>("article");

  /** 유저 데이터 정보 */
  const infoValue = useSetRecoilState(userInfoStateSelector);

  /**
   * 등록한 정보
   */
  const [apply, setApply] = useRecoilState<any>(ArticleApplySelector);

  /**
   * 신청한 정보
   */

  const [article, setArticle] = useRecoilState<any>(ArticleArticleSelector);

  /** 모달오픈, 오픈채팅방 링크 넘기기 등 */
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [additionalInfo, setAdditionalInfo] = useState<string>("");
  const [modalType, setModalType] = useState<string>("");

  /**
   * 로그아웃
   */
  const logoutEventClick = async () => {
    try {
      const result: any = await logout();
      if (result.success) {
        alert("로그아웃 되었습니다..");
      } else {
        alert("로그아웃 실패 (client)");
      }
    } catch (error) {
      toast.error("로그아웃 실패...");
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

      infoValue({
        userName: member.memberName,
        userEmail: member.memberEmail,
        userNumber: member.memberPhoneNum,
      });
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
                className={activeTab === "article" ? "activeTab" : ""}
                onClick={() => handleTabClick("article")}
              >
                신청
              </li>
              <li
                className={activeTab === "apply" ? "activeTab" : ""}
                onClick={() => {
                  handleTabClick("apply");
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
          {activeTab === "article" && (
            <>
              <ArticleApplyStateTable
                articleApplyState={apply}
                handleModalOpen={handleModalOpen}
                setModalType={setModalType}
                type={"article"}
              />
            </>
          )}
          {activeTab === "like" && null}
          {activeTab === "apply" && (
            <>
              <ArticleApplyStateTable
                articleApplyState={article}
                handleModalOpen={handleModalOpen}
                setModalType={setModalType}
                type={"apply"}
              />
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
          <LogoutText>
            <p onClick={logoutEventClick}>로그아웃</p>
          </LogoutText>
        </BottomSection>
      </Section>
    </>
  );
};

export default MyInfo;
