import React from "react";
import { StyledButton } from "./styles";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  color?: string;
  url?: string;
}

const Button: React.FC<Props> = ({ text, color, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (url) {
      navigate(url); // 버튼 클릭 시 URL로 이동
    }
  };

  return (
    <StyledButton color={color} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
