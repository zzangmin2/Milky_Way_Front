import styled from "styled-components";

export const ArticleRegisterWrap = styled.form`
  padding: 20px;
  overflow-y: scroll;
`;

export const ArticleTypeSelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & > label {
    font-size: 0.8rem;
    color: #a9a9a9;
    margin-bottom: 5px;
  }

  & > p.inputTitle {
    margin-bottom: 0px;
  }

  & > div.inputWrap {
    display: flex;
  }

  & > div > label > input[type="radio"] {
    display: none;

    &:checked + span {
      background-color: #fffdfc;
      border: 1px solid #ff9078;
      color: #ff9078;
      font-weight: bold;
    }
  }
  & > div > label > span {
    display: inline-block;
    width: 100%;
    padding: 10px;
    border: 1px solid #a9a9a9;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
    font-size: 0.75rem;
  }

  & > div > input {
    flex: 1;
    border: 1px solid #a9a9a9;
    padding: 10px;
    border-radius: 5px;
    margin-right: 10px;
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
    /* overflow-x: auto; */
    flex-wrap: wrap;

    > div {
      padding: 5px 7px;
      background-color: #f8f8f8;
      color: #676767;
      font-size: 0.75rem;
      margin: 0 5px 5px 0;
      border-radius: 10px;
    }
  }
`;

export const CustomRadioLabel = styled.label`
  flex: 1;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
`;

export const ArticleContentInputWrap = styled.section`
  & > input {
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
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
  }
  & > textarea {
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
  }
`;
