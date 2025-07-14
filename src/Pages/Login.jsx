import React from "react";
import LoginComponent from "../Components/Login";

const Login = ({ setUser }) => {
  return (
    <>
      <LoginComponent setUser={setUser} />
    </>
  );
};

export default Login;
