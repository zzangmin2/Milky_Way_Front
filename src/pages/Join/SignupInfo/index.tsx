import Button from "../../../components/Button";
import {
  BottomSection,
  TopSection,
  Box,
  ProgressContainer,
  ProgressText,
  ProgressBar,
} from "../styles";

const SignupInfo = () => {
  const onClickLoginPass = () => {};
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
            <input
              type="text"
              autoFocus
              placeholder={"이름을 입력해주세요"}
            ></input>
            <input
              type="text"
              placeholder={"소속된 과를 입력 해주세요"}
            ></input>
            <input type="text" placeholder={"전화번호를 입력 해주세요"}></input>
          </div>
        </TopSection>
        <BottomSection>
          <Button
            text={"회원가입하기"}
            color={"#133488"}
            url={"/users/login"}
          />
        </BottomSection>
      </Box>
    </>
  );
};

export default SignupInfo;
