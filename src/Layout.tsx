import { Navigate, Route, useNavigate, useRoutes } from "react-router-dom";
import Home from "./pages/home/home";
import ROUTES_MAP from "./constants/routes";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Topics from "./pages/Topics";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wizard from "./pages/Wizard";
const Layout = () => {
  const authUser = localStorage.getItem("authToken");

  const routes = [
    {
      path: ROUTES_MAP.home,
      element: <Home />,
    },
    {
      path: ROUTES_MAP.login,
      element: renderIfNotAuthenticated(
        authUser,
        <Login />,
        ROUTES_MAP.dashboard
      ),
    },
    {
      path: ROUTES_MAP.register,
      element: renderIfNotAuthenticated(
        authUser,
        <Register />,
        ROUTES_MAP.dashboard
      ),
    },
    {
      path: ROUTES_MAP.wizard,
      element: renderIfNotAuthenticated(
        authUser,
        <Wizard />,
        ROUTES_MAP.dashboard
      ),
    },
    {
      path: ROUTES_MAP.dashboard,
      element: renderIfAuthenticated(authUser, <Dashboard />, ROUTES_MAP.login),
      children: [
        {
          path: ROUTES_MAP.discover.discover(":type"),
          element: <Discover />,
        },
        {
          path: ROUTES_MAP.topics.topic(":topic"),
          element: <Topics />,
        },
        {
          path: ROUTES_MAP.search.search(":query"),
          element: <Search />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};
const renderIfAuthenticated = (
  authUser: string | null,
  component: JSX.Element,
  redirectPath: string
): JSX.Element => {
  return authUser ? component : <Navigate to={redirectPath} />;
};

const renderIfNotAuthenticated = (
  authUser: string | null,
  component: JSX.Element,
  redirectPath: string
): JSX.Element => {
  return authUser ? <Navigate to={redirectPath} /> : component;
};

export default Layout;
