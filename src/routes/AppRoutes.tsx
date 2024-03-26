import { Center, Spinner } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Login from "../Page/Login";
import { RouteObject, useRoutes } from "react-router-dom";
import Home from "../Page/Home";
import { Suspense } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const openRoutes: RouteObject[] = [
  {
    path: NAVIGATION_ROUTES.BASE,
    element: <Login />,
  },
];

const protectedRoutes: RouteObject[] = [
  {
    path: NAVIGATION_ROUTES.BASE,
    element: <Home />,
  },
];

const AppRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log(isLoading);

  const element = useRoutes(!isAuthenticated ? openRoutes : protectedRoutes);

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  return <Suspense fallback={<Spinner />}>{element}</Suspense>;
};

export default AppRoutes;
