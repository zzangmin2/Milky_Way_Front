import Button from "../../../components/Button";
import {
  BottomSection,
  TopSection,
  Box,
  ProgressContainer,
  ProgressText,
  ProgressBar,
} from "../styles";
import { useState } from "react";
import { sendEmailUserInfo } from "../../../utils/apimodule/member";
import { useNavigate } from "react-router-dom";
import { userCompareState } from "../../../utils/recoil/atom";
import { useSetRecoilState } from "recoil";
const SignupEmail = () => {
  const [email, setEmail] = useState("");
  const [emailInState, setEmailInState] = useState(false);
  const userCompare = useSetRecoilState(userCompareState);
  const navigate = useNavigate();

  const sendEmailedOn = async () => {
    // email 비교후 성공하면 버튼 url활성화
    console.log("sendUserInfo");
    try {
      const result = await sendEmailUserInfo(email);
      if (result.success) {
        setEmailInState(true);
      } else {
        throw result;
      }
    } catch (error: any) {
      alert(`실패: ${error.message}`);
    }
  };

  const newValue = {
    email: email,
    id: "",
    password: "",
    name: "",
    dpt: "",
    number: "",
  };
  const stateUserInfo = (): Promise<void | undefined> => {
    //전체 수정 필요
    return new Promise((resolve, reject) => {
      try {
        userCompare(newValue);
        navigate("/users/signupinfo");
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
            <input
              type="email"
              autoFocus
              name="email"
              placeholder={"이메일을 입력해주세요"}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div>
              <Button text={"이메일 인증하기"} onClick={sendEmailedOn} />
            </div>
          </div>
        </TopSection>
        <BottomSection>
          {emailInState ? (
            <Button text={"다음"} color={"#133488"} onClick={stateUserInfo} /> //성공시 url활성화("button/index.ts)_fix하기"
          ) : (
            <Button text={"다음"} color={"#a8a8a8"} />
          )}
        </BottomSection>
      </Box>
    </>
  );
};

export default SignupEmail;
