import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import "react-phone-number-input/style.css";
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import validator from "validator";
import passwordValidator from "password-validator";
import { MdCheckCircle } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import firebase, { provider } from "../firebase";
import { setUser } from "../reducers/user";
import PasswordImage from "../images/password.png";

const LoginForm = props => {
  const { className } = props;
  const auth = firebase.auth();

  // states
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [isConfirmPasswordVerified, setIsConfirmPasswordVerified] = useState(
    false
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const schema = new passwordValidator();
  schema.is().min(8).has().not().spaces();
  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        setIsEmailVerified(validator.isEmail(value));
        break;
      case "password":
        setPassword(value);
        setIsPasswordVerified(schema.validate(value));
        break;
      case "confirm-password":
        setConfirmPassword(value);
        setIsConfirmPasswordVerified(
          schema.validate(value) && value === password
        );
        break;
      default:
        break;
    }
  };
  const onModeChange = e => {
    setIsLoginMode(!isLoginMode);
  };
  const onSubmit = async e => {
    e.preventDefault();
    const isLoginInputsVerified = isEmailVerified && isPasswordVerified;
    const isRegisterInputsVerified =
      isEmailVerified && isPasswordVerified && isConfirmPasswordVerified;
    try {
      let data;
      setLoading(true);
      if (isLoginMode) {
        if (isLoginInputsVerified)
          data = await auth.signInWithEmailAndPassword(email, password);
        setLoading(false);
        dispatch(setUser(data.user));
        props.history.push("/");
      } else {
        if (isRegisterInputsVerified)
          data = await auth.createUserWithEmailAndPassword(email, password);
        setLoading(false);
        alert("You are now registered!");
        setIsLoginMode(true);
      }
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  };
  const onGoogleSignIn = e => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch(setUser(result.user));
        props.history.push("/");
      })
      .catch(err => alert(err.message));
  };
  return (
    <div className={`${className} shadow`}>
      <form className="login-form" onSubmit={onSubmit}>
        <img
          className="password-image"
          src={PasswordImage}
          alt="password_image"
        />
        <h2 className="login-msg">{isLoginMode ? "Login" : "Register"}</h2>
        <label htmlFor="login-email-input">EMAIL</label>
        <div className="input-row">
          <input
            id="login-email-input"
            className="text-input"
            name="email"
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={onInputChange}
            required
          />
          <MdCheckCircle
            className="check-icon"
            style={{ color: isEmailVerified ? "#28a745" : "lightgray" }}
          />
        </div>
        <label htmlFor="login-password-input">PASSWORD</label>
        <div className="input-row">
          <input
            id="login-password-input"
            className="text-input"
            name="password"
            type="password"
            placeholder="PASSWORD (AT LEAST 8 CHARACTERS)"
            value={password}
            onChange={onInputChange}
            required
          />
          <MdCheckCircle
            className="check-icon"
            style={{ color: isPasswordVerified ? "#28a745" : "lightgray" }}
          />
        </div>
        {!isLoginMode && (
          <div className="register-inputs">
            <label htmlFor="confirm-password-input">CONFIRM PASSWORD</label>
            <div className="input-row">
              <input
                id="confirm-password-input"
                className="text-input"
                name="confirm-password"
                type="password"
                placeholder="CONFIRM PASSWORD"
                value={confirmPassword}
                onChange={onInputChange}
                required
              />
              <MdCheckCircle
                className="check-icon"
                style={{
                  color: isConfirmPasswordVerified ? "#28a745" : "lightgray",
                }}
              />
            </div>
          </div>
        )}
        <button
          type="submit"
          className="login-btn btn"
          disabled={
            isLoginMode
              ? !isEmailVerified || !isPasswordVerified
              : !isEmailVerified ||
                !isPasswordVerified ||
                !isConfirmPasswordVerified
          }
        >
          {loading ? (
            <ClipLoader size="0.8em" color="white" />
          ) : isLoginMode ? (
            "Login"
          ) : (
            "Register"
          )}
        </button>
        {isLoginMode && (
          <button
            type="button"
            className="login-btn btn"
            onClick={onGoogleSignIn}
          >
            Sign in with Google
          </button>
        )}
        <div className="btm-container">
          <span className="register-label">
            {isLoginMode ? "Not registered?" : "Already registered?"}
          </span>
          <span className="register-btn btn" onClick={onModeChange}>
            {isLoginMode ? "Register Now" : "Back to Login"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default styled(withRouter(LoginForm))`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 40rem;
  background-color: white;
  border-radius: 0.25rem;
  .password-image {
    width: 15rem;
    user-select: none;
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
      font-size: 1.5em;
      font-weight: bold;
      user-select: none;
      color: #005ce6;
      margin: 0 auto 1rem auto;
      text-align: center;
    }
    label {
      width: 100%;
      font-size: 1em;
      margin-bottom: 0.5rem;
      user-select: none;
    }
    .input-row {
      width: 100%;
      display: flex;
      .text-input {
        width: 100%;
        font-size: 1em;
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
      .check-icon {
        position: relative;
        font-size: 1.2em;
        right: 1.5rem;
        color: #28a745;
      }
    }
    .register-inputs {
      width: 100%;
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
        display: inline-block;
        margin-bottom: 0.5rem;
        font-size: 0.8em;
        color: #009fb7;
      }
    }
    .login-btn {
      width: 80%;
      padding: 0.5rem;
      font-size: 1em;
      border: none;
      border-radius: 0.125rem;
      background-color: #005ce6;
      color: white;
      font-family: "Montserrat", sans-serif;
      margin-top: 1rem;
      &:disabled {
        background-color: gray;
        &:hover {
          cursor: not-allowed;
        }
      }
    }
    .btm-container {
      display: flex;
      justify-content: center;
      padding: 1rem;
      .register-label {
        color: gray;
        font-size: 1em;
        user-select: none;
      }
      .register-btn {
        margin-left: 1rem;
        color: #005ce6;
        user-select: none;
        font-size: 1em;
        &:hover {
          font-weight: bold;
        }
      }
    }
  }
`;
