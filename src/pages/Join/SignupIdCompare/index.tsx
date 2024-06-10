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

import {
  compareSuccesses,
  userCompareValues,
} from "../../../utils/recoil/atom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import SignupInput from "../../../components/SignupInput";
import { emailSuccesses } from "../../../utils/recoil/atom";
import ErrorPage from "../../RoutePage/ErrorPage";
import { sendUserCompareInfo } from "../../../utils/apimodule/member";
import { toast } from "react-toastify";
import {
  validateSignupCompare,
  validateSignupId,
} from "../../../utils/validations/validation";

const SignupIdCompare = () => {
  const emailSuccessIn = useRecoilValue(emailSuccesses);
  const userCompare = useSetRecoilState(userCompareValues);
  const compareValue = useRecoilValue(userCompareValues);
  const [PwdValidate, setPwdValidate] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const compareSuccessIn = useSetRecoilState(compareSuccesses);

  const [compareInState, setCompareInState] = useState(false);

  const navigate = useNavigate();

  const sendUseridVerify = async () => {
    const { isValid, message } = validateSignupId(id);
    if (!isValid) {
      toast.warning(message);
      return;
    }

    try {
      const result = await sendUserCompareInfo(id);
      console.log(result);
      if (result.success) {
        alert("중복된 아이디가 없습니다");
        setCompareInState(true);
      } else {
        console.log(id);
        toast.warning("존재하는 아이디입니다");
      }
    } catch (error: any) {
      alert(`실패: ${error.message}`);
    }
  };

  const stateUserInfo = (): Promise<void | undefined> => {
    return new Promise((resolve, reject) => {
      const { isValid, message } = validateSignupCompare(
        id,
        password,
        confirmPassword
      );
      if (!isValid) {
        toast.warning(message);
        return;
      }

      try {
        setPwdValidate(false);
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
                <SignupInput
                  placeholder={"아이디를 입력 해주세요"}
                  type="verify"
                  disabled={true}
                  name="id"
                  color="#111111"
                  value={id}
                  onClick={sendUseridVerify}
                />
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
            {PwdValidate && (
              <>
                <div>비밀번호가 일치하지 않습니다.</div>
              </>
            )}
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
