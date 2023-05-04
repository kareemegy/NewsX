import { Navigate, useRoutes } from "react-router-dom";
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
  const appRoutes = useRoutes([
    {
      path: ROUTES_MAP.home,
      element: <Home />,
    },
    {
      path: ROUTES_MAP.login,
      element: <Login />,
    },
    {
      path: ROUTES_MAP.register,
      element: <Register />,
    },
    {
      path: ROUTES_MAP.wizard,
      element: <Wizard />,
    },
    {
      path: ROUTES_MAP.dashboard,
      element: <Dashboard />,
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
  ]);
  return appRoutes;
};

export default Layout;
