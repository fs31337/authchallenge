import React from "react";
import { Navigate } from "react-router-dom";
import { Role } from "../../context/AuthContext";
import { useAuth } from "../../context/AuthContext/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactElement;
  requiredRole?: Role;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
}) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return children;
};
