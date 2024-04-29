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
import { FC } from "react";

interface Props {
  type: string;
}
const Layout: FC<Props> = ({ type }) => {
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
            <FontAwesomeIcon icon={faArrowLeft} />
          )}

          <FontAwesomeIcon
            icon={faUser}
            onClick={() => navigate("/home/myinfo")}
          />
        </Header>
        <Outlet />
        <BottomNav>
          <ul>
            <li onClick={() => navigate("/home")}>
              <FontAwesomeIcon icon={faHome} />
              <div>홈</div>
            </li>
            <li onClick={() => navigate("/home/search")}>
              <FontAwesomeIcon icon={faPen} />
              <div>스터디 / 프로젝트</div>
            </li>
            <li onClick={() => navigate("/home/mycareer")}>
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
