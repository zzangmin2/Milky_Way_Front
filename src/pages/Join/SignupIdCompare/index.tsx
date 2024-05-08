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
// import { sendUserCompareInfo } from "../../../utils/apimodule/member";
import {
  userCompareState,
  compareSuccesses,
  userCompareValues,
} from "../../../utils/recoil/atom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import SignupInput from "../SignupInput";
import { emailSuccesses } from "../../../utils/recoil/atom";
import ErrorPage from "../../RoutePage/ErrorPage";
import { sendUserCompareInfo } from "../../../utils/apimodule/member";
import { error } from "console";

const SignupIdCompare = () => {
  const emailSuccessIn = useRecoilValue(emailSuccesses);
  const userCompare = useSetRecoilState(userCompareValues);
  const compareValue = useRecoilValue(userCompareValues);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const compareSuccessIn = useSetRecoilState(compareSuccesses);

  const [compareInState, setCompareInState] = useState(false);

  const navigate = useNavigate();

  const sendUseridVerify = async () => {
    try {
      const result = await sendUserCompareInfo(id);
      if (result.success) {
        setCompareInState(true);
        alert("중복된 아이디가 없습니다");
      } else {
        // throw error;
      }
    } catch (error: any) {
      alert(`실패: ${error.message}`);
    }
  };

  const stateUserInfo = (): Promise<void | undefined> => {
    return new Promise((resolve, reject) => {
      if (!id || !password || !confirmPassword) {
        alert("아이디와 비밀번호를 입력해주세요.");

        return;
      }

      if (password !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");

        return;
      } else {
        setConfirmPassword: Boolean(true);
      }

      try {
        compareSuccessIn(true);
        userCompare(newValue);
        navigate("/users/signupinfo");
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  const newValue = {
    ...compareValue,
    id: id,
    password: password,
  };

  console.log(compareValue);

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
              {!compareInState ? (
                <SignupInput
                  placeholder={"아이디를 입력 해주세요"}
                  type="verify"
                  name="id"
                  value={id}
                  setValue={setId}
                  onClick={sendUseridVerify}
                />
              ) : (
                <>
                  <SignupInput
                    placeholder={"아이디를 입력 해주세요"}
                    type="verify"
                    disable
                    name="id"
                    value={id}
                    onClick={sendUseridVerify}
                  />
                </>
              )}

              <SignupInput
                placeholder={"비밀번호를 입력 해주세요"}
                name="password"
                type="password"
                setValue={setPassword}
              />
              <SignupInput
                placeholder={"비밀번호 확인을 위해 한번 더 입력 해주세요"}
                type="password"
                name="confirmPassword"
                setValue={setConfirmPassword}
              />
            </div>
          </TopSection>
          <BottomSection>
            {compareInState ? (
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
