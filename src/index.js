import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

import Routes from "./Routes";

import * as serviceWorker from './serviceWorker';

import Amplify from "aws-amplify";
import amplify from 'amplify.js';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

// Amplify configuration is in .env
require('dotenv').config();

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: amplify.auth.REGION,
    userPoolId: amplify.auth.USER_POOL_ID,
    identityPoolId: amplify.auth.IDENTITY_POOL_ID,
    userPoolWebClientId: amplify.auth.APP_CLIENT_ID,
  },
  Storage: {
      region: amplify.storage.REGION,
      bucket: amplify.storage.BUCKET,
      identityPoolId: amplify.auth.IDENTITY_POOL_ID
  },
  API: {
      endpoints: [
          {
              name: amplify.api.NAME,
              endpoint: amplify.api.URL,
              region: amplify.api.REGION
          },
      ]
  }
});

ReactDOM.render(
  <Router>
    <AmplifyAuthenticator usernameAlias="email">
        <Routes/>
    </AmplifyAuthenticator>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
