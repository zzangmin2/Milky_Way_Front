import { useState } from "react";
import { TopSection, InfoTitle, InfoContent } from "./styles";
import { sendUserEditInfo } from "../../utils/apimodule/member";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoStateSelector } from "../../utils/recoil/atom";
import { toast } from "react-toastify";

const MyInfoContent = () => {
  const [edit, setEdit] = useState<boolean>(false);

  const [userInfoState, setUserInfoState] = useRecoilState(
    userInfoStateSelector
  );

  const { userName, userNumber, userEmail } = useRecoilValue(
    userInfoStateSelector
  );

  const sendClickEdit = async () => {
    try {
      const response: any = await sendUserEditInfo(
        userName,

        userEmail,
        userNumber
      );

      if (response.success) {
        toast.success("내정보 수정이 성공하였습니다.");
      }
    } catch (error) {
      toast.error("수정실패");
      console.error("error", error);
    }
  };

  return (
    <>
      <TopSection>
        <InfoTitle>
          <div>내정보</div>
          {edit ? (
            <p
              onClick={() => {
                setEdit(false);
                sendClickEdit();
              }}
            >
              수정완료
            </p>
          ) : (
            <p
              onClick={() => {
                setEdit(true);
              }}
            >
              수정하기
            </p>
          )}
        </InfoTitle>
        <InfoContent>
          <div>이메일</div>
          <div>
            {edit ? (
              <input
                type="text"
                placeholder={userEmail}
                value={userInfoState.userEmail || ""}
                onChange={(e) => {
                  setUserInfoState({
                    ...userInfoState,
                    userEmail: e.target.value,
                  });
                }}
              />
            ) : (
              <p>{userEmail}</p>
            )}
          </div>
        </InfoContent>
        <InfoContent>
          <div>이름</div>
          <div>
            {edit ? (
              <input
                type="text"
                placeholder={userName}
                value={userInfoState.userName || ""}
                onChange={(e) => {
                  setUserInfoState({
                    ...userInfoState,
                    userName: e.target.value,
                  });
                }}
              />
            ) : (
              <p>{userName}</p>
            )}
          </div>
        </InfoContent>
        <InfoContent>
          <div>전화번호</div>
          <div>
            {edit ? (
              <input
                type="text"
                placeholder={userNumber}
                value={userInfoState.userNumber || ""}
                onChange={(e) => {
                  setUserInfoState({
                    ...userInfoState,
                    userNumber: e.target.value,
                  });
                }}
              />
            ) : (
              <p>{userNumber}</p>
            )}
          </div>
        </InfoContent>
      </TopSection>
    </>
  );
};

export default MyInfoContent;
