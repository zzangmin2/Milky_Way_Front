import styled from "styled-components";

export const Section = styled.div`
  margin: 0 30px;
  display: flex;
  overflow-y: auto;
  height: 100%;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;
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
export const BottomSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const InfoNav = styled.nav`
  width: 100%;
  flex: 1;
  margin-bottom: 20px;
  & > ul {
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

export const InfoProjectList = styled.section`
  display: column;
  & > div:nth-child(1) {
    font-weight: bold;
    padding: 20px 0 20px 0;
  }
  & > div:nth-child(2) {
    background-color: #f8f8f8;
    padding: 3px 20px 3px 20px;
    border-radius: 20px;
    & > p:nth-child(1) {
      font-weight: bold;
    }
  }
`;

export const ArticleInfoCardWrap = styled.section`
  height: 50vh;
  overflow-y: none;
  z-index: 999;

  > section {
    margin-bottom: 20px;
  }
`;

export const LogoutText = styled.div`
  text-align: right;
  flex: 1;
  color: gray;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
