import { useRoutes } from "react-router-dom";
import ROUTES_MAP from "./constants/routes";
import Discover from "./pages/Discover";
import Topics from "./pages/Topics";
import Search from "./pages/Search/Search";
import Dashboard from "./pages/Dashboard";

const RoutesWrapper = () => {
  const routes = useRoutes([
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

  return routes;
};

export default RoutesWrapper;
