import styled from "styled-components";

interface HeaderProps {
  type: string;
}
export const NavigationLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const Header = styled.section`
  width: 100%;
  padding: 24px 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  > div.milkyWayLogo {
    width: 155px;
    height: 22px;
    background-image: url("/images/HeaderLogoImg.svg");

    cursor: pointer;
  }

  > svg {
    color: #717171;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const BottomNav = styled.nav`
  width: 100%;
  bottom: 0;
  margin-top: auto;
  padding: 0px 40px;
  box-sizing: border-box;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 1;

  > ul {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > ul > li {
    list-style: none;
    font-size: 0.75rem;
    text-align: center;
    color: #717171;
    cursor: pointer;
  }

  > ul > li.activePage {
    color: #ff9078;
  }

  > ul > li > svg {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;
