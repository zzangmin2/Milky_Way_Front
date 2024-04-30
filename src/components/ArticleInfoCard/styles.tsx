import styled from "styled-components";

export const StudyInfoCardWrap = styled.section`
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 20px 20px 10px 20px;
  cursor: pointer;

  > div > div.articleRecruitmentState {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #a8a8a8;
    margin-right: 10px;
    margin-top: 6px;
  }

  > div > div.articleRecruitmentActive {
    background-color: #22ee68;
  }
`;
export const TagWrap = styled.section`
  display: flex;
`;

export const StudyInfoWrap = styled.section`
  & > h4 {
    margin: 14px 0px 0px 0px;
  }

  & > p {
    font-size: 0.75rem;
  }

  & > p > div {
    width: 100%;
    height: 1px;
    margin-top: 10px;
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
