import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  background-color: #f8f8f8;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  box-sizing: border-box;

  background-color: #fff;

  & > div > h2 {
    margin: 0 0 10px 0;
  }

  & > div > p {
    margin: 0;
  }

  & > img.milkywayCharacter {
    width: 80px;
  }
`;

export const BottomSectionRadiusBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fff;

  > div {
    width: 100%;
    height: 100%;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    background-color: #f8f8f8;
  }
`;

export const BottomSection = styled.section`
  width: 100%;
  padding: 0px 20px 30px 20px;
  box-sizing: border-box;
  background-color: #f8f8f8;
`;

export const HomeContentContainer = styled.section`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  background-color: #f8f8f8;

  > div {
    width: 100%;
  }

  > div.ContentButton {
    flex: 1;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    padding: 20px;
    margin: 0 5px;
    border-radius: 20px;
    font-weight: bold;

    cursor: pointer;
  }

  > div.ContentButton > div.ContentButtonIcon {
    display: inline-block;
    width: 32px;
    height: 32px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    text-align: center;
    background-color: #f8f8f8;
    border-radius: 50%;
  }
  > div.ContentButton > p {
    margin: 0;
    font-weight: normal;
    font-size: 0.8rem;
  }

  > img.homeBanner {
    width: 100%;
    border-radius: 10px;
    margin: 40px 0 20px 0;
    object-fit: contain;
    cursor: pointer;
  }

  > div > div.ContentTitleContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;

    > button {
      height: 20px;
      margin-top: 22px;
      padding: 0 10px;
      border: 1px solid #d9d9d9;
      color: #d9d9d9;
      font-size: 0.75rem;
      border-radius: 20px;
    }
  }

  > div > .dibsContainer > .dibsEmptyMessage {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #fff;
    color: #d9d9d9;
  }
`;
