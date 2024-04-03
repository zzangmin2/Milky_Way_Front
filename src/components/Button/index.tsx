import React from "react";
import { StyledButton } from "./styles";

interface Props {
  text: string;
  color?: string;
  url?: string;
  onClick?: () => void; // 컴포넌트 이벤트처리
}

const Button: React.FC<Props> = ({ text, color, onClick }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
