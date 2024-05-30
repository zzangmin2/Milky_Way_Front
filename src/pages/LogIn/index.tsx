import { useState, useEffect } from "react";
import { BottomSection, TopSection } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { loginedIn } from "../../utils/auth/auth";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { loadingStateSelector } from "../../utils/recoil/atom";

const LogIn = () => {
  const loadingState = useRecoilValue(loadingStateSelector);
  const navigate = useNavigate();
  const [loginPwd, setLoginPwd] = useState("");
  const [loginId, setLoginId] = useState("");

  const sendLoginData = async () => {
    console.log(loginId, loginPwd);
    try {
      const result: any = await loginedIn(loginId, loginPwd);

      if (result.success) {
        navigate("/home");
      } else {
        throw result;
      }
    } catch (error: any) {
      toast.error(`실패: ${error.message}`);
    }
  };

  return (
    <>
      <TopSection>
        <div>
          교내에서 마음 맞는 <br /> 스터디 / 프로젝트 팀원 구하기
        </div>
        <div></div>
      </TopSection>
      <BottomSection>
        {!loadingState ? (
          <>
            <Input
              placeholder="아이디를 입력해 주세요"
              setValue={setLoginId}
              value={loginId}
              disabled
            />

            <Input
              placeholder="비밀번호를 입력해 주세요"
              setValue={setLoginPwd}
              value={loginPwd}
              disabled
              inputType="password"
            />
          </>
        ) : (
          <>
            <Input
              placeholder="아이디를 입력해 주세요"
              setValue={setLoginId}
              value={loginId}
            />

            <Input
              placeholder="비밀번호를 입력해 주세요"
              setValue={setLoginPwd}
              value={loginPwd}
              inputType="password"
            />
          </>
        )}
        {!loadingState ? (
          <Button text={"로그인"} color="gray" />
        ) : (
          <Button text={"로그인"} onClick={sendLoginData} />
        )}
        <div>
          <p>아직 회원이 아니신가요?</p>
          <p onClick={() => navigate("/users/signupemail")}>회원가입 하기</p>
        </div>
      </BottomSection>
    </>
  );
};

export default LogIn;
