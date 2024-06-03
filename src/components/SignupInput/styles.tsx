import styled from "styled-components";

interface InputProps {
  color?: string;
}
export const StyledInputContainer = styled.div<InputProps>`
  position: relative;
  &:focus {
    outline: none;
  }
  & > button:nth-child(2) {
    position: absolute;
    background-color: ${(props) => props.color || "#133482"};
    color: white;
    font-size: 15px;
    right: 0;
    margin-top: 10px;
    margin-right: 10px;
    &:focus {
      ouline: none;
    }
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 30px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: none;
  max-height: 50px;
  border-radius: 10px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;
