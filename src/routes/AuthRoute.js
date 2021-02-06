import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import passwordValidator from "password-validator";
import { auth, dbRef } from "../firebase";
import { encrypt } from "../utils/crypto";
import Auth from "./Auth";

const AuthRoute = ({ component: Component, authRequired, ...rest }) => {
  const authenticated = useSelector(state => state.auth.authenticated);
  const schema = new passwordValidator();
  schema.is().min(8).has().not().spaces();
  const user = auth.currentUser;

  useEffect(() => {
    const createMasterPassword = () => {
      let msp = null;
      let confirmMsp = null;
      let mspConfirmed = false;
      while (!mspConfirmed) {
        while (msp === null) {
          msp = prompt(
            "You don't have a master password set. Please type in new master password (at least 8 characters):"
          );
          if (!schema.validate(msp)) msp = null;
        }
        confirmMsp = prompt("Please re-enter your master password to confirm:");
        if (confirmMsp === null) {
          msp = null;
        } else if (confirmMsp === msp) mspConfirmed = true;
      }

      // Save Master Password
      dbRef.child(user.uid).child("msp").set(encrypt(msp, msp));
    };
    if (user) {
      dbRef
        .child(user.uid)
        .child("msp")
        .on("value", snapshot => {
          if (snapshot.val() === null) {
            // Prompt Master Password
            createMasterPassword();
          }
        });
    }
  }, [user, schema]);
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          authenticated ? (
            <Component {...props} />
          ) : (
            <Auth />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AuthRoute;
