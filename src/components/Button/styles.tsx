import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.color || "#133488"};
  color: #fff;
  &:focus {
    outline: none;
  }
`;
