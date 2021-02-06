import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { LoginForm } from "../components";
import { auth } from "../firebase";

const Login = props => {
  const { className } = props;
  return auth.currentUser ? (
    <Redirect to="/" />
  ) : (
    <div className={className}>
      <LoginForm />
    </div>
  );
};

export default styled(Login)`
  background-color: #f5f5f7;
  width: 100%;
  height: 100vh;
`;
