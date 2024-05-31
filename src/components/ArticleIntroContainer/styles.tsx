import styled from "styled-components";

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

export const ArticleApplyStateContainer = styled.section`
  margin-bottom: 100px;
  width: 100%;

  div.articleAuthorMessage {
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  div.articleAuthorMessage > div:nth-child(1) {
    color: #133488;
    font-size: 0.9rem;
    font-weight: bold;
  }

  div.articleAuthorMessage > div:nth-child(2) {
    font-size: 0.8rem;
  }
`;

export const ArticleApplyStateTableWrap = styled.div<{ $isAuthor: boolean }>`
  display: grid;
  width: 100%;
  height: 100%;
  /* grid-template-rows: repeat(4, 1fr); */
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

  div.tableCellButton {
    cursor: ${(props) => (props.$isAuthor ? "pointer" : "")};
    text-decoration: ${(props) => (props.$isAuthor ? "underline" : "")};
  }

  div.applicantMessage {
    text-align: center;
    margin: 0 auto;
    padding: 20px;
  }
`;
