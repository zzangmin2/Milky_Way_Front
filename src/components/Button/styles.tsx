import styled from "styled-components";

interface ButtonProps {
  color?: string;
  border?: string;
  fontColor?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: bold;
  border: ${(props) => props.border || "none"};
  border-radius: 10px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.fontColor || "#fff"};
  &:focus {
    outline: none;
  }
`;
