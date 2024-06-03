import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  InfoContentLineText,
  InfoContentTitle,
  MyInfoContent,
  MyInfoText,
  MyInfocertificate,
  BottomSection,
  InfoContentText,
  MyInfoCareer,
  FirstInfoContentTitle,
} from "./styles";
import Button from "../Button";
import {
  userCareerUserInfoStateSelector,
  userCareerStateSelector,
  ArticleApplyUserResumeModalState,
  ArticleApplyUserResumeDataState,
  ArticleApplyUserInfoDataState,
} from "../../utils/recoil/atom";
import {
  sendArticleApplyResult,
  viewArticleApplyUserInfo,
  viewArticleApplyUserResume,
  viewMyCareerInfo,
  viewMyCareerList,
} from "../../utils/apimodule/article";
import { toast } from "react-toastify";

const MemberListModal = () => {
  // const setCareerValue = useSetRecoilState(userCareerStateSelector);
  // const setUserInfoValue = useSetRecoilState(userCareerUserInfoStateSelector);
  // const { career }: any = useRecoilValue(userCareerStateSelector);
  // const { certificate }: any = useRecoilValue(userCareerStateSelector);
  const [articleApplyUserResumeDataState, setArticleApplyUserResumeDataState] =
    useRecoilState(ArticleApplyUserResumeDataState);

  const [articleApplyUserInfoDataState, setArticleApplyUserInfoDataState] =
    useRecoilState(ArticleApplyUserInfoDataState);
  const [
    articleApplyUserResumeModalState,
    setArticleApplyUserResumeModalState,
  ] = useRecoilState(ArticleApplyUserResumeModalState);

  const handleModalState = () => {
    setArticleApplyUserResumeModalState((prev) => ({
      ...prev,
      modalState: false,
    }));
  };

  const loadApplyUserResume = async () => {
    try {
      const result = await viewArticleApplyUserResume(1);
      setArticleApplyUserResumeDataState(result);

      console.log(result);
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
    }
  };

  const loadApplyUserInfo = async () => {
    try {
      const result = await viewArticleApplyUserInfo(1);
      setArticleApplyUserInfoDataState(result);

      console.log(result);
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
    }
  };

  const handleSendApplyResult = async (applyResult: string) => {
    try {
      const applyNo = articleApplyUserResumeModalState.applyNo;
      await sendArticleApplyResult(applyNo, applyResult);

      setArticleApplyUserResumeModalState((prev) => ({
        ...prev,
        modalState: false,
      }));
      toast.success("저장했습니다!");
    } catch (error: any) {
      console.log(`다시 시도해주세요: ${error.message}`);
    }
  };

  useEffect(() => {
    if (articleApplyUserResumeModalState.modalState) {
      loadApplyUserResume();
      loadApplyUserInfo();
    }
  }, [articleApplyUserResumeModalState.modalState]);

  if (!articleApplyUserResumeModalState.modalState) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={handleModalState}>X</CloseButton>
        <MyInfoContent>
          <FirstInfoContentTitle>
            {articleApplyUserInfoDataState.memberName} @
            {articleApplyUserInfoDataState.memberId}
          </FirstInfoContentTitle>
          <div>{articleApplyUserInfoDataState.memberPhoneNum}</div>
          <div>{articleApplyUserInfoDataState.studentMajor}</div>
          <div>{articleApplyUserInfoDataState.studentLocate}</div>
        </MyInfoContent>
        <MyInfoCareer>
          <InfoContentTitle>경력</InfoContentTitle>
          {articleApplyUserResumeDataState.careerDtoList &&
          articleApplyUserResumeDataState.careerDtoList.length > 0 ? (
            articleApplyUserResumeDataState.careerDtoList.map(
              (careerItem: any) => (
                <InfoContentText key={careerItem.id}>
                  <div>{careerItem.carName}</div>
                  <div>
                    {careerItem.carStartDay}
                    <br />~{careerItem.carEndDay}
                  </div>
                </InfoContentText>
              )
            )
          ) : (
            <InfoContentText>등록된 경력이 없습니다.</InfoContentText>
          )}
        </MyInfoCareer>
        <MyInfocertificate>
          <InfoContentTitle>자격증</InfoContentTitle>
          {articleApplyUserResumeDataState.certificationDtoList &&
          articleApplyUserResumeDataState.certificationDtoList.length > 0 ? (
            articleApplyUserResumeDataState.certificationDtoList.map(
              (certificateItem: any) => (
                <InfoContentText key={certificateItem.id}>
                  <div>{certificateItem.certName}</div>
                  <div>{certificateItem.certDate}</div>
                </InfoContentText>
              )
            )
          ) : (
            <InfoContentText>등록된 자격증이 없습니다.</InfoContentText>
          )}
        </MyInfocertificate>
        <MyInfoText>
          <InfoContentTitle>한줄소개</InfoContentTitle>
          <InfoContentLineText>
            {articleApplyUserInfoDataState.studentOneLineShow ||
              "등록된 한줄소개가 없습니다."}
          </InfoContentLineText>
        </MyInfoText>
        <BottomSection>
          <Button
            text="거절하기"
            border="1px solid #133488"
            color="white"
            fontColor="#133488"
            disabled={false}
            onClick={() => handleSendApplyResult("불합격")}
          />
          <Button
            text="승인하기"
            disabled={false}
            onClick={() => handleSendApplyResult("합격")}
          />
        </BottomSection>
      </ModalContent>
    </ModalWrapper>
  );
};

export default MemberListModal;
