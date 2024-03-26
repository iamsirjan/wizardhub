import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);
  return null;
};

export default Login;
