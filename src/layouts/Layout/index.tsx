import { Outlet, useNavigate } from "react-router-dom";
import { BottomNav, Header, NavigationLayout } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPen,
  faFile,
  faHome,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";

interface Props {
  type: string;
}
const Layout: FC<Props> = ({ type }) => {
  const [activePage, setActivePage] = useState("home");

  const handlePageClick = (tab: string) => {
    setActivePage(tab);
  };

  const navigate = useNavigate();

  return (
    <>
      <NavigationLayout>
        <Header>
          {type === "home" ? (
            <div
              className="milkyWayLogo"
              onClick={() => navigate("/home")}
            ></div>
          ) : (
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
          )}

          <FontAwesomeIcon
            icon={faUser}
            onClick={() => navigate("/home/myinfo")}
          />
        </Header>
        <Outlet />
        <BottomNav>
          <ul>
            <li
              className={activePage === "home" ? "activePage" : ""}
              onClick={() => {
                navigate("/home");
                handlePageClick("home");
              }}
            >
              <FontAwesomeIcon icon={faHome} />
              <div>홈</div>
            </li>
            <li
              className={activePage === "list" ? "activePage" : ""}
              onClick={() => {
                navigate("/home/articlelist");
                handlePageClick("list");
              }}
            >
              <FontAwesomeIcon icon={faPen} />
              <div>스터디 / 프로젝트 찾기</div>
            </li>
            <li
              className={activePage === "career" ? "activePage" : ""}
              onClick={() => {
                navigate("/home/mycareer");
                handlePageClick("career");
              }}
            >
              <FontAwesomeIcon icon={faFile} />
              <div>이력서</div>
            </li>
          </ul>
        </BottomNav>
      </NavigationLayout>
    </>
  );
};

export default Layout;
