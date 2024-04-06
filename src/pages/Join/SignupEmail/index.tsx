import Button from "../../../components/Button";
import SignupInput from "../SignupInput";
import {
  BottomSection,
  TopSection,
  Box,
  ProgressContainer,
  ProgressText,
  ProgressBar,
} from "../styles";
import { useEffect, useState } from "react";
import { sendEmailUserInfo } from "../../../utils/apimodule/member";
import { useNavigate } from "react-router-dom";
import { userCompareState } from "../../../utils/recoil/atom";
import { useSetRecoilState } from "recoil";
import { sendEmailVerify } from "../../../utils/apimodule/member";
const SignupEmail = () => {
  const [email, setEmail] = useState("");
  const [emailInState, setEmailInState] = useState(false);
  const [emailSendon, setEmailSendon] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const setUserCompare = useSetRecoilState(userCompareState);

  const navigate = useNavigate();
  /**
   * 최초 인증하기 버튼
   */
  const sendEmailedOn = async () => {
    try {
      const result = await sendEmailUserInfo(email);
      if (result.success) {
        setEmailSendon(true);
      } else {
        throw result;
      }
    } catch (error: any) {
      alert(`실패: ${error.message}`);
    }
  };

  /**
   * sendEmailVeify로 인증번호 일치 확인
   */

  const sendEmailedVerify = async () => {
    try {
      const result = await sendEmailVerify(verifyEmail);
      if (result.success) {
        setEmailInState(true);
      } else {
        throw result;
      }
    } catch (error: any) {
      alert(`실패: ${error.message}`);
    }
  };

  useEffect(() => {
    const defaultUserCompareState = {
      email: "",
      id: "",
      password: "",
      name: "",
      dpt: "",
      number: "",
    };
    setUserCompare(defaultUserCompareState);
  }, [setUserCompare]);

  const newValue = {
    email: email,
    id: "",
    password: "",
    name: "",
    dpt: "",
    number: "",
  };
  const stateUserInfo = (): Promise<void | undefined> => {
    return new Promise((resolve, reject) => {
      try {
        setUserCompare(newValue);
        navigate("/users/signupcompare");
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
            <ProgressText>1/3</ProgressText>
            <ProgressBar value={30} max={90}></ProgressBar>
          </ProgressContainer>
          <div>
            <p>
              학교 인증을 위한 <br />
              아메일을 입력해주세요
            </p>
          </div>
          <div>
            <SignupInput
              type="email"
              name="email"
              placeholder={"이메일을 입력해주세요"}
              onChange={setEmail}
            />
            <div>
              {!sendEmailedOn ? (
                <Button text={"이메일 인증하기"} onClick={sendEmailedOn} />
              ) : (
                <>
                  <SignupInput
                    type="text"
                    name="emailVerify"
                    placeholder="인증번호를 입력해주세요"
                    onChange={setVerifyEmail}
                  />
                  <Button text={"인증 하기"} onClick={sendEmailedVerify} />
                </>
              )}
            </div>
          </div>
        </TopSection>
        <BottomSection>
          {emailInState ? (
            <Button text={"다음"} color={"#133488"} onClick={stateUserInfo} /> //성공시 url활성화("button/index.ts)_fix하기"
          ) : (
            <Button text={"다음"} color={"#a8a8a8"} />
          )}
        </BottomSection>
      </Box>
    </>
  );
};

export default SignupEmail;
