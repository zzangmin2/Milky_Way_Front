import { Outlet, useNavigate } from "react-router-dom";
import { BottomNav, Header, NavigationLayout } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPen,
  faFile,
  faHome,
  faArrowLeft,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  articleDetailModalClickState,
  navState,
} from "../../utils/recoil/atom";

interface Props {
  type?: string;
}

const Layout: FC<Props> = ({ type }) => {
  const [activePage, setActivePage] = useRecoilState(navState);
  const [articleDetailModalState, setArticleDetailModalState] = useRecoilState(
    articleDetailModalClickState
  );

  const handlePageClick = (tab: string) => {
    setActivePage(tab);
  };

  const navigate = useNavigate();

  return (
    <>
      <NavigationLayout>
        <Header>
          {/* home 페이지인 경우 -> 로고 / 나머지 -> 이전 버튼 */}
          {type === "home" ? (
            <div className="milkyWayLogo" onClick={() => navigate("/home")} />

          ) : (
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
          )}

          {/* 게시물 상세 페이지인 경우 -> 메뉴 버튼 / 나머지 -> 마이페이지 버튼*/}
          {type === "articleDetail" ? (
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              onClick={() =>
                setArticleDetailModalState(!articleDetailModalState)
              }
            />
          ) : (
            <FontAwesomeIcon
              className={activePage === "mypage" ? "activeIcon" : ""}
              icon={faUser}
              onClick={() => {
                navigate("/home/myinfo");
                handlePageClick("mypage");
              }}
            />
          )}
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
