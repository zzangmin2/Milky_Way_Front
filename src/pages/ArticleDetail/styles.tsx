import styled from "styled-components";

export const ArticleDetailWrap = styled.section`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
  > .buttonWrap {
    position: fixed;
    width: 340px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 70px;
  }

  @media (max-width: 575px) {
    > .buttonWrap {
      width: 90%;
    }
  }
`;

export const TopSection = styled.section`
  margin-bottom: 20px;
`;

export const ArticleInfoStateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  > div {
    display: flex;
    align-items: center;
  }

  > div.articleRecruitment > div.articleRecruitmentState {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #a8a8a8;
    margin-right: 10px;
  }

  > div.articleRecruitment > div.articleRecruitmentActive {
    background-color: #22ee68;
  }

  > div.articleRecruitment > div:nth-child(2) {
    font-size: 0.75rem;
    line-height: 0.75rem;
  }

  > div.articleLike {
    cursor: pointer;
  }
  > div.articleLike > svg {
    font-size: 0.75rem;
    color: #d1d1d1;
    margin-right: 5px;
  }

  > div.articleLike > p {
    font-size: 0.75rem;
    margin: 0;
  }
`;

export const ArticleInfoSummaryWrap = styled.div`
  > div:nth-child(1) {
    display: flex;
  }

  > div.articleInfoSummary {
    display: flex;
    flex-direction: column;
  }

  > div.articleInfoSummary > div {
    display: flex;
  }

  > div.articleInfoSummary > div.articleRecruiter > p {
    margin: 0 0 10px 0;
    font-size: 0.85rem;
    line-height: 0.85rem;
  }
  /* > div.articleInfoSummary > div.articleRecruiter > p:nth-child(1)::after {
    display: inline-block;
    content: "";
    width: 1px;
    height: 0.7rem;
    background-color: black;
    margin-left: 5px;
    margin-right: 5px;
  } */
  > div.articleInfoSummary > div.articleState > div {
    margin-right: 16px;
  }
  > div.articleInfoSummary > div.articleState > div > p {
    font-size: 0.75rem;

    margin: 0;
  }

  > div.articleInfoSummary
    > div.articleState
    > div:nth-child(1)
    > p:nth-child(2) {
    color: #ff4646;
  }
  > div.articleInfoSummary > div.articleState > div > p:nth-child(1) {
    font-weight: bold;
    margin-right: 5px;
  }

  > div.articleInfoSummary > div > div {
    display: flex;
  }
`;

export const ArticleDetailPageNavWrap = styled.div`
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
    cursor: pointer;
    transition: all 0.3s ease;
  }

  & > ul > li.activeTab {
    font-weight: bold;
    color: #ff9078;
    border-bottom: 2px solid #ff9078;
  }
`;

export const ArticleIntrowrap = styled.div`
  line-height: 160%;
  margin-bottom: 60px;

  > div.mentorTagWrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  > p.mentorTagTitle {
    color: #133488;
    font-weight: bold;
    font-size: 0.8rem;
  }

  > div.mentorTagWrapper > p.mentorTag {
    padding: 2px 10px;
    background-color: #f8f8f8;
    color: #676767;
    font-size: 0.75rem;
    margin-right: 5px;
    border-radius: 10px;
    font-size: 0.75rem;
    margin: 0 5px 5px 0;
  }
`;

export const ArticleApplyStateWrap = styled.section`
  margin-bottom: 100px;
  width: 100%;
`;
export const ArticleApplyStateTableWrap = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(4, 1fr);
  font-size: 0.9rem;

  div.tableRow {
    display: grid;
    grid-template-columns: 14% 23% 47% 16%;
    border-bottom: 1px solid #d1d1d1;
    padding: 5px;
  }

  div.tableRowTop {
    height: 30px;
    border-bottom: 2px solid #d1d1d1;
  }

  div.tableCell {
    padding: 5px;
    text-align: center;
  }

  div.noApplicantMessage {
    text-align: center;
    padding: 20px;
  }
`;
