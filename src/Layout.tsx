import { Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/home/home";
import ROUTES_MAP from "./constants/routes";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Topics from "./pages/Topics";
import Dashboard from "./pages/Dashboard";

const Layout = () => {
  const appRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
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
