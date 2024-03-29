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

const SignupInfo = () => {
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
            <Input placeholder="이름을 입력해 주세요" />
            <Input placeholder="소속된 과를 입력해 주세요" />
            <Input placeholder="전화번호를 입력해 주세요" />
            {/* 
            <input
              type="text"
              autoFocus
              placeholder={"이름을 입력해주세요"}
            ></input>
            <input
              type="text"
              placeholder={"소속된 과를 입력 해주세요"}
            ></input>
            <input type="text" placeholder={"전화번호를 입력 해주세요"}></input> */}
          </div>
        </TopSection>
        <BottomSection>
          <Button text={"회원가입하기"} color={"#133488"} />
        </BottomSection>
      </Box>
    </>
  );
};

export default SignupInfo;
