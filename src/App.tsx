import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import store from "./store/store";

import { GlobalStyles } from "./App.styles";

import Auth from "./views/auth/Auth";
import SignInForm from "./views/auth/sign-in-form/SignInForm";
import SignUpForm from "./views/auth/sign-up-form/SignUpForm";

import Main from "./views/main/Main";
import Home from "./views/main/home/Home";
import Protected from "./views/main/protected/Protected";

function App() {
  const isUserLoggedIn = useSelector((state: any) => state.auth.isUserLoggedIn);

  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="*" element={<Navigate to="/" />} />
            <Route index element={<Home />} />
            {isUserLoggedIn ? (
              <Route path="protected" element={<Protected />} />
            ) : null}
            {!isUserLoggedIn ? (
              <Route path="auth" element={<Auth />}>
                <Route index element={<Navigate to="/auth/sign-in" />} />
                <Route path="*" element={<Navigate to="/auth/sign-in" />} />
                <Route path="sign-in" element={<SignInForm />} />
                <Route path="sign-up" element={<SignUpForm />} />
              </Route>
            ) : null}
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
