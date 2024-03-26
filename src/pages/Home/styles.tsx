import styled from "styled-components";

export const Section = styled.div`
  padding: 0 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  box-sizing: border-box;
  margin-bottom: 20px;

  & > div:nth-child(2) {
    width: 111px;
    height: 118px;
    background-image: url("/images/milkycharacter.svg");
  }
`;

export const BottomSection = styled.section`
  width: 100%;

  & > div:nth-child(1) > div {
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 20px;
    text-align: center;
  }

  & > div:nth-child(1) > div > svg {
    font-size: 2rem;
    color: #717171;
    margin-bottom: 5px;
  }
  & > div:nth-child(1) > div > div:nth-child(2) {
    font-size: 0.75rem;
  }
  & > div:nth-child(1) > div > div:nth-child(3) {
    color: #133488;
    margin-top: 10px;
    font-size: 0.75rem;
    text-decoration: underline;
  }
`;
