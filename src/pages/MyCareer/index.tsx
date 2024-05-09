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
  MyInfoContentEdit,
} from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { viewMyCareer } from "../../utils/apimodule/article";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userCareerState } from "../../utils/recoil/atom";
import { sendUserEditCareer } from "../../utils/apimodule/member";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const MyCareer = () => {
  const careerValue: any = useSetRecoilState(userCareerState);
  const {
    userName,
    userCareer = [],
    userCertificate = [],
    userLineText,
  } = useRecoilValue(userCareerState);

  const [edit, setEdit] = useState(true);
  const clickEdit = () => {
    setEdit(false);
  };

  console.log(userCertificate);
  const sendCareerEdit = async () => {
    try {
      const emptyCareerNames = userCareer.filter(
        (userCareer: any) => userCareer.careerCompany.trim() == ""
      );
      const emptyCareerDates = userCareer.filter(
        (userCareer: any) =>
          userCareer.careerFirstDate.trim() == "" ||
          userCareer.careerLastDate.trim() == ""
      );
      const emptyCertificateNames = userCertificate.filter(
        (userCertificate: any) => userCertificate.certificateName.trim() == ""
      );
      const emptyCertificateDates = userCertificate.filter(
        (userCertificate: any) => userCertificate.certificateDate.trim() == ""
      );

      console.log("emptyCareerNames", emptyCareerNames);
      console.log("emptyCareerDates", emptyCareerDates);
      console.log("emptyCertificateNames", emptyCertificateNames);
      console.log("emptyCertificateDates", emptyCertificateDates);

      if (emptyCareerNames.length > 0 || emptyCertificateNames.length > 0) {
        alert("경력과 자격증의 이름을 모두 작성해주세요.");
        return;
      }

      if (emptyCareerDates.length > 0 || emptyCertificateDates.length > 0) {
        alert("경력과 자격증의 날짜를 모두 작성해주세요.");
        return;
      }

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
        alert("서버연결 안됨!");
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
      console.log(result);
      careerValue({
        userName: result.userName,
        userCareer: result.userCareer,
        userCertificate: result.userCertificate,
        userLineText: result.userLineText,
      });

      console.log(careerValue.userCareer);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    userInfoData();
  }, []);

  const addCareerInput = () => {
    try {
      careerValue((prev: { userCareer: any }) => ({
        ...prev,
        userCareer: [
          ...prev.userCareer,
          {
            id: prev.userCareer.length + 1,
            careerCompany: "",
            careerFirstDate: "",
            careerLastDate: "",
          },
        ],
      }));
    } catch (error: any) {
      alert("경력 추가 실패");
      throw error;
    }
  };

  const addCertificateInput = () => {
    try {
      careerValue((prev: { userCertificate: any[] }) => ({
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
    } catch (errror) {
      alert("자격증 추가 실패!");
      throw errror;
    }
  };

  const deleteCertificate = (certificateId: any) => {
    careerValue((prev: any) => ({
      ...prev,
      userCertificate: prev.userCertificate.filter(
        (certificate: any) => certificate.id !== certificateId
      ),
    }));
    console.log(certificateId);
  };

  const deleteCareer = (careerId: any) => {
    careerValue((prev: any) => ({
      ...prev,
      userCareer: prev.userCareer.filter(
        (career: any) => career.id !== careerId
      ),
    }));
  };

  return (
    <Section>
      <TopSection>
        <MyInfoTitle>
          <div>이력서</div>
        </MyInfoTitle>
        {edit ? (
          <MyInfoContent>
            <FirstInfoContentTitle>{userName} @ktg5679</FirstInfoContentTitle>
            <div>대림대학교</div>
            <div>010-2992-5679</div>
            <div>컴퓨터정보학부</div>
            <div>안양시 만안구 안양1동</div>
          </MyInfoContent>
        ) : (
          <>
            <MyInfoContentEdit>
              <FirstInfoContentTitle>{userName} @ktg5679</FirstInfoContentTitle>
              <div>대림대학교</div>
              <div>010-2992-5679</div>
              <input placeholder="학과를 입력해주세요" />
              <input placeholder="지역을 입력하세요" />
            </MyInfoContentEdit>
          </>
        )}
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
                  <input
                    type="text"
                    placeholder="회사명"
                    value={career.careerCompany}
                    onChange={(e) =>
                      careerValue((prev: any) => ({
                        ...prev,
                        userCareer: prev.userCareer.map((item: any) =>
                          item.id === career.id
                            ? {
                                ...item,
                                careerCompany: e.target.value,
                              }
                            : item
                        ),
                      }))
                    }
                  />
                  <input
                    type="date"
                    value={career.careerFirstDate}
                    onChange={(e) =>
                      careerValue((prev: any) => ({
                        ...prev,
                        userCareer: prev.userCareer.map((item: any) =>
                          item.id === career.id
                            ? { ...item, careerFirstDate: e.target.value }
                            : item
                        ),
                      }))
                    }
                  />
                  <input
                    type="date"
                    value={career.careerLastDate}
                    onChange={(e) =>
                      careerValue((prev: any) => ({
                        ...prev,
                        userCareer: prev.userCareer.map((item: any) =>
                          item.id === career.id
                            ? { ...item, careerLastDate: e.target.value }
                            : item
                        ),
                      }))
                    }
                  />
                  <p
                    onClick={() => {
                      deleteCareer(career.id);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "#ff3333" }}
                    />
                  </p>
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
                  <p onClick={() => deleteCertificate(certificate.id)}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "#ff3333" }}
                    />
                  </p>
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
