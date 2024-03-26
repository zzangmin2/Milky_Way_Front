import styled from "styled-components";

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
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  > div > p:nth-child(1) {
    color: #717171;
    margin-right: 20px;
  }

  > div > p:nth-child(2) {
    color: #133488;
    font-weight: bold;
    text-decoration: underline;
  }
`;
