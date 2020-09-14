import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
    user-select: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .section-header {
    font-size: 2em;
    font-weight: lighter;
    text-align: center;
  }
  /* Colors
    red: #FE4A49
    yellow: #FED766
    blue: #009FB7
    gray: #E6E6EA
    lightGray: #F4F4F8
  */
`;
