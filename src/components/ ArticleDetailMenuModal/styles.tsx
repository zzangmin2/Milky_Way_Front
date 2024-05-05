import styled, { css } from "styled-components";

interface ArticleDetailModalProps {
  isOpen: boolean;
}

export const ArticleDetailModal = styled.div<ArticleDetailModalProps>`
  position: fixed;
  width: 200px;
  top: 14%;
  left: 53%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 0 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #fff;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.isOpen ? "translate(-50%, -50%)" : "translate(-50%, -60%)"};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};

  & > div {
    padding: 16px 0;
    cursor: pointer;
  }
  & > div:nth-child(1) {
    border-bottom: 1px solid #d1d1d1;
  }

  & > div:nth-child(2) {
    color: red;
  }
`;
