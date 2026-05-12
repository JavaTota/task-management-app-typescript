import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({
  children,
}: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};