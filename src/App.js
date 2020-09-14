import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Login } from "./pages";
import { GlobalStyle } from "./global";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
