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
} from "../../utils/recoil/atom";
import {
  viewMyCareerInfo,
  viewMyCareerList,
} from "../../utils/apimodule/article";

const MemberListModal: React.FC = () => {
  const setCareerValue = useSetRecoilState(userCareerStateSelector);
  const setUserInfoValue = useSetRecoilState(userCareerUserInfoStateSelector);
  const { career }: any = useRecoilValue(userCareerStateSelector);
  const { certificate }: any = useRecoilValue(userCareerStateSelector);
  const [
    articleApplyUserResumeModalState,
    setArticleApplyUserResumeModalState,
  ] = useRecoilState(ArticleApplyUserResumeModalState);

  const handleModalState = () => {
    setArticleApplyUserResumeModalState(!articleApplyUserResumeModalState);
  };

  //구조분해 할당
  const {
    userName,
    userId,
    userDpt,
    userPhoneNumber,
    userLocation,
    userLineText,
  }: any = useRecoilValue(userCareerUserInfoStateSelector);

  const userCareerData = async () => {
    try {
      const [careerInfo, careerList] = await Promise.all([
        viewMyCareerInfo(),
        viewMyCareerList(),
      ]);

      const member = careerInfo.data.basicInfos[0]?.member;
      const careerData = careerList.data?.careers;

      if (member && careerData) {
        setCareerValue({
          userCareer: careerData.careers || [],
          userCertificate: careerData.certifications || [],
        });

        setUserInfoValue({
          userName: member.memberName,
          userId: member.memberId,
          userPhoneNumber: member.memberPhoneNum,
          userDpt: member.memberDpt,
          userLocation: member.memberLocation,
          userUni: member.memberUniversity,
        });
      } else {
        console.error("Data structure is not as expected");
      }
    } catch (error) {
      console.error("Error fetching user career data:", error);
    }
  };

  useEffect(() => {
    if (articleApplyUserResumeModalState) {
      userCareerData();
    }
  }, [articleApplyUserResumeModalState]);

  if (!articleApplyUserResumeModalState) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={handleModalState}>X</CloseButton>
        <MyInfoContent>
          <FirstInfoContentTitle>
            {userName} @{userId}
          </FirstInfoContentTitle>
          <div>{userPhoneNumber}</div>
          <div>{userDpt}</div>
          <div>{userLocation}</div>
        </MyInfoContent>
        <MyInfoCareer>
          <InfoContentTitle>경력</InfoContentTitle>
          {career && career.length > 0 ? (
            career.map((careerItem: any) => (
              <InfoContentText key={careerItem.id}>
                <div>{careerItem.careerCompany}</div>
                <div>
                  {careerItem.careerFirstDate}~{careerItem.careerLastDate}
                </div>
              </InfoContentText>
            ))
          ) : (
            <InfoContentText>등록된 경력이 없습니다.</InfoContentText>
          )}
        </MyInfoCareer>
        <MyInfocertificate>
          <InfoContentTitle>자격증</InfoContentTitle>
          {certificate && certificate.length > 0 ? (
            certificate.map((certificateItem: any) => (
              <InfoContentText key={certificateItem.id}>
                <div>{certificateItem.certificateName}</div>
                <div>{certificateItem.certificateDate}</div>
              </InfoContentText>
            ))
          ) : (
            <InfoContentText>등록된 자격증이 없습니다.</InfoContentText>
          )}
        </MyInfocertificate>
        <MyInfoText>
          <InfoContentTitle>한줄소개</InfoContentTitle>
          <InfoContentLineText>
            {userLineText || "등록된 한줄소개가 없습니다."}
          </InfoContentLineText>
        </MyInfoText>
        <BottomSection>
          <Button
            text="거절하기"
            border="1px solid #133488"
            color="white"
            fontColor="#133488"
          />
          <Button text="승인하기" />
        </BottomSection>
      </ModalContent>
    </ModalWrapper>
  );
};

export default MemberListModal;
