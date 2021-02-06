import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "./components";
import { Home, Login, MyVault, AuthRoute } from "./routes";
import { GlobalStyle } from "./global";
import { auth } from "./firebase";
import { setUser } from "./reducers/user";

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  useEffect(() => {
    auth.onAuthStateChanged(() => {
      setIsInitialized(true);
      if (auth.currentUser) dispatch(setUser(auth.currentUser));
    });
  }, [dispatch, user]);
  return (
    <div className="App">
      {isInitialized ? (
        <Router basename="/">
          <Navbar />
          <Switch>
            <AuthRoute exact path="/" component={Home} />
            <AuthRoute exact path="/myvault" component={MyVault} />
            <Route exact path="/login">
              <Login />
            </Route>
            <Redirect from="*" to="/login" />
          </Switch>
          <GlobalStyle />
        </Router>
      ) : null}
    </div>
  );
}

export default App;
