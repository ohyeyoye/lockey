import React from "react";
import styled from "styled-components";
import passwordValidator from "password-validator";
import PasswordForm from "./PasswordForm";

const HomeContent = props => {
  const { className } = props;
  const schema = new passwordValidator();
  schema.is().min(8).has().not().spaces();
  return (
    <div className={className}>
      <PasswordForm />
    </div>
  );
};

export default styled(HomeContent)``;
