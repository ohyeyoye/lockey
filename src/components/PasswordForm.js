import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { auth, dbRef } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { encrypt } from "../utils/crypto";
import isEmpty from "is-empty";
import SecurityImage from "../images/security.png";

const PasswordForm = props => {
  const { className } = props;
  const msp = useSelector(state => state.auth.msp);
  const user = auth.currentUser;
  const secureButton = useRef();
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "nickname":
        setNickname(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const resetInputs = () => {
    setNickname("");
    setUsername("");
    setPassword("");
  };
  const onSubmit = e => {
    e.preventDefault();
    let encrypted;
    encrypted = {
      uuid: uuidv4(),
      nickname: encrypt(nickname, msp),
      username: encrypt(username, msp),
      password: encrypt(password, msp),
    };

    //Submit
    dbRef.child(user.uid).child("locks").child(encrypted.uuid).set(encrypted);
    resetInputs();
    alert("Successfully stored to your vault!");
  };
  return (
    <div className={className}>
      <img
        className={`security-image smooth-image image-${
          imageLoaded ? "visible" : "hidden"
        }`}
        onLoad={() => setImageLoaded(true)}
        src={SecurityImage}
        alt="security_image"
        draggable={false}
      />
      <form className="password-form" onSubmit={onSubmit}>
        <label htmlFor="private-email-input">
          NICKNAME (GOOGLE, YOUTUBE, FACEBOOK, etc.)
        </label>
        <input
          id="private-nickname-input"
          className="text-input"
          type="text"
          name="nickname"
          placeholder="NICKNAME"
          onChange={onInputChange}
          value={nickname}
          required
        />
        <label htmlFor="private-email-input">USERNAME</label>
        <input
          id="private-username-input"
          className="text-input"
          type="text"
          name="username"
          placeholder="USERNAME"
          onChange={onInputChange}
          value={username}
          required
        />
        <label htmlFor="private-password-input">PASSWORD</label>
        <input
          id="private-password-input"
          className="text-input"
          type="password"
          name="password"
          placeholder="PASSWORD"
          onChange={onInputChange}
          value={password}
          required
        />
        <button
          className="secure-btn btn"
          type="submit"
          ref={secureButton}
          disabled={isEmpty(nickname) || isEmpty(username) || isEmpty(password)}
        >
          <span className="secure-text">Save</span>
        </button>
      </form>
    </div>
  );
};

export default styled(PasswordForm)`
  position: relative;
  font-family: "Montserrat", sans-serif;
  .security-image {
    height: 40vw;
    max-height: 20rem;
    display: block;
    margin: auto;
    margin-top: 10rem;
  }
  .password-form {
    width: 70%;
    margin: auto;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label {
      width: 100%;
      font-size: 1em;
      margin-bottom: 0.5rem;
    }
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
    .secure-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      font-size: 1.2em;
      border: none;
      border-radius: 0.125rem;
      background-color: #005ce6;
      color: white;
      margin-top: 1rem;
      font-family: "Montserrat", sans-serif;

      &:disabled {
        background-color: gray;
        &:hover {
          cursor: not-allowed;
        }
      }
      .converting-text {
        margin-left: 0.5rem;
        font-size: 0.8em;
      }
      .secure-icon {
        color: white;
        margin-right: 0.25rem;
      }
      .secure-text {
        font-size: 0.8em;
      }
    }
  }
`;
