import React, { ChangeEvent, MouseEventHandler } from "react";
import { StyledButton } from "./styles";

interface Props {
  text?: string;
  color?: string;
  url?: string;
  onClick?: (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => Promise<void> | (() => void); // 컴포넌트 이벤트처리
  buttonState?: string; // 'active' -> 버튼 활성화, 'Inactive' -> 버튼 비활성화
}

const Button: React.FC<Props> = ({ text, color, onClick, buttonState }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
