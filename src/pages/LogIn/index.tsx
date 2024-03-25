import React from "react";
import { BottomSection, TopSection } from "./styles";

const LogIn = () => {
  return (
    <>
      <TopSection>
        <div>
          교내에서 마음 맞는 <br /> 스터디 / 프로젝트 팀원 구하기
        </div>
        <div></div>
      </TopSection>
      <BottomSection>
        <input type="text" />
        <input type="text" />
        <button>로그인</button>
        <div>
          <p>아직 회원이 아니신가요</p>
          <p>회원가입하기</p>
        </div>
      </BottomSection>
    </>
  );
};

export default LogIn;
