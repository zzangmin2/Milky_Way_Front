import styled from "styled-components";

export const Section = styled.div`
  padding: 0 30px;
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0px;
  overflow-y: scroll;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const BottomSection = styled.section`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  d & > div:nth-child(1) > div > svg {
    font-size: 2rem;
    color: #717171;
    margin-bottom: 5px;
  }
`;
