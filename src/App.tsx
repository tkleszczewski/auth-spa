import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { GlobalStyles } from "./App.styles";

import Auth from "./views/auth/Auth";
import SignInForm from "./views/auth/sign-in-form/SignInForm";
import SignUpForm from "./views/auth/sign-up-form/SignUpForm";

import Main from "./views/main/Main";
import Home from "./views/main/home/Home";
import Protected from "./views/main/protected/Protected";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="*" element={<Navigate to="/" />} />
            <Route index element={<Home />} />
            <Route path="protected" element={<Protected />} />
            <Route path="auth" element={<Auth />}>
              <Route index element={<Navigate to="/auth/sign-in" />} />
              <Route path="*" element={<Navigate to="/auth/sign-in" />} />
              <Route path="sign-in" element={<SignInForm />} />
              <Route path="sign-up" element={<SignUpForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
