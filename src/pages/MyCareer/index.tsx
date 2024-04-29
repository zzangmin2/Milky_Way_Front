import {
  Section,
  TopSection,
  BottomSection,
  MyInfoTitle,
  MyInfoContent,
  MyInfoCareer,
  MyInfocertificate,
  MyInfoText,
  InfoContentTitle,
  InfoContentText,
  CareerInput,
} from "./style";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { viewMyCareer } from "../../utils/apimodule/article";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userCareerState } from "../../utils/recoil/atom";

const MyCareer = () => {
  const careerValue = useSetRecoilState(userCareerState);
  const { userName, userCareer, userCertificate, userLineText } =
    useRecoilValue(userCareerState);
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    userInfoData();
  }, []);

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

  const toggleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  return (
    <Section>
      <TopSection>
        <MyInfoTitle>
          <div>이력서</div>
        </MyInfoTitle>
        <MyInfoContent>
          <InfoContentTitle>{userName}@ktg5679</InfoContentTitle>
          <div>대림대학교</div>
          <div>컴퓨터정보학부</div>
          <div>010-2992-5679</div>
        </MyInfoContent>
        <MyInfoCareer>
          <InfoContentTitle>경력</InfoContentTitle>
          {userCareer.length > 0 ? (
            userCareer.map((career: any) => (
              <InfoContentText key={career.id}>
                <div>{career.careerCompany}</div>
                <div>{career.careerDate}</div>
              </InfoContentText>
            ))
          ) : (
            <InfoContentText>
              <div>등록된 경력이 없습니다.</div>
            </InfoContentText>
          )}
          {edit ? (
            <></>
          ) : (
            <>
              <label>
                sef
                <CareerInput />
              </label>
            </>
          )}
        </MyInfoCareer>
        <MyInfocertificate>
          <InfoContentTitle>자격증</InfoContentTitle>
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
          {edit ? (
            <></>
          ) : (
            <>
              <CareerInput>asef</CareerInput>
            </>
          )}
        </MyInfocertificate>
        <MyInfoText>
          <InfoContentTitle>한줄소개</InfoContentTitle>
          <InfoContentText>{userLineText}</InfoContentText>
        </MyInfoText>
      </TopSection>
      <BottomSection>
        <Button text={"이력서 수정하기"} onClick={() => toggleEdit} />
      </BottomSection>
    </Section>
  );
};

export default MyCareer;
