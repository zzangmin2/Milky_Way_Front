import { lazy, useEffect } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import Loading from "../pages/RoutePage/Loading";
import SignupEmail from "../pages/Join/SignupEmail";
import SignupIdCompare from "../pages/Join/SignupIdCompare";
import SignupInfo from "../pages/Join/SignupInfo";
import ErrorPage from "../pages/RoutePage/ErrorPage";
import MyCareer from "../pages/MyCareer";
import MyInfo from "../pages/MyInfo";

const ViewPortPage = lazy(() => import("../layouts/ViewPort"));
const LayoutPage = lazy(() => import("../layouts/Layout"));
const LoginPage = lazy(() => import("../pages/LogIn"));
const HomePage = lazy(() => import("../pages/Home"));
const ArticleDetailPage = lazy(() => import("../pages/ArticleDetail"));
const ArticleListPage = lazy(() => import("../pages/ArticleList"));
const ArticleRegisterPage = lazy(() => import("../pages/ArticleRegister"));

const CheckAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken && window.location.pathname === "/") {
      navigate("/home");
    } else if (!accessToken && window.location.pathname === "/") {
      navigate("/users/login");
    }
  }, [navigate]);

  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CheckAuth>
        <ViewPortPage />
      </CheckAuth>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <LayoutPage type={"home"} />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "articlelist",
            element: <ArticleListPage />,
          },
          { path: "myinfo", element: <MyInfo /> },
          { path: "mycareer", element: <MyCareer /> },
        ],
      },
      {
        path: "/articledetail/:articleId",
        element: <LayoutPage type={"articleDetail"} />,
        children: [
          {
            path: "",
            element: <ArticleDetailPage />,
          },
        ],
      },
      {
        path: "/articleregister",
        element: <LayoutPage />,
        children: [
          {
            path: "",
            element: <ArticleRegisterPage />,
          },
        ],
      },

      {
        path: "/loading",
        element: <Loading />,
      },
      {
        path: "/users/signupemail",
        element: <SignupEmail />,
      },
      {
        path: "/users/signupcompare",
        element: <SignupIdCompare />,
      },
      {
        path: "/users/signupinfo",
        element: <SignupInfo />,
      },
    ],
  },
]);

export default router;
