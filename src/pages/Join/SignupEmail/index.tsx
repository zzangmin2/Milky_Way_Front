import Button from "../../../components/Button";
import SignupInput from "../SignupInput";
import {
  BottomSection,
  TopSection,
  Box,
  ProgressContainer,
  ProgressText,
  ProgressBar,
  EmailText,
} from "../styles";
import { useEffect, useState } from "react";
// import { sendEmailUserInfo } from "../../../utils/apimodule/member";
import { useNavigate } from "react-router-dom";
import {
  emailSuccesses,
  userCompareState,
  userCompareValues,
} from "../../../utils/recoil/atom";
import { useSetRecoilState, useRecoilValue } from "recoil";
// import { sendEmailVerify } from "../../../utils/apimodule/member";

const SignupEmail = () => {
  const [email, setEmail] = useState("");
  const [emailInState, setEmailInState] = useState<boolean | undefined>(false);
  const [emailSendon, setEmailSendon] = useState<boolean | undefined>(false);
  const [verifyEmail, setVerifyEmail] = useState<string>("");
  const userCompare = useSetRecoilState(userCompareValues);
  const compareValue = useRecoilValue(userCompareValues);

  const emailSuccessIn = useSetRecoilState(emailSuccesses);
  // 라우터 프로텍트 위한 아톰
  const navigate = useNavigate();
  /**
   * 최초 인증하기 버튼     * 테스트용으로 잠시 지우
   */
  // const sendEmailedOn = async () => {
  //   console.log(email);

  //   try {
  //     const result = await sendEmailUserInfo(email);
  //     if (result.success) {
  //       setEmailSendon(true);
  //     } else {
  //       throw result;
  //     }
  //   } catch (error: any) {
  //     toast.error(`실패: ${error.message}`);
  //   }
  // };

  /**
   * sendEmailVeify로 인증번호 일치 확인
   */

  // const sendEmailedVerify = async () => {
  //   try {
  //     const result = await sendEmailVerify(verifyEmail);
  //     if (result.success) {
  //       setEmailInState(true);
  //     } else {
  //       throw result;
  //     }
  //   } catch (error: any) {
  //     toast.error(`실패: ${error.message}`);
  //   }
  // };

  useEffect(() => {
    const defaultUserCompareState = {
      email: "",
      id: "",
      password: "",
      name: "",
      dpt: "",
      number: "",
    };
    userCompare(defaultUserCompareState);
  }, []);

  const newValue = {
    email: email,
  };

  const stateUserInfo = (): Promise<void | undefined> => {
    emailSuccessIn(true);
    return new Promise((resolve, reject) => {
      try {
        userCompare(newValue);
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
            <div>
              {!emailSendon ? (
                <>
                  <SignupInput
                    type="email"
                    name="email"
                    placeholder={"이메일을 입력해주세요"}
                    setValue={setEmail}
                  />
                  {/* <Button text={"이메일 인증하기"} onClick={sendEmailedOn} /> */}
                </>
              ) : (
                <>
                  <SignupInput
                    type="email"
                    name="email"
                    placeholder={email}
                    disable={true}
                  />
                  <SignupInput
                    type="text"
                    name="emailVerify"
                    placeholder="인증번호를 입력해주세요"
                    setValue={setVerifyEmail}
                  />
                  {/* <Button text={"인증 하기"} onClick={sendEmailedVerify} /> */}
                  {emailInState ? (
                    <EmailText color={"green"}>✅ 이메일 인증 완료!</EmailText>
                  ) : (
                    <EmailText color={"gray"}>00:00</EmailText>
                  )}
                </>
              )}
            </div>
          </div>
        </TopSection>
        <BottomSection>
          {!emailInState ? ( // 이메일 인증이 원래 활성화 되었을때에 위치
            <Button text={"다음"} color={"#133488"} onClick={stateUserInfo} />
          ) : (
            <Button text={"다음"} color={"#a8a8a8"} />
          )}
        </BottomSection>
      </Box>
    </>
  );
};

export default SignupEmail;
