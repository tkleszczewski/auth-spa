import { Outlet } from "react-router-dom";
import { AuthContainer } from "./Auth.styles";

const Auth: React.FC = () => {
  return (
    <AuthContainer>
      <Outlet></Outlet>
    </AuthContainer>
  );
};

export default Auth;
