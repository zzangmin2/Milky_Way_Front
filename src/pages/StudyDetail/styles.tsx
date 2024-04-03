import styled from "styled-components";
import { StudyProjectTypeNavWrap } from "../Search/styles";

export const StudyDetailWrap = styled.section`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  overflow-y: scroll;

  > .buttonWrap {
    position: fixed;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 70px;
  }

  @media (min-width: 575px) {
    > .buttonWrap {
      width: 50%;
    }
  }
`;

export const TopSection = styled.section`
  margin-bottom: 20px;
`;

export const StudyInfoStateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  > div {
    display: flex;
    align-items: center;
  }

  > div.studyPeriod > div.studyPeriodState {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #22ee68;
    margin-right: 10px;
  }

  > div.studyPeriod > div:nth-child(2) {
    font-size: 0.75rem;
    line-height: 0.75rem;
  }

  > div.studyLike > svg {
    font-size: 0.75rem;
    color: #d1d1d1;
    margin-right: 5px;
  }

  > div.studyLike > p {
    font-size: 0.75rem;
    margin: 0;
  }
`;

export const StudyInfoSummaryWrap = styled.div`
  /* display: flex; */
  > div:nth-child(1) {
    display: flex;
  }

  > div.StudyInfoSummary {
    display: flex;
    flex-direction: column;
  }

  > div.StudyInfoSummary > div {
    display: flex;
  }

  > div.StudyInfoSummary > div.StudyRecruiter > p {
    margin: 0 0 10px 0;
    font-size: 0.85rem;
    line-height: 0.85rem;
  }
  > div.StudyInfoSummary > div.StudyRecruiter > p:nth-child(1)::after {
    display: inline-block;
    content: "";
    width: 1px;
    height: 0.7rem;
    background-color: black;
    margin-left: 5px;
    margin-right: 5px;
  }
  > div.StudyInfoSummary > div.StudyState > div {
    margin-right: 16px;
  }
  > div.StudyInfoSummary > div.StudyState > div > p {
    font-size: 0.75rem;

    margin: 0;
  }

  > div.StudyInfoSummary > div.StudyState > div:nth-child(1) > p:nth-child(2) {
    color: #ff4646;
  }
  > div.StudyInfoSummary > div.StudyState > div > p:nth-child(1) {
    font-weight: bold;
    margin-right: 5px;
  }

  > div.StudyInfoSummary > div > div {
    display: flex;
  }
`;

export const StudyDetailPageNavWrap = styled.div`
  width: 100%;

  & > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  & > ul > li {
    padding: 5px 0;
    list-style: none;
    flex: 1;
    text-align: center;
    font-size: 0.75rem;
    border-bottom: 1px solid #d9d9d9;
  }

  & > ul > li:nth-child(1) {
    font-weight: bold;
    color: #ff9078;
    border-bottom: 2px solid #ff9078;
  }
`;

export const StudyIntrowrap = styled.div`
  line-height: 160%;
`;
