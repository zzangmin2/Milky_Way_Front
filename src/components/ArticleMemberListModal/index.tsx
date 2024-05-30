// 복잡해보여서 따로 만들었는데 이게 . 더복잡한듯, 굳이 컴포넌트 이렇게 따로 구성해야할까??

import React from "react";
import { useState } from "react";
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
} from "./styles";
import { MyInfoCareer, FirstInfoContentTitle } from "./styles";
import Button from "../Button";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { ModalProps } from "../../typings/db";
import {
  userCareerUserInfoStateSelector,
  userCareerStateSelector,
} from "../../utils/recoil/atom";
import {
  viewMyCareerInfo,
  viewMyCareerList,
} from "../../utils/apimodule/article";

const MemberListModal: React.FC<ModalProps> = ({ show, handleClose }) => {
  const careerValue: any = useSetRecoilState(userCareerStateSelector);
  const userInfoValue: any = useSetRecoilState(userCareerUserInfoStateSelector);

  const { career }: any = useRecoilValue(userCareerStateSelector);
  const { certificate }: any = useRecoilValue(userCareerStateSelector);

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

      const member = careerInfo.data.basicInfos[0].member;
      const career = careerList.data.careers;

      console.log(member);
      console.log(careerInfo);

      careerValue({
        userCareer: career.careers || [],
        userCertificate: career.certifications || [],
      });

      userInfoValue({
        userName: member.memberName,
        userId: member.memberId,
        userPhoneNumber: member.memberPhoneNum,
        userDpt: member.memberDpt,
        userLocation: member.memberLocation,
        userUni: member.memberUniversity,
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  React.useEffect(() => {
    if (show) {
      userCareerData();
    }
  }, [show]);

  if (!show) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={handleClose}>X</CloseButton>

        <MyInfoContent>
          <FirstInfoContentTitle>
            {userName} @{userId}
          </FirstInfoContentTitle>

          <div>{userPhoneNumber}</div>
          <div>{userDpt}</div>
          <div>{userLocation}</div>
        </MyInfoContent>
        <MyInfoCareer>
          <InfoContentTitle>
            <p>경력</p>
          </InfoContentTitle>
          {career.length > 0 ? (
            career.map((career: any) => (
              <InfoContentText key={career.id}>
                <div>{career.careerCompany}</div>
                <div>
                  {career.careerFirstDate}~{career.careerLastDate}
                </div>
              </InfoContentText>
            ))
          ) : (
            <InfoContentText>
              <div>등록된 경력이 없습니다.</div>
            </InfoContentText>
          )}
        </MyInfoCareer>

        <MyInfocertificate>
          <InfoContentTitle>
            <p>자격증</p>
          </InfoContentTitle>
          {certificate.length > 0 ? (
            certificate.map((certificate: any) => (
              <InfoContentText key={certificate.id}>
                <div>{certificate.certificateName}</div>
                <div>{certificate.certificateDate}</div>
              </InfoContentText>
            ))
          ) : (
            <InfoContentText>등록된 자격증이 없습니다.</InfoContentText>
          )}
        </MyInfocertificate>
        <MyInfoText>
          <InfoContentTitle>
            <p>한줄소개</p>
          </InfoContentTitle>

          <InfoContentLineText>
            {userLineText ? (
              <> {userLineText}</>
            ) : (
              <>등록된 한줄소개가 없습니다.</>
            )}
          </InfoContentLineText>
        </MyInfoText>
        <BottomSection>
          <div>
            <Button
              text="거절하기"
              border="1px solid #133488"
              color="white"
              fontColor="#133488"
            />
          </div>
          <div>
            <Button text="승인하기" />
          </div>
        </BottomSection>
      </ModalContent>
    </ModalWrapper>
  );
};

export default MemberListModal;
