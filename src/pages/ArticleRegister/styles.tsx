import styled from "styled-components";

export const ArticleRegisterWrap = styled.section`
  padding: 20px;
  overflow-y: scroll;
`;

export const ArticleTypeWrap = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ArticleTypeSelectWrap = styled.div`
  display: flex;
  flex-direction: column;

  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #f1f1f1;
    margin-top: 14px;
    margin-bottom: 10px;
  }

  & > label {
    font-size: 0.8rem;
    color: #a9a9a9;
    margin-bottom: 5px;
  }

  & > select {
    display: block;
    width: 60px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #a9a9a9;
  }

  & > .mentorTagInput {
    display: flex;
    width: 100%;

    > input {
      width: 100%;
      border: none;
      border-bottom: 1px solid #a9a9a9;
      margin-left: 10px;
    }
  }

  & > .mentorTagWrap {
    width: 100%;
    display: flex;
    margin-top: 10px;
    overflow-x: auto;

    > div {
      padding: 5px 7px;
      background-color: #f8f8f8;
      color: #676767;
      font-size: 0.75rem;
      margin-right: 5px;
      border-radius: 10px;
    }
  }
`;

export const ArticleContentTextArea = styled.textarea`
  width: 100%;
  height: 400px;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  border: 1px solid #f8f8f8;
  resize: none;

  &:focus {
    border: 1px solid #a9a9a9;
    background-color: #fff;
    outline: none;
  }
`;
