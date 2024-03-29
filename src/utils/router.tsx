import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Navigation from "../layouts/Navigation";
import Loading from "../pages/RoutePage/Loading";
import SignupEmail from "../pages/Join/SignupEmail";
import SignupIdCompare from "../pages/Join/SignupIdCompare";
import SignupInfo from "../pages/Join/SignupInfo";
import Search from "../pages/Search";
const LoginPage = lazy(() => import("../pages/LogIn"));
const HomePage = lazy(() => import("../pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "users/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <Navigation />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          { path: "search", element: <Search /> },
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
