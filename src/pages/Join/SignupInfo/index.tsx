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
const SignupInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dpt, setDpt] = useState("");
  const [number, setNumber] = useState("");

  const sendUserInfoOnClick = async () => {
    console.log("sendUserInfo");
    try {
      const result = await sendUserInfo(name, dpt, parseInt(number));
      if (result.success) {
        navigate("/users/login");
      } else {
        throw result;
      }
    } catch (error: any) {
      alert(`다시 시도해주세요: ${error.message}`);
    }
  };
  return (
    <>
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
              onChange={setName}
            />
            <SignupInput
              type="text"
              name="dpt"
              placeholder={"소속된 과를 입력 해주세요"}
              onChange={setDpt}
            />
            <SignupInput
              type="text"
              name="number"
              placeholder={"전화번호를 입력 해주세요"}
              onChange={setNumber}
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
    </>
  );
};

export default SignupInfo;
