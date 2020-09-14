import React from "react";
import styled from "styled-components";

const Navbar = props => {
  const { className } = props;
  return (
    <nav className={className}>
      <span className="logo">LOCKEY</span>
    </nav>
  );
};

export default styled(Navbar)`
  position: absolute;
  background-color: #fe4a49;
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  .logo {
    color: white;
    font-size: 1.5em;
    font-family: "Monoton", cursive;
    user-select: none;
  }
  .nav-items {
    display: flex;
    float: right;
    .nav-item {
      color: white;
      font-size: 0.9em;
      font-family: "Open Sans", sans-serif;
      padding: 0.8rem 1rem;
      border-bottom: 2px solid transparent;
      transition: all 300ms ease-in-out;
      &:hover {
        border-bottom: 2px solid lightgray;
        cursor: pointer;
      }
    }
  }
`;
