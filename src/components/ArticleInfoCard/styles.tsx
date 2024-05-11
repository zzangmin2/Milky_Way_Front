import styled from "styled-components";

export const StudyInfoCardWrap = styled.section`
  width: 100%;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px 20px 10px 20px;
  box-sizing: border-box;
  cursor: pointer;
`;
export const StudyInfoWrap = styled.section`
  & > h4 {
    margin: 0px;
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

export const StudyIntroWrap = styled.div`
  > div.studyRecruitmentStateWrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  > div.studyRecruitmentStateWrap > div {
    display: flex;
  }

  > div.studyRecruitmentStateWrap > div > div.articleRecruitmentState {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #a8a8a8;
    margin-right: 10px;
    margin-top: 6px;
  }

  > div.studyRecruitmentStateWrap > div > div.articleRecruitmentActive {
    background-color: #22ee68;
  }

  > div.studyRecruitmentStateWrap > div > p {
    margin: 0;
    font-size: 0.8rem;
  }

  > div.line {
    width: 100%;
    height: 1px;
    background-color: #eeeeee;
    margin-bottom: 14px;
  }

  > div.studyStateTagWrap {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
  }
`;

export const StudyStateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;

  & div.recruitmentStateWrap {
    display: flex;

    > div {
      display: flex;
      margin-right: 10px;
      > p:nth-child(2) {
        margin-left: 5px;
        color: #ff4646;
      }
    }
    /* 
    > div:nth-child(1):after {
      content: "";
      width: 1px;
      height: 1rem;
      background-color: #d1d1d1;
      margin-top: 14px;
      margin-left: 10px;
    } */
  }

  & div.likeStateWrap {
    display: flex;

    > svg {
      padding: 15px 0px;
      margin-right: 5px;
      color: #d1d1d1;
    }
  }
`;
