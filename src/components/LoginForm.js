import React, { useState, useRef } from "react";
import styled from "styled-components";
import "react-phone-number-input/style.css";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import firebase from "../firebase";
import LockImage from "../images/lock.jpg";

const LoginForm = props => {
  const { className } = props;
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const loginHeader = "Please login to verify your identity.";
  const registerHeader = "Register";
  const setupRecaptcha = () =>
    (window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      }
    ));
  const onSendCode = e => {
    e.preventDefault();
    setupRecaptcha();
    console.log(phoneNumber);
    var appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        var code = window.prompt("Enter OTP");
        confirmationResult
          .confirm(code)
          .then(function (result) {
            // User signed in successfully.
            var user = result.user;
            console.log("Signed In");
          })
          .catch(function (error) {
            // User couldn't sign in (bad verification code?)
            // ...
          });
      })
      .catch(function (error) {
        // Error; SMS not sent
        // ...
      });
  };
  const onModeChange = e => {
    setIsLoginMode(!isLoginMode);
  };
  const onPhoneNumberChange = value => {
    console.log(value);
    setPhoneNumber(value);
  };
  return (
    <div className={className}>
      <div className="intro-container"></div>
      <form className="login-form">
        <h2 className="login-msg">
          {isLoginMode ? loginHeader : registerHeader}
        </h2>
        <label htmlFor="email-input">EMAIL</label>
        <input
          id="email-input"
          className="text-input"
          type="email"
          placeholder="EMAIL"
        />
        <label htmlFor="password-input">PASSWORD</label>
        <input
          id="password-input"
          className="text-input"
          type="password"
          placeholder="PASSWORD"
        />
        {!isLoginMode && (
          <label htmlFor="confirm-password-input">CONFIRM PASSWORD</label>
        )}
        {!isLoginMode && (
          <input
            id="confirm-password-input"
            className="text-input"
            type="password"
            placeholder="CONFIRM PASSWORD"
          />
        )}
        {!isLoginMode && (
          <label htmlFor="phone-number-input">PHONE NUMBER</label>
        )}
        {!isLoginMode && (
          <PhoneInput
            id="phone-number-input"
            className="text-input phone-number-input"
            placeholder="PHONE NUMBER"
            defaultCountry="US"
            limitMaxLength={true}
            value={phoneNumber}
            onChange={onPhoneNumberChange}
          />
        )}
        {!isLoginMode && (
          <span className="send-code btn" onClick={onSendCode}>
            Send Code
          </span>
        )}
        {!isLoginMode && <div id="recaptcha-container"></div>}
        <button className="login-btn btn">
          {isLoginMode ? "Login" : "Register"}
        </button>
        <div className="btm-container">
          <span className="register-label">Not registered?</span>
          <span className="register-btn btn" onClick={onModeChange}>
            {isLoginMode ? "Register" : "Back to Login"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default styled(LoginForm)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  .intro-container {
    flex: 2;
    background: url(${LockImage}) no-repeat center center;
    background-size: cover;
  }
  .login-form {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
    font-family: "Montserrat", sans-serif;

    .login-msg {
      font-size: 2em;
      width: 20rem;
      margin: 0 auto 3rem auto;
      text-align: center;
    }
    label {
      width: 100%;
      font-size: 1em;
      margin-bottom: 0.5rem;
    }
    .text-input {
      width: 100%;
      font-size: 0.8em;
      padding: 0.5rem;
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
    .phone-number-input {
      input {
        border: none;
        margin-left: 0.5rem;
        &:focus {
          outline: none;
        }
      }
    }
    .send-code {
      font-size: 0.8em;
      color: #009fb7;
    }
    .login-btn {
      width: 100%;
      padding: 0.75rem;
      font-size: 1.2em;
      border: none;
      border-radius: 0.125rem;
      background-color: #009fb7;
      color: white;
      margin-top: 2rem;
    }
    .btm-container {
      display: flex;
      justify-content: center;
      padding: 1rem;
      .register-label {
        color: gray;
      }
      .register-btn {
        margin-left: 1rem;
        &:hover {
          font-weight: bold;
        }
      }
    }
  }
`;
