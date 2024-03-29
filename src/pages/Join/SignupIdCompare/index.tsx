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

const SignupIdCompare = () => {
  return (
    <>
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
            <Input placeholder="아이디를 입력해 주세요" />
            <Input placeholder="비밀번호를 입력해 주세요" type={"password"} />
            <Input
              placeholder="비밀번호 확인을 위해 한 번 더 입력해 주세요"
              type={"password"}
            />
          </div>
        </TopSection>
        <BottomSection>
          <Button text={"다음"} color={"#a8a8a8"} />
        </BottomSection>
      </Box>
    </>
  );
};

export default SignupIdCompare;
