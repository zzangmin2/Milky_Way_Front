import { useEffect, useState } from "react";
import { TopSection, InfoTitle, InfoContent } from "../../pages/MyInfo/style";
import { sendUserEditInfo } from "../../utils/apimodule/member";
import { useRecoilValue } from "recoil";
import { userInfoStateSelector } from "../../utils/recoil/atom";

interface UserInfo {
  editName?: any;
  editEmail?: any;
  editNumber?: any;
}

const MyInfoContent = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const { userName, userNumber, userEmail } = useRecoilValue(
    userInfoStateSelector
  );

  const [editUser, setEditUser] = useState<UserInfo>({
    editName: userName,
    editEmail: userEmail,
    editNumber: userNumber,
  });

  const sendClickEdit = async () => {
    try {
      const response: any = await sendUserEditInfo(
        editUser.editName,
        editUser.editEmail,
        editUser.editNumber
      );
      console.log(editUser);
      if (response.data.success) {
        alert("수정완료");
        window.location.reload();
      }
    } catch (error) {
      alert("수정실패");
      console.error("error", error);
    }
  };

  useEffect(() => {
    setEditUser({
      editName: userName,
      editEmail: userEmail,
      editNumber: userNumber,
    });
  }, [userName, userEmail, userNumber]);

  console.log(userNumber);
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
                value={editUser.editEmail || ""}
                onChange={(e) => {
                  setEditUser({
                    ...editUser,
                    editEmail: e.target.value,
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
                value={editUser.editName || ""}
                onChange={(e) => {
                  setEditUser({
                    ...editUser,
                    editName: e.target.value,
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
                value={editUser.editNumber || ""}
                onChange={(e) => {
                  setEditUser({
                    ...editUser,
                    editNumber: e.target.value,
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
