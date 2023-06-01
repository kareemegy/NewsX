import { Navigate, useNavigate, useRoutes } from "react-router-dom";
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

  const routes = useRoutes([
    {
      path: ROUTES_MAP.home,
      element: <Home />,
    },
    {
      path: ROUTES_MAP.login,
      element: authUser ? <Navigate to="/dashboard" /> : <Login />,
    },
    {
      path: ROUTES_MAP.register,
      element: authUser ? <Navigate to="/dashboard" /> : <Register />,
    },
    {
      path: ROUTES_MAP.wizard,
      element: authUser ? <Navigate to="/dashboard" /> : <Wizard />,
    },
    {
      path: ROUTES_MAP.dashboard,
      element: authUser ? <Dashboard /> : <Navigate to="/login" />,
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
