import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("access_token"); // Check if token exists
  return isAuthenticated ? children : <Navigate to="/superuser" />;
};

export default PrivateRoute;
