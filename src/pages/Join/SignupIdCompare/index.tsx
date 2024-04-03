import { useState } from "react";
import Button from "../../../components/Button";
import {
  BottomSection,
  TopSection,
  Box,
  ProgressContainer,
  ProgressText,
  ProgressBar,
} from "../styles";
import { useNavigate } from "react-router-dom";
import { sendUserCompareInfo } from "../../../utils/apimodule/member";
import {
  userCompareState,
  userCompareValues,
} from "../../../utils/recoil/atom";
import { useSetRecoilState } from "recoil";
import SignupInput from "../SignupInput";

const SignupIdCompare = () => {
  const userCompare = useSetRecoilState(userCompareState);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [compareInState, setCompareInState] = useState(false);
  const [usersInfo, setUsersInfo] = useState({
    id: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();

  const sendUserInfo = async () => {
    // 아이디체크

    console.log("sendUserInfo");
    try {
      const result = await sendUserCompareInfo(id, password);
      if (result.success) {
        setCompareInState(true);
        alert("중복된 아이디가 없습니다"); //유저 인포 상태 스테이트?추가
      } else {
        throw result;
      }
    } catch (error: any) {
      alert(`실패: ${error.message}`);
    }
  };

  const userInfo: any = { id: id, password: password }; // 타입 값 수정 필요

  const stateUserInfo = (): Promise<void | undefined> => {
    //전체 수정 필요
    return new Promise((resolve, reject) => {
      if (!id || !password || !confirmPassword) {
        alert("아이디와 비밀번호를 입력해주세요.");
        setCompareInState(false);
        return;
      }

      if (password !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        setCompareInState(false);
        return;
      }
      try {
        userCompare(userInfo); // 배열 수정
        navigate("/users/signupinfo");
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <>
      <Box>
        <TopSection>
          <ProgressContainer>
            <ProgressText>2/3</ProgressText>
            <ProgressBar value={60} max={90}></ProgressBar>
          </ProgressContainer>
          <div>
            <p>
              아이디와 <br />
              비밀번호를 입력해주세요
            </p>
          </div>
          <div>
            <SignupInput
              placeholder={"아이디를 입력 해주세요"}
              type="text"
              name="id"
              onChange={setId}
            />
            <Button onClick={sendUserInfo} />
            <SignupInput
              placeholder={"비밀번호를 입력 해주세요"}
              name="password"
              type="password"
              onChange={setPassword}
            />
            <SignupInput
              placeholder={"비밀번호 확인을 위해 한번 더 입력 해주세요"}
              type="password"
              name="confirmPassword"
              onChange={setConfirmPassword}
            />
          </div>
        </TopSection>
        <BottomSection>
          {compareInState ? ( // 성공시 url활성화("button/index.ts)_fix하기"
            <Button text={"다음"} color={"#133488"} onClick={stateUserInfo} />
          ) : (
            <Button text={"다음"} color={"#a8a8a8"} />
          )}
        </BottomSection>
      </Box>
    </>
  );
};

export default SignupIdCompare;
