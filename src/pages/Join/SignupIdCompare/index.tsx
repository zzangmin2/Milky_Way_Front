import Button from "../../../components/Button";
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
            <input placeholder={"아이디를 입력 해주세요"} type="text"></input>
            <input
              placeholder={"비밀번호를 입력 해주세요"}
              type="password"
            ></input>
            <input
              placeholder={"비밀번호 확인을 위해 한번 더 입력 해주세요"}
              type="password"
            ></input>
          </div>
        </TopSection>
        <BottomSection>
          <Button text={"다음"} color={"#a8a8a8"} url={"/users/signupinfo"} />
        </BottomSection>
      </Box>
    </>
  );
};

export default SignupIdCompare;
