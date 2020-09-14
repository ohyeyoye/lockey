import React from "react";
import styled from "styled-components";

const LoginForm = props => {
  const { className } = props;

  return <div className={className}>LoginForm</div>;
};

export default styled(LoginForm)`
  position: absolute;

  left: 0;
  background-color: blue;
`;
