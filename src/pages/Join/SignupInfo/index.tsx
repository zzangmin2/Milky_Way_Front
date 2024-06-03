import Button from "../../../components/Button";
import SignupInput from "../../../components/SignupInput";
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
import { useRecoilValue, useSetRecoilState } from "recoil";
import ErrorPage from "../../RoutePage/ErrorPage";
import {
  emailSuccesses,
  compareSuccesses,
  userCompareValues,
  userCompareState,
} from "../../../utils/recoil/atom";
import { toast } from "react-toastify";
import {
  validatePhoneNumber,
  validateName,
} from "../../../utils/validations/validation"; // 유효성 검사 함수 임포트

const SignupInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const userCompare = useSetRecoilState(userCompareValues);
  const emailSuccessIn = useRecoilValue(emailSuccesses);
  const compareSuccessIn = useRecoilValue(compareSuccesses);
  const compareValue = useRecoilValue(userCompareValues);
  const verifyValue = useRecoilValue(userCompareState);

  const sendUserInfoOnClick = async () => {
    // 이름 유효성 검사
    const nameValidation = validateName(name);
    if (!nameValidation.isValid) {
      toast.warning(nameValidation.message);
      return;
    }
    // 전화번호 유효성 검사
    const phoneValidation = validatePhoneNumber(number);
    if (!phoneValidation.isValid) {
      toast.warning(phoneValidation.message);
      return;
    }

    try {
      userCompare(newValue);
      const { name, number, id, email, password } = newValue;
      const result = await sendUserInfo(name, number, id, email, password);

      if (result.success) {
        toast.success(`${name}님! 회원가입이 완료되었습니다.`);
        navigate("/users/login");
      } else {
        throw result;
      }
    } catch (error: any) {
      console.log(`${error.message}`);
      toast.error(`다시 시도해주세요: ${error.message}`);
      console.log(verifyValue);
    }
  };

  const newValue = {
    ...compareValue,
    name: name,
    number: number,
  };

  console.log(compareValue);

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
