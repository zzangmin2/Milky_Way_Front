import {
  BottomSection,
  Section,
  TopSection,
  InfoContent,
  InfoTitle,
  InfoNav,
  InfoProjectList,
  ArticleInfoCardWrap,
  ArticleApplyStateTableWrap,
} from "./style";
import { useState, useEffect } from "react";
import ArticleInfoCard from "../../components/ArticleInfoCard";
import { viewMyInfo } from "../../utils/apimodule/article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { userInfoState } from "../../utils/recoil/atom";
import { sendUserEditInfo } from "../../utils/apimodule/member";
import { ArticleCurrentState } from "../../utils/recoil/atom";

const MyInfo = () => {
  const navigate = useNavigate();

  interface UserInfo {
    userName?: any;
    userEmail?: any;
    userNumber?: any;
    userCareerCard?: any;
    userNickName?: any;
  }

  const [editUser, setEditUser] = useState<UserInfo>({
    userName: "",
    userEmail: "",
    userNumber: "",
    userCareerCard: "",
    userNickName: "",
  });

  const [articleCurrentState, setArticleCurrentState] =
    useRecoilState(ArticleCurrentState);
  const infoValue = useSetRecoilState(userInfoState);
  const { userName, userEmail, userNickName, userCareerCard, userNumber } =
    useRecoilValue(userInfoState);
  const [activeTab, setActiveTab] = useState("all");
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    userInfoData();
    setEditUser({});
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

  const sendClickEdit = async () => {
    try {
      const response: any = await sendUserEditInfo(
        editUser.userName,
        editUser.userNickName,
        editUser.userEmail,
        editUser.userCareerCard,
        editUser.userNumber
      );
      if (response.data.success) {
        alert("수정완료");
      }
    } catch (error) {
      alert("수정실패");
      console.error("error", error);
    }
  };

  return (
    <>
      <Section>
        <TopSection>
          <InfoTitle>
            <div>내정보</div>
            {edit ? (
              <p
                onClick={() => {
                  setEdit(true);
                  sendClickEdit();
                }}
              >
                수정완료
              </p>
            ) : (
              <>
                <p
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  수정하기
                </p>
              </>
            )}
          </InfoTitle>
          <InfoContent>
            <div>수신용 이메일</div>
            <div>
              {edit ? (
                <>
                  <input
                    type="text"
                    placeholder={userEmail}
                    onChange={(e) => {
                      setEditUser({
                        ...editUser,
                        userEmail: e.target.value,
                      });
                    }}
                  />

                  {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                </>
              ) : (
                <>
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
                  <input
                    type="text"
                    placeholder={userNickName}
                    onChange={(e) => {
                      setEditUser({
                        ...editUser,
                        userNickName: e.target.value,
                      });
                    }}
                  ></input>
                  {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
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
                  <input
                    type="text"
                    placeholder={userName}
                    onChange={(e) => {
                      setEditUser({
                        ...editUser,
                        userName: e.target.value,
                      });
                    }}
                  ></input>
                  {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
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
                  <input
                    type="text"
                    placeholder={userCareerCard}
                    onChange={(e) => {
                      setEditUser({
                        ...editUser,
                        userCareerCard: e.target.value,
                      });
                    }}
                  ></input>
                  {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
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
                  <input
                    type="text"
                    placeholder={userNumber}
                    onChange={(e) => {
                      setEditUser({
                        ...editUser,
                        userNumber: e.target.value,
                      });
                    }}
                  ></input>
                  {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                </>
              ) : (
                <>
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
                <ArticleApplyStateTableWrap>
                  <div className="tableRow tableRowTop">
                    <div className="tableCell">스터디/프로젝트명</div>

                    <div className="tableCell">신청일</div>
                    <div className="tableCell">상태</div>
                  </div>
                  {articleCurrentState.articleApplyState ? (
                    articleCurrentState.articleApplyState.map(
                      (applicant, idx) => {
                        return (
                          <div className="tableRow" key={idx}>
                            <div className="tableCell">
                              {applicant.applicantName}
                            </div>
                            <div className="tableCell">
                              {applicant.applicationDate}
                            </div>
                            <div className="tableCell">
                              {applicant.status}click
                            </div>
                          </div>
                        );
                      }
                    )
                  ) : (
                    <div>아직 없네요 ..</div>
                  )}
                </ArticleApplyStateTableWrap>
              </section>
            </>
          )}{" "}
          {activeTab === "like" /** 전체 수정 필요 */ && (
            <>
              <ArticleInfoCardWrap>
                <ArticleInfoCard
                  navigateRoute="/articledetail/1"
                  articleType={""}
                  articleMentorNeeded={false}
                  articleTitle={""}
                  articleCurrentApply={0}
                  articleApply={0}
                  articleLikes={0}
                  articleEndDay={""}
                  articleRecruitmentState={false}
                />
                <ArticleInfoCard
                  navigateRoute="/articledetail/1"
                  articleType={""}
                  articleMentorNeeded={false}
                  articleTitle={""}
                  articleCurrentApply={0}
                  articleApply={0}
                  articleLikes={0}
                  articleEndDay={""}
                  articleRecruitmentState={false}
                />
              </ArticleInfoCardWrap>
            </>
          )}{" "}
          {activeTab === "create" && <></>}
        </BottomSection>
      </Section>
    </>
  );
};

export default MyInfo;
