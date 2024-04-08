import { useEffect, useState } from "react";
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
import { userCompareState, compareSuccesses } from "../../../utils/recoil/atom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import SignupInput from "../SignupInput";
import { emailSuccesses } from "../../../utils/recoil/atom";
import ErrorPage from "../../RoutePage/ErrorPage";

const SignupIdCompare = () => {
  const emailSuccessIn = useRecoilValue(emailSuccesses);
  const userCompare = useSetRecoilState(userCompareState);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const compareSuccessIn = useSetRecoilState(compareSuccesses);

  const [compareInState, setCompareInState] = useState(false);

  const navigate = useNavigate();

  const sendUserInfo = async () => {
    // 아이디체크
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
        compareSuccessIn(true);
        userCompare(userInfo);
        navigate("/users/signupinfo");
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <>
      {emailSuccessIn ? (
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
              >
                <Button onClick={sendUserInfo} text={"중복확인"} />
              </SignupInput>

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
            {!compareInState ? (
              <Button text={"다음"} color={"#133488"} onClick={stateUserInfo} />
            ) : (
              <Button text={"다음"} color={"#a8a8a8"} />
            )}
          </BottomSection>
        </Box>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default SignupIdCompare;
