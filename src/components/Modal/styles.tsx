import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;

  max-width: 400px;
  @media (max-width: 1200px) {
    max-width: 300px;
    max-height: 500px;
  }

  background-color: white;
  padding: 40px 10px 5px 10px;
  border-radius: 10px;
  box-shadow: 0px 3px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ModalContent = styled.div`
  margin-bottom: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div:nth-child(2) {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  color: #333;
`;

export const LinkButton = styled.button`
  display: inline-block;
  padding: 15px 25px;
  margin-top: 10px;
  background-color: #133488;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0a244f;
  }
`;
