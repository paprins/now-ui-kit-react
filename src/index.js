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
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

// Amplify configuration is in .env
require('dotenv').config();

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
  },
  Storage: {
      region: process.env.REACT_APP_S3_REGION,
      bucket: process.env.REACT_APP_S3_BUCKET,
      identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID
  },
  API: {
      endpoints: [
          {
              name: process.env.REACT_APP_API_NAME,
              endpoint: process.env.REACT_APP_API_URL,
              region: process.env.REACT_APP_API_REGION
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
