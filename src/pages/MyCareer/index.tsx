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
import {
  userCareerState,
  userCareerStateSelector,
} from "../../utils/recoil/atom";
import { sendUserEditCareer } from "../../utils/apimodule/member";
import { postUserEditCareer } from "../../utils/apimodule/member";
import { toast } from "react-toastify";
import { userCareerUserInfoStateSelector } from "../../utils/recoil/atom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
const MyCareer = () => {
  // 커리어 상태값 리코일아톰사용 careervalue = recoil set사용 / careerdata = recoil value사용
  const careerValue: any = useSetRecoilState(userCareerStateSelector);
  const userInfoValue: any = useSetRecoilState(userCareerUserInfoStateSelector);

  const [userCareerInfo, setUserCareerInfo] = useState("");
  const [userCareerPhoneNumber, setUserCareerPhoneNumber] = useState("");

  const [sendCareerState, setSendCareerState] = useState(false);
  /**
   * 최초 데이터 받아올때 career가 빈 값인지 아닌지를 가리키는 state
   */
  const [careerPostState, setCareerPostState] = useState(false);
  const {
    userName,
    userId,
    userDpt,
    userPhoneNumber,
    userUni,
    userLocation,
  }: any = useRecoilValue(userCareerUserInfoStateSelector);
  //구조분해 할당
  const {
    userCareer = [],
    userCertificate = [],
    userLineText,
  }: any = useRecoilValue(userCareerStateSelector);

  console.log(userCareer);

  // 수정상태인지 아닌지 확인하는 state
  const [edit, setEdit] = useState(true);
  const clickEdit = () => {
    setEdit(false);
  };

  console.log(userCertificate);
  /**
   * 유효성 검사 후에 수정된 이력서 데이터 article api module을 거쳐서 백엔드로 전송
   * @returns
   */
  const sendCareerEdit = async () => {
    try {
      const emptyCareerNames = userCareer.filter(
        (userCareer: any) => userCareer.carName.trim() == ""
      );
      const emptyCareerDates = userCareer.filter(
        (userCareer: any) =>
          userCareer.carStartDay.trim() == "" ||
          userCareer.carEndDay.trim() == ""
      );
      const emptyCertificateNames = userCertificate.filter(
        (userCertificate: any) => userCertificate.certName.trim() == ""
      );
      const emptyCertificateDates = userCertificate.filter(
        (userCertificate: any) => userCertificate.certDate.trim() == ""
      );

      if (emptyCareerNames.length > 0 || emptyCertificateNames.length > 0) {
        toast.warning("경력과 자격증의 이름을 모두 작성해주세요.");
        return;
      }

      if (emptyCareerDates.length > 0 || emptyCertificateDates.length > 0) {
        toast.warning("경력과 자격증의 날짜를 모두 작성해주세요.");
        return;
      }

      setSendCareerState(true);

      const response: any = careerPostState
        ? await postUserEditCareer(userCareer, userCertificate)
        : await sendUserEditCareer(userCareer, userCertificate);
      if (response.success) {
        window.location.reload();
        console.log(careerValue);
        toast.error("이력서 수정이 완료되었습니다!");

        setEdit(true);
      } else {
        toast.error("서버연결 안됨!");
      }
    } catch (error) {
      console.log("실패 : ", error);
    }
  };

  /**
   * 초기 유저데이터 담아와 usesetrecoil인 careervalue에 값 넣기
   */
  const userCareerData = async () => {
    try {
      const data = await viewMyCareer();
      const result = data.data;

      careerValue({
        userCareer: result.careers,
        userCertificate: result.certifications,
      });
      userInfoValue({
        userName: result.basicInfos[0].member.memberName,
        userId: result.basicInfos[0].member.memberId,
        userPhoneNumber: result.basicInfos[0].member.memberPhoneNum,
        userDpt: result.basicInfos[0].member.memberDpt,
        userLocation: result.basicInfos[0].member.memberLocation,
        userUni: result.basicInfos[0].member.memberUniversity,
      });
    } catch (error) {
      console.error("error", error);
    }
    if (userCareer.length > 0 && userCertificate.length > 0) {
      setCareerPostState(true);
    }
  };

  /**
   * 페이지가 마운트될때 유저데이터 불러옴
   */
  useEffect(() => {
    userCareerData();
  }, []);

  /**
   * 경력 추가버튼시 추가 input창 활성화
   */
  const addCareerInput = () => {
    try {
      careerValue((prev: { userCareer: any }) => ({
        ...prev,
        userCareer: [
          ...prev.userCareer,
          {
            id: prev.userCareer.length + 1,
            carName: "",
            carStartDay: "",
            carEndDay: "",
          },
        ],
      }));
    } catch (error: any) {
      toast.error("경력 추가 실패");
      throw error;
    }
  };

  /**
   * 자격증 추가버튼시 추가 certificate창 활성화
   */
  const addCertificateInput = () => {
    try {
      careerValue((prev: { userCertificate: any[] }) => ({
        ...prev,
        userCertificate: [
          ...prev.userCertificate,
          {
            id: prev.userCertificate.length + 1,
            certName: "",
            certDate: "",
          },
        ],
      }));
    } catch (errror) {
      toast.error("자격증 추가 실패!");
      throw errror;
    }
  };

  /**
   * id에 맞는 certificate지움
   * @param certificateId
   */
  const deleteCertificate = (certificateId: any) => {
    careerValue((prev: any) => ({
      ...prev,
      userCertificate: prev.userCertificate.filter(
        (certificate: any) => certificate.id !== certificateId
      ),
    }));
    console.log(certificateId);
  };

  /**
   * id에 맞는 career지움
   * @param careerId
   */
  const deleteCareer = (careerId: any) => {
    careerValue((prev: any) => ({
      ...prev,
      userCareer: prev.userCareer.filter(
        (career: any) => career.id !== careerId
      ),
    }));
  };

  console.log(userCareer);

  return (
    <Section>
      <TopSection>
        <MyInfoTitle>
          <div>이력서</div>
        </MyInfoTitle>
        {edit ? (
          <MyInfoContent>
            {/* {userId.length > 0 ? <>@{userId}</> : <></>} */}
            <FirstInfoContentTitle>
              {userName} @{userId}
            </FirstInfoContentTitle>
            <div>
              {userUni ? <>{userUni}</> : <>등록된 대학교가 없습니다.</>}
            </div>
            <div>
              {userPhoneNumber ? (
                <>{userPhoneNumber}</>
              ) : (
                <>등록된 전화번호가 없습니다.</>
              )}
            </div>
            <div>
              {userDpt ? <>{userDpt}</> : <>등록된 학과(학부)가 없습니다.</>}
            </div>
            <div>
              {userLocation ? (
                <>{userLocation}</>
              ) : (
                <>등록된 지역이 없습니다.</>
              )}
            </div>
          </MyInfoContent>
        ) : (
          <>
            <MyInfoContentEdit>
              <FirstInfoContentTitle>
                {userName} {userId}
              </FirstInfoContentTitle>
              <div>{userUni}</div>
              <div>{userPhoneNumber}</div>
              {userDpt ? (
                <input placeholder={userDpt} />
              ) : (
                <>
                  <input placeholder={"학과를 입력해주세요"} />
                </>
              )}
              {userPhoneNumber ? (
                <input placeholder={userPhoneNumber} />
              ) : (
                <>
                  <input placeholder={"전화번호를 입력해주세요"} />
                </>
              )}
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
                    <div>{career.carName}</div>
                    <div>
                      {career.carStartDay}~{career.carEndDay}
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
                    value={career.carName}
                    onChange={(e) =>
                      careerValue((prev: any) => ({
                        ...prev,
                        userCareer: prev.userCareer.map((item: any) =>
                          item.id === career.id
                            ? {
                                ...item,
                                carName: e.target.value,
                              }
                            : item
                        ),
                      }))
                    }
                  />
                  <input
                    type="date"
                    value={career.carStartDay}
                    onChange={(e) =>
                      careerValue((prev: any) => ({
                        ...prev,
                        userCareer: prev.userCareer.map((item: any) =>
                          item.id === career.id
                            ? { ...item, carStartDay: e.target.value }
                            : item
                        ),
                      }))
                    }
                  />
                  <input
                    type="date"
                    value={career.carEndDay}
                    onChange={(e) =>
                      careerValue((prev: any) => ({
                        ...prev,
                        userCareer: prev.userCareer.map((item: any) =>
                          item.id === career.id
                            ? { ...item, carEndDay: e.target.value }
                            : item
                        ),
                      }))
                    }
                  />
                  <p
                    onClick={() => {
                      deleteCareer(career.id);
                    }}
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    -
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
                  <p
                    onClick={() => {
                      deleteCertificate(certificate.id);
                    }}
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    -
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
            <InfoContentLineText>
              {userLineText ? (
                <>{userLineText}</>
              ) : (
                <>등록된 한줄소개가 없습니다.</>
              )}
            </InfoContentLineText>
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
