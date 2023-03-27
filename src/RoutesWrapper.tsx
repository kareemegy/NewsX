import { useRoutes } from "react-router-dom";
import ROUTES_MAP from "./constants/routes";
import Discover from "./pages/Discover";
import Home from "./pages/home";
import Topics from "./pages/Topics";

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
  ]);
  return routes;
};

export default RoutesWrapper;
