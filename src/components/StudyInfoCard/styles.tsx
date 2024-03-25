import styled from "styled-components";

export const StudyInfoCardWrap = styled.section`
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
`;
export const TagWrap = styled.section`
  display: flex;
`;
export const StudyTag = styled.div`
  width: 48px;
  padding: 2px;
  text-align: center;
  background-color: #ff9078;
  border-radius: 20px;
  color: #fff;
  font-size: 0.75rem;
  margin-right: 5px;
`;

export const MentoTag = styled.div`
  width: 40px;
  padding: 2px;
  text-align: center;
  background-color: #133488;
  border-radius: 20px;
  color: #fff;
  font-size: 0.75rem;
  margin-right: 5px;
`;

export const StudyInfoWrap = styled.section`
  & > h4 {
    margin: 14px 0px 5px 0px;
  }

  & > p {
    font-size: 0.75rem;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #d9d9d9;
  }
`;

export const StudyStateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;

  & div:nth-child(1) {
    display: flex;

    > p:nth-child(2) {
      margin-left: 5px;
      color: #ff4646;
    }
  }

  & div:nth-child(2) {
    display: flex;

    > svg {
      padding: 15px 0px;
      margin-right: 5px;
      color: #717177;
    }
  }
`;
