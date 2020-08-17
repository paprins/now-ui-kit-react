import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "views/Home.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import NucleoIcons from "./views/NucleoIcons.js";


export default ({ childProps }) =>
  <Switch>
    <Route path="/index" render={(props) => <Home {...props} />} />
    <Route
      path="/nucleo-icons"
      render={(props) => <NucleoIcons {...props} />}
    />
    <Route
      path="/landing-page"
      render={(props) => <LandingPage {...props} />}
    />
    <Route
      path="/profile-page"
      render={(props) => <ProfilePage {...props} />}
    />
    <Route
      path="/login-page"
      render={(props) => <LoginPage {...props} />}
    />
    <Redirect to="/index" />
    <Redirect from="/" to="/index" />
  </Switch>