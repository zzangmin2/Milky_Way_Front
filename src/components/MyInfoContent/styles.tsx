import styled from "styled-components";

export const TopSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  min-height: 500px;
  margin-bottom: -110px;
`;

export const InfoTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 10px;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
  align-items: center;

  & > p {
    color: gray;
    font-weight: normal;
    font-size: 17px;
    border-bottom: 0.1px solid gray;
  }
`;
export const InfoContent = styled.div`
  display: flex;
  height: 70px;
  flex-direction: row;

  margin: 0 10px 10px 0;
  border-bottom: 1px solid #f1f1f1;
  outline: none;
  align-items: center;
  & > div:nth-child(1) {
    color: #73819c;
    display: flex;
    align-items: center;
    font-weight: bold;
    flex: 1;
  }
  & > div:nth-child(2) {
    flex-grow: 0.2;
    width: 50%;
    display: flex;
    & > input {
      width: 100%;
      border: none;
      outline: none;
    }
    & > p {
      text-align: left;
    }
  }
`;
