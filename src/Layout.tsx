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
import { auth } from "./lib/Firebase/Firebase";

const ProtectedRoute = ({ Component, redirect }: any) => {
  const { currentUser } = auth;
  if (currentUser) {
    return <Component />;
  } else {
    return <Navigate to={`/${redirect}`} />;
  }
};

const Layout = () => {
  const { currentUser } = auth;
  const routes = useRoutes([
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
      element: currentUser ? <Dashboard /> : <Navigate to="/login" />,
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

export default Layout;
