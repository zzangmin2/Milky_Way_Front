import React, { useState } from "react";
import { BottomSection, TopSection } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [loginPwd, setLoginPwd] = useState("");
  const [loginId, setLoginId] = useState("");

  return (
    <>
      <TopSection>
        <div>
          교내에서 마음 맞는 <br /> 스터디 / 프로젝트 팀원 구하기
        </div>
        <div></div>
      </TopSection>
      <BottomSection>
        <Input placeholder="아이디를 입력해 주세요" />
        <Input placeholder="비밀번호를 입력해 주세요" />
        <Button text={"로그인"} />
        <div>
          <p>아직 회원이 아니신가요?</p>
          <p onClick={() => navigate("/users/signupemail")}>회원가입 하기</p>
        </div>
      </BottomSection>
    </>
  );
};

export default LogIn;
