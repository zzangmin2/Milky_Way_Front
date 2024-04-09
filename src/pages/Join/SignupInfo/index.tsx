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
import { sendUserInfo } from "../../../utils/apimodule/member";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ErrorPage from "../../RoutePage/ErrorPage";
import { emailSuccesses, compareSuccesses } from "../../../utils/recoil/atom";

const SignupInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dpt, setDpt] = useState("");
  const [number, setNumber] = useState("");

  // 이 부분을 본문(body) 내부로 이동합니다.
  const emailSuccessIn = useRecoilValue(emailSuccesses);
  const compareSuccessIn = useRecoilValue(compareSuccesses);

  const sendUserInfoOnClick = async () => {
    try {
      const result = await sendUserInfo(name, dpt, number);
      if (result.success) {
        alert(`${name}님! 회원가입이 완료되었습니다.`);
        navigate("/users/login");
      } else {
        throw result;
      }
    } catch (error: any) {
      console.log(`${error.message}`);
      alert(`다시 시도해주세요: ${error.message}`);
    }
  };

  return (
    <>
      {emailSuccessIn && compareSuccessIn ? (
        <Box>
          <TopSection>
            <ProgressContainer>
              <ProgressText>3/3</ProgressText>
              <ProgressBar value={90} max={90}></ProgressBar>
            </ProgressContainer>
            <div>
              <p>
                간단한 정보를 <br />
                입력해주세요
              </p>
            </div>

            <div>
              <SignupInput
                type="text"
                name="name"
                placeholder={"이름을 입력해주세요"}
                setValue={setName}
              />
              <SignupInput
                type="text"
                name="dpt"
                placeholder={"소속된 과를 입력 해주세요"}
                setValue={setDpt}
              />
              <SignupInput
                type="text"
                name="number"
                placeholder={"-를 제외한 전화번호를 입력 해주세요"}
                setValue={setNumber}
              />
            </div>
          </TopSection>
          <BottomSection>
            <Button
              text={"회원가입하기"}
              color={"#133488"}
              onClick={sendUserInfoOnClick}
            />
          </BottomSection>
        </Box>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default SignupInfo;
