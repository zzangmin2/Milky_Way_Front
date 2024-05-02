import {
  BottomSection,
  Section,
  TopSection,
  InfoContent,
  InfoTitle,
  InfoNav,
  InfoProjectList,
  ArticleInfoCardWrap,
} from "./style";
import { useState, useEffect } from "react";
import ArticleInfoCard from "../../components/ArticleInfoCard";
import { viewMyInfo } from "../../utils/apimodule/article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userInfoState } from "../../utils/recoil/atom";

const MyInfo = () => {
  const navigate = useNavigate();
  const infoValue = useSetRecoilState(userInfoState);
  const { userName, userEmail, userNickName, userCareerCard, userNumber } =
    useRecoilValue(userInfoState);
  const [activeTab, setActiveTab] = useState("like");
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    userInfoData();
  }, []);

  const userInfoData = async () => {
    try {
      const data: any = await viewMyInfo();
      const result = data.data;
      infoValue({
        userName: result.userName,
        userEmail: result.userEmail,
        userNickname: result.userNickname,
        userCareerCard: result.userCareerCard,
        userNumber: result.userNumber,
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Section>
        <TopSection>
          <InfoTitle>
            <div>내정보</div>
            <p
              onClick={() => {
                setEdit(true);
              }}
            >
              수정하기
            </p>
          </InfoTitle>
          <InfoContent>
            <div>수신용 이메일</div>
            <div>
              {edit ? (
                <>
                  <input type="text" placeholder={userEmail}></input>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </>
              ) : (
                <>
                  {" "}
                  <p>{userEmail}</p>
                </>
              )}
            </div>
          </InfoContent>
          <InfoContent>
            <div>닉네임</div>
            <div>
              {edit ? (
                <>
                  <input type="text" placeholder={userNickName}></input>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </>
              ) : (
                <>
                  <p>{userNickName}</p>
                </>
              )}
            </div>
          </InfoContent>
          <InfoContent>
            <div>이름</div>
            <div>
              {edit ? (
                <>
                  <input type="text" placeholder={userName}></input>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </>
              ) : (
                <>
                  <p>{userName}</p>
                </>
              )}
            </div>
          </InfoContent>
          <InfoContent>
            <div>커리어카드</div>
            <div>
              {edit ? (
                <>
                  <input type="text" placeholder={userCareerCard}></input>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </>
              ) : (
                <>
                  <p>{userCareerCard}</p>
                </>
              )}
            </div>
          </InfoContent>
          <InfoContent>
            <div>전화번호</div>
            <div>
              {edit ? (
                <>
                  <input type="text" placeholder={userNumber}></input>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </>
              ) : (
                <>
                  {" "}
                  <p>{userNumber}</p>
                </>
              )}
            </div>
          </InfoContent>
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
                onClick={() => handleTabClick("create")}
              >
                등록
              </li>
              <li
                className={activeTab === "like" ? "activeTab" : ""}
                onClick={() => handleTabClick("like")}
              >
                찜
              </li>
            </ul>
          </InfoNav>
          {activeTab == "all" ? (
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
          ) : (
            <>
              <ArticleInfoCardWrap>
                <ArticleInfoCard navigateRoute="/articledetail/1" />
                <ArticleInfoCard navigateRoute="/articledetail/1" />
              </ArticleInfoCardWrap>
            </>
          )}
        </BottomSection>
      </Section>
    </>
  );
};

export default MyInfo;
