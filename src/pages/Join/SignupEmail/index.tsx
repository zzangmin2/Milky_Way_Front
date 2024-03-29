import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {
  BottomSection,
  TopSection,
  Box,
  ProgressContainer,
  ProgressText,
  ProgressBar,
} from "../styles";

const SignupEmail = () => {
  const [email, setEmail] = useState();
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
            {/* <input
              type="email"
              autoFocus
              placeholder={"이메일을 입력해주세요"}
            ></input> */}
            <Input placeholder="이메일을 입력해 주세요" type={"email"} />
          </div>
        </TopSection>
        <BottomSection>
          <Button text={"다음"} color={"#a8a8a8"} />
        </BottomSection>
      </Box>
    </>
  );
};

export default SignupEmail;
