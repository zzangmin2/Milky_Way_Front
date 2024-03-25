import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid black;
  box-sizing: border-box;
`;

export const TopSection = styled.section`
  width: 100%;
  display: flex;
  padding-top: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > div:nth-child(1) {
    text-align: center;
    padding-bottom: 40px;
    color: #717171;
    font-size: 1rem;
  }

  & > div:nth-child(2) {
    background-image: url("/images/LoginImg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
  }
`;

export const BottomSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid red;
`;
