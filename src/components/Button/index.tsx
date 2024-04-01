import React from "react";
import { StyledButton } from "./styles";
// import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  color?: string;
  url?: string;
  onClick?: () => Promise<JSX.Element | undefined>;
}

const Button: React.FC<Props> = ({ text, color, onClick }) => {
  // const handleClick = () => {
  //   if (url) {
  //     navigate(url);
  //   }
  // };

  return (
    <StyledButton color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
