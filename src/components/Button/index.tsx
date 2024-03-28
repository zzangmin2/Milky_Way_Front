import { StyledButton } from "./styles";
import React from "react";

interface Props {
  text: string;
  color?: string;
}

const Button: React.FC<Props> = ({ text, color }) => {
  return (
    <>
      <StyledButton color={color}>{text}</StyledButton>
    </>
  );
};

export default Button;
