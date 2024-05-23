import styled from "styled-components";

export const ArticleApplyStateTableWrap = styled.div`
  flex: 1;
  grid-template-rows: repeat(4, 1fr);
  font-size: 0.9rem;

  .tableRow {
    display: grid;
    grid-template-columns: 3.1fr 3fr 2fr;
    border-bottom: 1px solid #d1d1d1;

    align-items: center;
    &:not(.tableRowTop) {
      .tableCell:nth-child(1) {
        font-weight: bold;
      }
    }
  }

  .tableRowTop {
    border-bottom: 2px solid black;
  }

  .tableCell {
    padding: 5px;
    text-align: center;
  }

  &:focus {
    outline: none;
  }
`;
