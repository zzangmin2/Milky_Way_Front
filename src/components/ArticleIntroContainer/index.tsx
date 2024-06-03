import { useRecoilState, useSetRecoilState } from "recoil";
import {
  ArticleApplyStateContainer,
  ArticleApplyStateTableWrap,
  ArticleIntrowrap,
} from "./styles";
import {
  ArticleApplyUserListState,
  ArticleApplyUserResumeModalState,
  ArticleCurrentState,
  UserArticleInteractionState,
} from "../../utils/recoil/atom";
import {
  sendArticleApplyUser,
  viewArticleApplyUserList,
} from "../../utils/apimodule/article";
import { toast } from "react-toastify";
import { getTimeAgo } from "../../utils/utils";
import Button from "../Button";
import { useEffect, useState } from "react";
import { ArticleDetail } from "../../typings/db";

const ArticleIntroContainer = () => {
  // 현재 페이지에서 보여주고 있는 article 데이터
  const [articleCurrentState, setArticleCurrentState] =
    useRecoilState(ArticleCurrentState);

  //현재 게시물 지원자 리스트 상태
  const [articleApplyUserListState, setArticleApplyUserListState] =
    useRecoilState(ArticleApplyUserListState);

  //게시물 상세 접속 시 사용자 상태 (작성, 좋아요, 지원 여부)
  const [userArticleInteractionState, setUserArticleInteractionState] =
    useRecoilState(UserArticleInteractionState);

  //현재 지원자 리스트 이력서 모달 상태
  const [
    articleApplyUserResumeModalState,
    setArticleApplyUserResumeModalState,
  ] = useRecoilState(ArticleApplyUserResumeModalState);

  // 지원 리스트 상태 변경 될 때마다 새로 불러옴
  useEffect(() => {
    if (articleCurrentState && articleCurrentState.articleId) {
      articleApplyUserList();
    }
  }, [articleCurrentState]);

  //article 지원자 리스트 조회 함수
  const articleApplyUserList = async () => {
    try {
      if (articleCurrentState.articleId >= 1) {
        const result = await viewArticleApplyUserList(
          articleCurrentState.articleId
        );

        console.log(result);
        setArticleApplyUserListState(result);
      }
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
      toast.error("오류가 발생했습니다. 다시 시도해주세요");
    }
  };

  //article 지원하기 함수
  const articleApplyUser = async () => {
    try {
      if (articleCurrentState && articleCurrentState.articleRecruitmentState) {
        await sendArticleApplyUser(articleCurrentState.articleId);
        toast.success("지원 성공!");
        await articleApplyUserList();
        setUserArticleInteractionState((prev) => ({
          ...prev,
          isApplier: true,
        }));
        setArticleCurrentState((prev: ArticleDetail) => ({
          ...prev,
          articleApplyNow: articleCurrentState.articleApplyNow + 1,
        }));
      } else {
        toast.error("모집이 완료된 게시물입니다.");
      }
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
      toast.error("오류가 발생했습니다. 다시 시도해주세요");
    }
  };

  const handleModalState = (applyNo: number) => {
    if (userArticleInteractionState.isAuthor) {
      setArticleApplyUserResumeModalState({
        applyNo: applyNo,
        modalState: !articleApplyUserResumeModalState.modalState,
      });
    }
  };

  return (
    <>
      <ArticleIntrowrap>
        {articleCurrentState.articleMentorTag &&
        articleCurrentState.articleMentorTag.length >= 1 ? (
          <p className="mentorTagTitle">우리에게 필요한 멘토는?</p>
        ) : (
          <></>
        )}
        <div className="mentorTagWrapper">
          {articleCurrentState.articleMentorTag &&
          articleCurrentState.articleMentorTag.length >= 1 ? (
            articleCurrentState.articleMentorTag
              .split("#")
              .filter((tag: any) => tag !== "")
              .map((tag: any, idx: any) => {
                return (
                  <p className="mentorTag" key={idx}>
                    #{tag}
                  </p>
                );
              })
          ) : (
            <></>
          )}
        </div>
        <p>{articleCurrentState.articleContent}</p>
      </ArticleIntrowrap>
      {!userArticleInteractionState.isAuthor ? (
        <div className="buttonWrap">
          <Button
            text={
              articleCurrentState.articleRecruitmentState
                ? `${
                    userArticleInteractionState.isApplier
                      ? "이미 지원한 게시물입니다."
                      : articleCurrentState.articleType === "study"
                      ? "스터디 신청하기"
                      : "프로젝트 신청하기"
                  }`
                : "모집이 완료된 게시물입니다. "
            }
            buttonState={
              articleCurrentState.articleRecruitmentState &&
              !userArticleInteractionState.isApplier
                ? ""
                : "inactive"
            }
            onClick={articleApplyUser}
            disabled={
              !articleCurrentState.articleRecruitmentState ||
              userArticleInteractionState.isApplier
            }
          />
        </div>
      ) : (
        ""
      )}
      <ArticleApplyStateContainer>
        <h3>스터디 신청현황</h3>
        {userArticleInteractionState.isAuthor && (
          <div className="articleAuthorMessage">
            <div> * 잠깐!</div>
            <div>
              신청 상태를 클릭하여 신청자의 이력서를 확인하고, <br />
              스터디/프로젝트 합류 여부를 선택해주세요
            </div>
          </div>
        )}

        <ArticleApplyStateTableWrap
          $isAuthor={userArticleInteractionState.isAuthor}
        >
          <div className="tableRow tableRowTop">
            <div className="tableCell">번호</div>
            <div className="tableCell">신청자명</div>
            <div className="tableCell">신청일</div>
            <div className="tableCell">상태</div>
          </div>

          {(userArticleInteractionState.isAuthor ||
            userArticleInteractionState.isApplier) &&
          articleApplyUserListState.length >= 1 ? (
            articleApplyUserListState.map((applicant: any, idx: any) => {
              return (
                <div className="tableRow" key={idx}>
                  <div className="tableCell">{applicant.applyNo}</div>
                  <div className="tableCell">{applicant.memberName}</div>
                  <div className="tableCell">
                    {getTimeAgo(applicant.applyDate)}
                  </div>
                  <div
                    className="tableCell tableCellButton"
                    onClick={() =>
                      applicant.applyNo && handleModalState(applicant.applyNo)
                    }
                  >
                    {applicant.applyResult}
                  </div>
                </div>
              );
            })
          ) : userArticleInteractionState.isAuthor ||
            userArticleInteractionState.isApplier ? (
            <div className="applicantMessage">
              <p>아직 없네요..</p>
            </div>
          ) : (
            <>
              <div className="applicantMessage">
                스터디 / 프로젝트 신청현황은
                <br /> 게시물 작성자와 신청자만 확인할 수 있습니다.
                <br /> <br />
                <b>
                  본 스터디 / 프로젝트와 함께하는 팀원이 궁금하다면
                  <br /> 지금 바로 신청하세요 !
                </b>
              </div>
            </>
          )}
        </ArticleApplyStateTableWrap>
      </ArticleApplyStateContainer>
    </>
  );
};

export default ArticleIntroContainer;
