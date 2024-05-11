import React, { useEffect } from "react";
import { StyledButton } from "./styles";

interface Props {
  text?: string;
  color?: string | undefined;
  url?: string;
  onClick?: (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => Promise<void> | void;
  buttonState?: string;
  type?: string;
  border?: string;
  fontColor?: string;
}

const Button: React.FC<Props> = ({
  text,
  color,
  onClick,
  buttonState,
  type,
  border,
  fontColor,
}) => {
  let buttonColor = buttonState === "inactive" ? "#959595" : "#133488";

  useEffect(() => {
    buttonState === "inactive" ? "#959595" : "#133488";
  }, [buttonState]);

  return (
    <StyledButton
      color={color || buttonColor}
      onClick={onClick}
      type={type === "submit" || type === "reset" ? type : "button"}
      border={border}
      fontColor={fontColor}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
