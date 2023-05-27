import { Navigate, Route, RouteProps, Routes } from "react-router-dom";

type ProtectedProps = {
  isSignedIn: boolean;
  redirectPath?: string;
} & RouteProps;

const Protected: React.FC<ProtectedProps> = ({
  isSignedIn,
  redirectPath = "/login",
  children,
  ...routeProps
}) => {
  if (!isSignedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
      <Route {...routeProps} element={children} />
  );
};

export default Protected;
