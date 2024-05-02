import React, { ChangeEvent, MouseEventHandler, useEffect } from "react";
import { StyledButton } from "./styles";
import { useNavigate } from "react-router-dom";

interface Props {
  text?: string;
  color?: string;
  url?: string;
  onClick?: (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => Promise<void> | (() => void); // 컴포넌트 이벤트처리
  buttonState?: string; // 'active' -> 버튼 활성화, 'Inactive' -> 버튼 비활성화
  type?: string;
}

const Button: React.FC<Props> = ({
  text,
  color,
  onClick,
  buttonState,
  type,
}) => {
  let buttonColor = buttonState === "inactive" ? "#959595" : "#133488";

  useEffect(() => {
    buttonState === "inactive" ? "#959595" : "#133488";
  }, [buttonState]);

  return (
    <StyledButton
      color={buttonColor}
      onClick={onClick}
      type={type === "submit" || type === "reset" ? type : "button"}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
