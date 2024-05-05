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
  InputCareer,
  FirstInfoContentTitle,
  InfoContentLineText,
} from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { viewMyCareer } from "../../utils/apimodule/article";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userCareerState } from "../../utils/recoil/atom";
import { sendUserEditCareer } from "../../utils/apimodule/member";

const MyCareer = () => {
  const careerValue: any = useSetRecoilState(userCareerState);
  const { userName, userCareer, userCertificate, userLineText } =
    useRecoilValue(userCareerState);

  const [edit, setEdit] = useState(true);
  const clickEdit = () => {
    setEdit(false);
  };

  const sendCareerEdit = async () => {
    try {
      const response = await sendUserEditCareer(
        userName,
        userCareer,
        userCertificate,
        userLineText
      );
      if (response.success) {
        alert("이력서 수정이 완료되었습니다!");
        setEdit(true);
      } else {
        alert("실패!");
        console.log(userName, userCareer, userCertificate, userLineText);
      }
    } catch (error) {
      console.log("실패 : ", error);
    }
  };

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

  useEffect(() => {
    userInfoData();
  }, []);

  const formatDate = (date: string | number | Date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const addCareerInput = () => {
    const today = new Date();
    const formattedDate = formatDate(today);

    careerValue((prev: { userCareer: string | any[] }) => ({
      ...prev,
      userCareer: [
        ...prev.userCareer,
        {
          id: prev.userCareer.length + 1,
          careerCompany: "",
          careerDate: formattedDate,
        },
      ],
    }));
  };

  const addCertificateInput = () => {
    const today = new Date();
    const formattedDate = formatDate(today);
    careerValue((prev: { userCertificate: string | any[] }) => ({
      ...prev,
      userCertificate: [
        ...prev.userCertificate,
        {
          id: prev.userCertificate.length + 1,
          certificateName: "",
          certificateDate: formattedDate,
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
          <FirstInfoContentTitle>{userName} @ktg5679</FirstInfoContentTitle>
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
            </>
          ) : (
            <>
              <InfoContentTitle>
                <p>경력</p>
                <p onClick={addCareerInput}>+</p>
              </InfoContentTitle>
              {userCareer.map((career: any) => (
                <InputCareer key={career.id}>
                  <input type="text" placeholder={career.careerCompany}></input>
                  <input type="date" value={career.careerFirstDate}></input>
                  <input type="date" value={career.careerLastDate}></input>
                </InputCareer>
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
                <InputCareer key={certificate.id}>
                  <input
                    type="text"
                    placeholder="자격증 이름"
                    value={certificate.certificateName}
                    onChange={(e) =>
                      careerValue((prev: any) => ({
                        ...prev,
                        userCertificate: prev.userCertificate.map((item: any) =>
                          item.id === certificate.id
                            ? { ...item, certificateName: e.target.value }
                            : item
                        ),
                      }))
                    }
                  ></input>

                  <input
                    type="date"
                    value={certificate.certificateDate}
                    onChange={(e) =>
                      careerValue((prev: any) => ({
                        ...prev,
                        userCertificate: prev.userCertificate.map((item: any) =>
                          item.id === certificate.id
                            ? { ...item, certificateDate: e.target.value }
                            : item
                        ),
                      }))
                    }
                  ></input>
                </InputCareer>
              ))}
            </>
          )}
        </MyInfocertificate>

        <MyInfoText>
          <InfoContentTitle>
            <p>한줄소개</p>
          </InfoContentTitle>
          {edit ? (
            <InfoContentLineText>{userLineText}</InfoContentLineText>
          ) : (
            <>
              <InfoContentLineText>
                <Input
                  placeholder="한줄소개를 입력하세요"
                  value={userLineText}
                  setValue={(newValue) =>
                    careerValue((prev: any) => ({
                      ...prev,
                      userLineText: newValue,
                    }))
                  }
                />
              </InfoContentLineText>
            </>
          )}
        </MyInfoText>
      </TopSection>
      <BottomSection>
        {edit ? (
          <Button text={"이력서 수정하기"} onClick={clickEdit} />
        ) : (
          <Button text={"이력서 수정완료"} onClick={sendCareerEdit} />
        )}
      </BottomSection>
    </Section>
  );
};

export default MyCareer;
