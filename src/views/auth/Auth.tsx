import { Outlet } from "react-router-dom";

import { AuthContainer, AuthHeader, AuthHeading } from "./Auth.styles";

const Auth: React.FC = () => {
  return <Outlet></Outlet>;
};

export default Auth;
