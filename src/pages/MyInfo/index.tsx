import { useState, useEffect, useRef } from "react";
import {
  BottomSection,
  Section,
  TopSection,
  InfoTitle,
  InfoNav,
  LogoutText,
} from "./style";

import {
  viewMyApplyInfo,
  viewMyInfo,
  viewMyArticleInfo,
} from "../../utils/apimodule/article";
import { useSetRecoilState, useRecoilState } from "recoil";
import {
  ArticleArticleSelector,
  userInfoStateSelector,
  ArticleApplySelector,
} from "../../utils/recoil/atom";

import { logout } from "../../utils/auth/auth";
import { toast } from "react-toastify";
import MyInfoContent from "../../components/MyInfoContent";
import InfoBottomTabTable from "../../components/InfoBottomTabTable";
import { useNavigate } from "react-router-dom";

const MyInfo = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<string>("article");

  /** 유저 데이터 정보 */
  const infoValue = useSetRecoilState(userInfoStateSelector);

  /** 등록한 정보 */
  const [apply, setApply] = useRecoilState<any>(ArticleApplySelector);

  /** 신청한 정보 */
  const [article, setArticle] = useRecoilState<any>(ArticleArticleSelector);

  /** BottomSection 참조 */
  const bottomSection = useRef<HTMLDivElement>(null);

  /** 로그아웃 */
  const logoutEventClick = async () => {
    try {
      const result: any = await logout();
      if (result.success) {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("REFRESH_TOKEN");
        localStorage.removeItem("memberName");
        alert("로그아웃 되었습니다.");
        navigate("/users/login");
      } else {
        alert("로그아웃 실패 (client)");
      }
    } catch (error) {
      toast.error("로그아웃 실패...");
    }
  };

  /** 유저 정보 불러옴 */
  const userInfoData = async () => {
    try {
      const response: any = await viewMyInfo();
      const articleData: any = await viewMyArticleInfo();
      const applyData: any = await viewMyApplyInfo();
      const member = response.data;
      const article = articleData.data;
      const apply = applyData.data;

      setApply(apply);
      setArticle(article);

      infoValue({
        userName: member.memberName,
        userEmail: member.memberEmail,
        userNumber: member.memberPhoneNum,
      });
    } catch (error) {
      toast.error("데이터를 불러오는 중에 오류가 발생했습니다.");
      console.error("error", error);
    }
  };

  /** 마운트 시에 유저 정보 불러오고 setEditUser 초기화 */
  useEffect(() => {
    userInfoData();
  }, []);

  /** articlelist 상태 탭 바
   * react_scroll 애니메이션 추가
   */
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (bottomSection.current) {
      bottomSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Section>
        <TopSection>
          <MyInfoContent></MyInfoContent>
        </TopSection>
        <BottomSection ref={bottomSection}>
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
                }}
              >
                등록
              </li>
              <li
                className={activeTab === "like" ? "activeTab" : ""}
                onClick={() => {
                  handleTabClick("like");
                }}
              >
                찜
              </li>
            </ul>
          </InfoNav>
          {activeTab === "article" && (
            <>
              <InfoBottomTabTable articleApplyState={apply} type={"article"} />
            </>
          )}
          {activeTab === "like" && null}
          {activeTab === "apply" && (
            <>
              <InfoBottomTabTable articleApplyState={article} type={"apply"} />
            </>
          )}
        </BottomSection>
        <LogoutText>
          <p onClick={logoutEventClick}>로그아웃</p>
        </LogoutText>
      </Section>
    </>
  );
};

export default MyInfo;
