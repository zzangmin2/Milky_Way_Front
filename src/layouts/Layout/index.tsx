import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
import { FC, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  ArticleDetailAuthorState,
  articleDetailModalClickState,
  navState,
} from "../../utils/recoil/atom";

interface Props {
  type?: string;
}

const Layout: FC<Props> = ({ type }) => {
  //현재 네비게이션 바에서 활성화된 페이지 버튼
  const [activePage, setActivePage] = useRecoilState(navState);

  //article 상세페이지의 메뉴 버튼 클릭 상태
  const [articleDetailModalState, setArticleDetailModalState] = useRecoilState(
    articleDetailModalClickState
  );
  //현재 있는 페이지의 주소
  const location = useLocation();
  const navigate = useNavigate();

  //페이지 변경 시 네비게이션 바에서 활성화 된 페이지 버튼 변경
  useEffect(() => {
    let page = "";
    if (location.pathname === "/home/mycareer") {
      page = "career";
    } else if (location.pathname === "/home/articlelist") {
      page = "list";
    } else if (location.pathname === "/home") {
      page = "home";
    } else if (location.pathname === "/home/myinfo") {
      page = "myinfo";
    }
    console.log("페이지" + page);
    if (page) {
      setActivePage(page);
    }
  }, [location.pathname]);

  //현재 로그인 된 사용자가 작성한 게시물인지 판별 상태
  const articleDetailAuthorState = useRecoilValue(ArticleDetailAuthorState);

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
          {type === "articleDetail" && articleDetailAuthorState ? (
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
                setActivePage("mypage");
                navigate("/home/myinfo");
              }}
            />
          )}
        </Header>
        <Outlet />
        <BottomNav>
          <ul>
            <li
              // css를 위한 클래스 네임 변경
              className={activePage === "home" ? "activePage" : ""}
              onClick={() => {
                navigate("/home");
              }}
            >
              <FontAwesomeIcon icon={faHome} />
              <div>홈</div>
            </li>
            <li
              className={activePage === "list" ? "activePage" : ""}
              onClick={() => {
                navigate("/home/articlelist");
              }}
            >
              <FontAwesomeIcon icon={faPen} />
              <div>스터디 / 프로젝트 찾기</div>
            </li>
            <li
              className={activePage === "career" ? "activePage" : ""}
              onClick={() => {
                navigate("/home/mycareer");
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
