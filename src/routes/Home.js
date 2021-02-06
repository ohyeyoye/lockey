import React from "react";
import styled from "styled-components";
import { HomeContent } from "../components";

const Home = props => {
  const { className } = props;

  return (
    <div className={className}>
      <HomeContent />
    </div>
  );
};

export default styled(Home)``;

/*
  If a master password is not set up, prompt the user to create one.
  Otherwise, ask for the master password
  

*/
