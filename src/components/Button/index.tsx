import React from "react";
import { StyledButton } from "./styles";

interface Props {
  text?: string;
  color?: string;
  url?: string;
  onClick?: (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => Promise<void> | void; // 수정: 프라미스 또는 void 반환
  buttonState?: string; // 'active' -> 버튼 활성화, 'Inactive' -> 버튼 비활성화
}

const Button: React.FC<Props> = ({ text, color, onClick, buttonState }) => {
  const handleClick = async (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {};

  return (
    <StyledButton color={color} onClick={onClick || handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
