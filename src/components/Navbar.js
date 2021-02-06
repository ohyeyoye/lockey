import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deauthenticate } from "../reducers/auth";
import { auth } from "../firebase";
import { setUser } from "../reducers/user";

const Navbar = props => {
  const { className } = props;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const onLogout = e => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to logout?")) {
      //logout
      auth.signOut().then(() => {
        dispatch(setUser(null));
        dispatch(deauthenticate());
      });
    }
  };
  return (
    <header className={className}>
      <nav>
        <span className="logo">LOCKEY</span>
        {user && (
          <ul className="nav-items">
            <Link className="nav-item btn" to="/">
              Home
            </Link>
            <Link className="nav-item btn" to="/myvault">
              My Vault
            </Link>
            <li className="nav-item btn" onClick={onLogout}>
              Logout
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default styled(Navbar)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  z-index: 2;
  nav {
    max-width: 1200px;
    margin: auto;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    color: #005ce6;
    font-size: 1.2em;
    font-family: "Monoton", cursive;
    user-select: none;
  }

  .nav-items {
    display: flex;
    float: right;
    .nav-item {
      color: #005ce6;
      font-size: 1em;
      font-family: "Montserrat", sans-serif;
      padding: 0.25rem 1rem;
      border-bottom: 1px solid transparent;
      transition: all 300ms ease-in-out;
      &:hover {
        border-bottom: 1px solid #005ce6;
      }
    }
  }
`;
