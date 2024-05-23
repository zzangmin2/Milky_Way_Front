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
import { userCareerStateSelector } from "../../utils/recoil/atom";
import { putUserEditCareer } from "../../utils/apimodule/member";
import { postUserEditCareer } from "../../utils/apimodule/member";
import { postUserEditCareerInfo } from "../../utils/apimodule/member";
import { putUserEditCareerInfo } from "../../utils/apimodule/member";
import { userCareerUserInfoStateSelector } from "../../utils/recoil/atom";
import { validateCareer } from "../../utils/validations/validation";
import { toast } from "react-toastify";

const MyCareer = () => {
  // 커리어 상태값 리코일아톰사용 careervalue = recoil set사용 / careerdata = recoil value사용
  const careerValue: any = useSetRecoilState(userCareerStateSelector);
  const userInfoValue: any = useSetRecoilState(userCareerUserInfoStateSelector);

  /**
   * 최초 데이터 받아올때 career가 빈 값인지 아닌지를 가리키는 state
   */
  const [careerPostState, setCareerPostState] = useState(false);

  //구조분해 할당
  const { userName, userId, userDpt, userPhoneNumber, userLocation }: any =
    useRecoilValue(userCareerUserInfoStateSelector);

  const [infoEdit, setInfoEdit] = useState<any>({
    editDpt: userDpt,
    editLocation: userLocation,
  });
  //구조분해 할당
  const {
    userCareer = [],
    userCertificate = [],
    userLineText,
  }: any = useRecoilValue(userCareerStateSelector);

  // 수정상태인지 아닌지 확인하는 state
  const [edit, setEdit] = useState(true);
  const clickEdit = () => {
    setEdit(false);
  };

  /**
   * 유효성 검사 후에 수정된 이력서 데이터 article api module을 거쳐서 백엔드로 전송
   * @returns
   */
  const sendCareerEdit = async () => {
    console.log(infoEdit);
    try {
      if (!validateCareer(userCareer, userCertificate)) {
        return;
      }
      let response: any;
      if (careerPostState) {
        response = await Promise.all([
          postUserEditCareer(userCareer, userCertificate),
          postUserEditCareerInfo(),
        ]);
      } else {
        response = await Promise.all([
          putUserEditCareer(userCareer, userCertificate),
          putUserEditCareerInfo(),
        ]);
      }
      if (response.success) {
        window.location.reload();
        console.log(careerValue);
        toast.error("이력서 수정이 완료되었습니다!");

        setEdit(true);
      } else {
        toast.error("서버연결 안됨!");
        window.location.reload();
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
      const member: any = data.data.basicInfos[0].member;
      const career: any = data.data.careers;
      console.log(member);
      console.log(data.data);

      careerValue({
        userCareer: career.careers || [],
        userCertificate: career.certifications || [],
      });
      userInfoValue({
        // userName: member.memberName,
        // userId: member.memberId,
        // userPhoneNumber: member.memberPhoneNum,
        // userDpt: member.memberDpt,
        // userLocation: member.memberLocation,
        // userUni: member.memberUniversity,
        userName: "김태겸",
        userId: "1",
        userPhoneNumber: "010",
        userDpt: "컴퓨터정보학부",
        userLocation: "안양시",
        userUni: "대학교",
      });
    } catch (error) {
      console.error("error", error);
    }
    if (
      userCareer.length > 0 &&
      userCertificate.length > 0 &&
      userInfoValue.length > 0
    ) {
      setCareerPostState(true);
    }
  };

  console.log(userName);

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

  /**
   * 페이지가 마운트될때 유저데이터 불러옴
   */
  useEffect(() => {
    userCareerData();
    setInfoEdit({
      editDpt: userDpt,
      editLocation: userLocation,
    });
  }, []);

  console.log(infoEdit);

  return (
    <Section>
      <TopSection>
        <MyInfoTitle>
          <div>이력서</div>
        </MyInfoTitle>
        {edit ? (
          <MyInfoContent>
            <FirstInfoContentTitle>
              {userName} @{userId}
            </FirstInfoContentTitle>
            <div></div>

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
              <div></div>

              <div>
                {userPhoneNumber
                  ? userPhoneNumber
                  : "등록된 전화번호가 없습니다."}
              </div>
              {userDpt ? (
                <input placeholder={userDpt} />
              ) : (
                <>
                  <input
                    type="text"
                    placeholder={userDpt || "학과를 입력해주세요"}
                    value={infoEdit.editDpt}
                    onChange={(e) => {
                      setInfoEdit({
                        ...setInfoEdit,
                        editDpt: e.target.value,
                      });
                    }}
                  />
                </>
              )}
              {userLocation ? (
                <input placeholder={userLocation} />
              ) : (
                <>
                  <input
                    placeholder={userLocation || "지역을 입력해주세요"}
                    value={infoEdit.editLocation}
                    onChange={(e) => {
                      setInfoEdit({
                        ...setInfoEdit,
                        editLocation: e.target.value,
                      });
                    }}
                  />
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
