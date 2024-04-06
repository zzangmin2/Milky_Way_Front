import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/RoutePage/Loading";
import SignupEmail from "../pages/Join/SignupEmail";
import SignupIdCompare from "../pages/Join/SignupIdCompare";
import SignupInfo from "../pages/Join/SignupInfo";
import Search from "../pages/Search";
import ErrorPage from "../pages/RoutePage/ErrorPage";

const ViewPortPage = lazy(() => import("../layouts/ViewPort"));
const LayoutPage = lazy(() => import("../layouts/Layout"));
const LoginPage = lazy(() => import("../pages/LogIn"));
const HomePage = lazy(() => import("../pages/Home"));
const StudyDetailPage = lazy(() => import("../pages/StudyDetail"));

const EmailSuccess = false;
const CompareSuccess = false;

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
          { path: "search", element: <Search /> },
        ],
      },
      {
        path: "/detail",
        element: <LayoutPage type={"detail"} />,
        children: [
          {
            path: "",
            element: <StudyDetailPage />,
          },
        ],
      },

      {
        path: "/loading",
        element: <Loading />,
      },
      {
        path: "users/signupemail",
        element: <SignupEmail />,
      },
      // 2단계: 1단계 완료 후 접근 가능
      {
        path: "users/signupcompare",
        element: EmailSuccess ? <SignupIdCompare /> : <ErrorPage />,
      },
      // 3단계: 1, 2단계 모두 완료 후 접근 가능
      {
        path: "users/signupinfo",
        element:
          EmailSuccess && CompareSuccess ? <SignupInfo /> : <ErrorPage />,
      },
    ],
  },
]);

export default router;
