// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const lsdata = localStorage.getItem("data");

  const data = JSON.parse(lsdata);

  const token = data?.accessToken;

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
