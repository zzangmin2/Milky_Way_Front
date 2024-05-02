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
  Input,
  FirstInfoContentTitle,
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

  const clickEdit = () => {
    setEdit(false);
  };

  const addCareerInput = () => {
    careerValue((prev) => ({
      ...prev,
      userCareer: [
        ...prev.userCareer,
        {
          id: prev.userCareer.length + 1,
          careerCompany: "",
          careerDate: "",
        },
      ],
    }));
  };

  const addCertificateInput = () => {
    // Recoil 상태를 업데이트하여 새로운 자격증 입력란을 추가합니다.
    careerValue((prev) => ({
      ...prev,
      userCertificate: [
        ...prev.userCertificate,
        {
          id: prev.userCertificate.length + 1,
          certificateName: "",
          certificateDate: "",
        },
      ],
    }));
  };

  return (
    <Section>
      <TopSection>
        <MyInfoTitle>
          <div>이력서</div>
        </MyInfoTitle>
        <MyInfoContent>
          <FirstInfoContentTitle>{userName}@ktg5679</FirstInfoContentTitle>
          <div>대림대학교</div>
          <div>컴퓨터정보학부</div>
          <div>010-2992-5679</div>
        </MyInfoContent>
        <MyInfoCareer>
          {edit ? (
            <>
              <InfoContentTitle>
                <p>경력</p>
              </InfoContentTitle>
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
            </>
          ) : (
            <>
              <InfoContentTitle>
                <p>경력</p>
                <p onClick={addCareerInput}>+</p>
              </InfoContentTitle>
              {userCareer.map((career: any) => (
                <Input key={career.id}>
                  <input type="text" placeholder={career.careerCompany}></input>
                  <input type="text" placeholder={career.careerDate}></input>
                </Input>
              ))}
            </>
          )}
        </MyInfoCareer>

        <MyInfocertificate>
          {edit ? (
            <>
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
            </>
          ) : (
            <>
              <InfoContentTitle>
                <p>자격증</p>
                <p onClick={addCertificateInput}>+</p>
              </InfoContentTitle>
              {userCertificate.map((certificate: any) => (
                <Input key={certificate.id}>
                  <input
                    type="text"
                    placeholder={certificate.certificateName}
                  ></input>
                  <input
                    type="date"
                    placeholder={certificate.certificateDate}
                  ></input>
                </Input>
              ))}
            </>
          )}
        </MyInfocertificate>

        <MyInfoText>
          <InfoContentTitle>
            <p>한줄소개</p>
          </InfoContentTitle>
          <InfoContentText>{userLineText}</InfoContentText>
        </MyInfoText>
      </TopSection>
      <BottomSection>
        <Button text={"이력서 수정하기"} onClick={clickEdit} />
      </BottomSection>
    </Section>
  );
};

export default MyCareer;
