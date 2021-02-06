import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { authenticate, deauthenticate } from "../reducers/auth";
import { useDispatch } from "react-redux";
import { auth, dbRef } from "../firebase";
import { decrypt } from "../utils/crypto";
import { AiOutlineLogin } from "react-icons/ai";
import FingerPrintImage from "../images/finger_print.png";

const Auth = props => {
  const { className } = props;
  const [password, setPassword] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const user = auth.currentUser;
  const passwordInput = useRef();
  const dispatch = useDispatch();
  const onInputChange = e => {
    setPassword(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (password != null) {
      dbRef
        .child(user.uid)
        .child("msp")
        .on("value", snapshot => {
          const decrypted = decrypt(snapshot.val(), password);
          if (password === decrypted) {
            dispatch(authenticate(password));
            setTimeout(() => {
              dispatch(deauthenticate());
            }, 180000);
          } else {
            alert("You are not authenticated.");
            dispatch(deauthenticate());
          }
        });
    }
  };
  useEffect(() => {
    passwordInput.current.focus();
  }, []);
  return (
    <div className={className}>
      <img
        className={`finger-print-image smooth-image image-${
          imageLoaded ? "visible" : "hidden"
        }`}
        onLoad={() => setImageLoaded(true)}
        src={FingerPrintImage}
        alt="finger_print_image"
        draggable={false}
      />
      <form className="auth-form" onSubmit={onSubmit}>
        <input
          className="text-input"
          name="password"
          type="password"
          placeholder="MASTER PASSWORD"
          value={password}
          onChange={onInputChange}
          ref={passwordInput}
          required
        />
        <button type="submit" className="login-btn btn">
          <AiOutlineLogin className="login-icon" />
        </button>
      </form>
    </div>
  );
};

export default styled(Auth)`
  .finger-print-image {
    height: 30vw;
    max-height: 20rem;
    display: block;
    margin: auto;
    margin-top: 10rem;
    user-select: none;
  }
  .auth-form {
    position: relative;
    width: 50%;
    min-width: 20rem;
    max-width: 30rem;
    margin: auto;
    margin-top: 2rem;
    .text-input {
      width: 100%;
      font-size: 1em;
      padding: 0.5rem;
      padding-right: 2rem;
      margin-bottom: 1rem;
      border: none;
      border-bottom: 1px solid lightgray;
      &:last-child {
        margin-bottom: 0;
      }
      &:focus {
        outline: none;
      }
    }
    .login-btn {
      position: absolute;
      top: 0.25rem;
      right: 0;
      color: #005ce6;
      background-color: transparent;
      border: none;
      font-size: 1.5em;
    }
  }
`;
