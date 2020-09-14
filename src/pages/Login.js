import React from "react";
import styled from "styled-components";
import { LoginForm } from "../components";
const Login = props => {
  const { className } = props;
  return (
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
