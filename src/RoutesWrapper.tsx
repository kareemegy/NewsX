import { useRoutes } from "react-router-dom";
import ROUTES_MAP from "./constants/routes";
import Discover from "./pages/Discover";
import Home from "./pages/home";
import Topics from "./pages/Topics";
import Search from "./pages/Search/Search";

const RoutesWrapper = () => {
  const routes = useRoutes([
    {
      path: ROUTES_MAP.home,
      element: <Home />,
    },
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
  ]);
  return routes;
};

export default RoutesWrapper;
