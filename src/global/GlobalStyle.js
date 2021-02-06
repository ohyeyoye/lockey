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
  .btn {
    &:hover {
        cursor: pointer;
    }
  }
  .shadow {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1); 
  }
  .smooth-image {
    transition: opacity 1s; 
  }
  .image-visible {opacity: 1}
  .image-hidden {opacity: 0}
`;
