import styled from "styled-components";

export const ArticleListContainer = styled.section`
  padding: 20px 20px 0px 20px;
  overflow: hidden;
`;

export const ArticleAddButton = styled.button`
  position: fixed;
  display: block;
  bottom: 100px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #133488;
  color: #fff;
  font-size: 2rem;
  padding: 0;
  margin: 0;
  right: 40%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (max-width: 575px) {
    right: 20px;
  }
`;

export const ArticleProjectTypeNavWrap = styled.nav`
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

export const ArticleFilterWrap = styled.div`
  display: flex;
  margin-top: 20px;

  & > select {
    border: none;
    margin-right: 10px;
  }
`;

export const ArticleListWrap = styled.div`
  & > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 10px;
  }

  & > div:nth-child(1) > select {
    border: none;
  }

  & > div:nth-child(2) {
  }
`;

export const SimpleArticleInfoCard = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 20px;
`;

export const ArticleInfoCardWrap = styled.section`
  width: 100%;
  height: 58vh;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
  z-index: 999;

  > section {
    margin-bottom: 10px;
  }
`;
