import { FC } from "react";
import { StyledButton } from "./styles";

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <>
      <StyledButton>{text}</StyledButton>
    </>
  );
};

export default Button;
