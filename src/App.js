import React from "react";
import "./css/App.css";
import { Navbar, LoginForm } from "./components";
import { GlobalStyle } from "./global";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm />
      <GlobalStyle />
    </div>
  );
}

export default App;
