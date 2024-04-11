import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  border: 1px solid #f8f8f8;

  &:focus {
    border: 1px solid #a9a9a9;
    background-color: #fff;
    outline: none;
    box-sizing: border-box;
  }
`;
