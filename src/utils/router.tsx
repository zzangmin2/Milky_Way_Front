import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/RoutePage/Loading";
import SignupEmail from "../pages/Join/SignupEmail";
import SignupIdCompare from "../pages/Join/SignupIdCompare";
import SignupInfo from "../pages/Join/SignupInfo";

const ViewPortPage = lazy(() => import("../layouts/ViewPort"));
const LayoutPage = lazy(() => import("../layouts/Layout"));
const LoginPage = lazy(() => import("../pages/LogIn"));
const HomePage = lazy(() => import("../pages/Home"));
const ArticleDetailPage = lazy(() => import("../pages/ArticleDetail"));
const ArticleSearchPage = lazy(() => import("../pages/ArticleSearch"));
const ArticleRegisterPage = lazy(() => import("../pages/ArticleRegister"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewPortPage />,
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
          { path: "search", element: <ArticleSearchPage /> },
        ],
      },
      {
        path: "/articledetail/:articleId",
        element: <LayoutPage type={"prev"} />,
        children: [
          {
            path: "",
            element: <ArticleDetailPage />,
          },
        ],
      },
      {
        path: "/articleregister",
        element: <LayoutPage type={"prev"} />,
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
        path: "users/signupemail/",
        element: <SignupEmail />,
      },
      {
        path: "users/signupcompare/",
        element: <SignupIdCompare />,
      },
      {
        path: "users/signupinfo/",
        element: <SignupInfo />,
      },
    ],
  },
]);

export default router;
