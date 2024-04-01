import { useState } from "react";
import Button from "../../../components/Button";
import {
  BottomSection,
  TopSection,
  Box,
  ProgressContainer,
  ProgressText,
  ProgressBar,
} from "../styles";
import { useNavigate } from "react-router-dom";
import { sendUserCompareInfo } from "../../../utils/apimodule/member";

const SignupIdCompare = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // const [userInfo, setUserInfo] = useState({
  //   id: "",
  //   password: "",
  //   confirmpassword: "",
  // });
  const navigate = useNavigate();

  const sendUserInfo = async () => {
    console.log("sendUserInfo실행");
    try {
      const result = await sendUserCompareInfo(id, password);
      if (result.success) {
        navigate("/users/signupinfo");
      } else {
        throw result;
      }
    } catch (error: any) {
      alert(`회원가입 실패: ${error.message}`);
    }

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
              <input
                placeholder={"아이디를 입력 해주세요"}
                type="text"
                name="id"
              ></input>
              <input
                placeholder={"비밀번호를 입력 해주세요"}
                name="password"
                type="password"
              ></input>
              <input
                placeholder={"비밀번호 확인을 위해 한번 더 입력 해주세요"}
                type="password"
                id="confirmpassword"
              ></input>
            </div>
          </TopSection>
          <BottomSection>
            <Button text={"다음"} color={"#a8a8a8"} onClick={sendUserInfo} />
          </BottomSection>
        </Box>
      </>
    );
  };
};

export default SignupIdCompare;
