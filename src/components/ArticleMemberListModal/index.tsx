// 복잡해보여서 따로 만들었는데 이게 . 더복잡한듯, 굳이 컴포넌트 이렇게 따로 구성해야할까??

import React from "react";
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
import { viewMyCareer } from "../../utils/apimodule/article";
import {
  userCareerState,
  userCareerStateSelector,
  userCareerUserInfoStateSelector,
} from "../../utils/recoil/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
  memberId?: any;
}

const MemberListModal: React.FC<ModalProps> = ({ show, handleClose }) => {
  const careerValue: any = useSetRecoilState(userCareerStateSelector);
  const userInfoValue: any = useSetRecoilState(userCareerUserInfoStateSelector);

  const { career }: any = useRecoilValue(userCareerStateSelector);
  const { certificate }: any = useRecoilValue(userCareerStateSelector);

  //구조분해 할당
  const {
    userCareer = [],
    userCertificate = [],
    userName,
    userLineText,
  } = useRecoilValue(userCareerState);
  const userInfoData = async () => {
    try {
      const data = await viewMyCareer();
      const result = data.data;
      careerValue({
        userName: result.userName,
        userCareer: result.userCareer,
        userCertificate: result.userCertificate,
        userLineText: result.userLineText,
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  React.useEffect(() => {
    if (show) {
      userInfoData();
    }
  }, [show]);

  if (!show) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={handleClose}>X</CloseButton>

        <MyInfoContent>
          <FirstInfoContentTitle>{userName} @ktg5679</FirstInfoContentTitle>
          <div>대림대학교</div>
          <div>010-2992-5679</div>
          <div>컴퓨터정보학부</div>
          <div>안양시 만안구 안양1동</div>
        </MyInfoContent>
        <MyInfoCareer>
          <InfoContentTitle>
            <p>경력</p>
          </InfoContentTitle>
          {userCareer.length > 0 ? (
            userCareer.map((career: any) => (
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
          {userCertificate.length > 0 ? (
            userCertificate.map((certificate: any) => (
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
