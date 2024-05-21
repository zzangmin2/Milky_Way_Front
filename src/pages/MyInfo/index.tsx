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
  LogoutText,
} from "./style";
import { useState, useEffect } from "react";
import ArticleInfoCard from "../../components/ArticleInfoCard";
import Modal from "../../components/Modal";
import { viewMyInfo } from "../../utils/apimodule/article";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { userInfoState } from "../../utils/recoil/atom";
import { sendUserEditInfo } from "../../utils/apimodule/member";
import { ArticleCurrentState } from "../../utils/recoil/atom";
import { logout } from "../../utils/auth/auth";
import { toast } from "react-toastify";

const MyInfo = () => {
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
  const [activeTab, setActiveTab] = useState<string>("all");
  const [edit, setEdit] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [additionalInfo, setAdditionalInfo] = useState<string>("");
  const [modalType, setModalType] = useState<string>("");

  useEffect(() => {
    userInfoData();
    setEditUser({});
  }, []);

  const logoutEventClick = async () => {
    try {
      const result = await logout();
    } catch (error) {
      toast.error("로그아웃 실패...");
    }
  };

  const userInfoData = async () => {
    try {
      const data: any = await viewMyInfo();
      const result = data.data;
      console.log(result);
      infoValue({
        userName: result.userName,
        userEmail: result.userEmail,
        userNickname: result.userNickname,
        userCareerCard: result.userCareerCard,
        userNumber: result.userNumber,
      });

      console.log(infoValue);
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
        editUser.userEmail,
        editUser.userNumber
      );
      if (response.data.success) {
        toast.success("수정완료");
      }
    } catch (error) {
      toast.error("수정실패");
      console.error("error", error);
    }
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
          <InfoTitle>
            <div>내정보</div>
            {edit ? (
              <p
                onClick={() => {
                  setEdit(false);
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
            <div>이메일</div>
            <div>
              {edit ? (
                <>
                  <input
                    type="text"
                    placeholder={"이메일을 입력하세요"}
                    value={editUser.userEmail}
                    onChange={(e) => {
                      setEditUser({
                        ...editUser,
                        userEmail: e.target.value,
                      });
                    }}
                  />
                </>
              ) : (
                <>
                  <p>{userEmail}</p>
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
                    placeholder={"이름을 입력해주세요"}
                    value={editUser.userName}
                    onChange={(e) => {
                      setEditUser({
                        ...editUser,
                        userName: e.target.value,
                      });
                    }}
                  ></input>
                </>
              ) : (
                <>
                  <p>{userName}</p>
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
                    placeholder={"전화번호를 입력해주세요"}
                    value={editUser.userNumber}
                    onChange={(e) => {
                      setEditUser({
                        ...editUser,
                        userNumber: e.target.value,
                      });
                    }}
                  ></input>
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
                <ArticleApplyStateTableWrap>
                  <div className="tableRow tableRowTop">
                    <div className="tableCell">스터디/프로젝트명</div>
                    <div className="tableCell">신청일</div>
                    <div className="tableCell">상태</div>
                  </div>

                  {articleCurrentState.articleApplyState.map(
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
                            {/* {applicant.status === "선정" && ( */}
                            <button
                              onClick={() => {
                                handleModalOpen("신청");
                                setModalType("info");
                                setAdditionalInfo("http://naver.com");
                              }}
                            >
                              {applicant.status}
                            </button>
                            {/* )} */}
                          </div>
                        </div>
                      );
                    }
                  )}
                </ArticleApplyStateTableWrap>
              </section>
            </>
          )}
          {activeTab === "like" && (
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
                <ArticleApplyStateTableWrap>
                  <div className="tableRow tableRowTop">
                    <div className="tableCell">스터디/프로젝트명</div>
                    <div className="tableCell">등록일</div>
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
                              <p
                                onClick={() => {
                                  handleModalOpen;
                                  setModalType("userList");
                                }}
                              >
                                모집중
                              </p>
                            </div>
                          </div>
                        );
                      }
                    )
                  ) : (
                    <div>아직 없네요 ..</div>
                  )}
                </ArticleApplyStateTableWrap>
                <ArticleInfoCardWrap style={{ marginTop: "-50px" }}>
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
              </section>
            </>
          )}
          {isModalOpen && (
            <Modal
              show={isModalOpen}
              handleClose={handleModalClose}
              modalType={modalType}
              additionalInfo={additionalInfo}
            />
          )}
        </BottomSection>
        <LogoutText onClick={logoutEventClick}>로그아웃</LogoutText>
      </Section>
    </>
  );
};

export default MyInfo;
