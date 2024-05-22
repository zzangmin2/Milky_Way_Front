import React, { useEffect, useState } from "react";
import { TopSection, InfoTitle, InfoContent } from "../../pages/MyInfo/style";
import { sendUserEditInfo } from "../../utils/apimodule/member";

interface UserInfo {
  userName?: any;
  userEmail?: any;
  userNumber?: any;
}

interface MyInfoContentProps {
  userName: any;
  userEmail: any;
  userNumber: any;
}

const MyInfoContent: React.FC<MyInfoContentProps> = ({
  userName,
  userEmail,
  userNumber,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const [editUser, setEditUser] = useState<UserInfo>({
    userName: "",
    userEmail: "",
    userNumber: "",
  });

  const sendClickEdit = async () => {
    try {
      const response: any = await sendUserEditInfo(
        editUser.userName,
        editUser.userEmail,
        editUser.userNumber
      );
      if (response.data.success) {
        alert("수정완료");
      }
    } catch (error) {
      alert("수정실패");
      console.error("error", error);
    }
  };

  useEffect(() => {
    setEditUser({});
  }, []);
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
            <>
              <p
                onClick={() => {
                  setEdit(true);
                }}
              >
                수정하기
              </p>
            </>
          )}
        </InfoTitle>
        <InfoContent>
          <div>이메일</div>
          <div>
            {edit ? (
              <>
                <input
                  type="text"
                  placeholder={"이메일을 입력하세요"}
                  value={editUser.userEmail}
                  onChange={(e) => {
                    setEditUser({
                      ...editUser,
                      userEmail: e.target.value,
                    });
                  }}
                />
              </>
            ) : (
              <>
                <p>{userEmail}</p>
              </>
            )}
          </div>
        </InfoContent>
        <InfoContent>
          <div>이름</div>
          <div>
            {edit ? (
              <>
                <input
                  type="text"
                  placeholder={"이름을 입력해주세요"}
                  value={editUser.userName}
                  onChange={(e) => {
                    setEditUser({
                      ...editUser,
                      userName: e.target.value,
                    });
                  }}
                ></input>
              </>
            ) : (
              <>
                <p>{userName}</p>
              </>
            )}
          </div>
        </InfoContent>
        <InfoContent>
          <div>전화번호</div>
          <div>
            {edit ? (
              <>
                <input
                  type="text"
                  placeholder={"전화번호를 입력해주세요"}
                  value={editUser.userNumber}
                  onChange={(e) => {
                    setEditUser({
                      ...editUser,
                      userNumber: e.target.value,
                    });
                  }}
                ></input>
              </>
            ) : (
              <>
                <p>{userNumber}</p>
              </>
            )}
          </div>
        </InfoContent>
      </TopSection>
    </>
  );
};

export default MyInfoContent;
