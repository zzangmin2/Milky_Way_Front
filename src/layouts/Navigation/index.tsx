import { Outlet, useNavigate } from "react-router-dom";
import { BottomNav, Header, NavigationLayout } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPen,
  faFile,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavigationLayout>
        <Header>
          <div onClick={() => navigate("/home")}></div>
          <FontAwesomeIcon icon={faUser} />
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
            <li>
              <FontAwesomeIcon icon={faFile} />
              <div>이력서</div>
            </li>
          </ul>
        </BottomNav>
      </NavigationLayout>
    </>
  );
};

export default Navigation;
