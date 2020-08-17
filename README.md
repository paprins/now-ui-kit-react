# now-ui-kit-react
> and `Amplify`

# Steps

* Run: `npx create-react-app now-ui-kit-react`
* Use `https://github.com/creativetimofficial/now-ui-kit-react` as a base.
* Test: `yarn start`

## Adding Amplify

```
$ yarn add aws-amplify @aws-amplify/ui-react dotenv
```

## Amplify Configuration

We're using `dotenv`

```
import Amplify from "aws-amplify";
import amplify from 'amplify.js';

require('dotenv').config();

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: amplify.auth.REGION,
    userPoolId: amplify.auth.USER_POOL_ID,
    identityPoolId: amplify.auth.IDENTITY_POOL_ID,
    userPoolWebClientId: amplify.auth.APP_CLIENT_ID,
  }
});
```

> `amplify.js`

```
export default {
  auth: {
    REGION: process.env.REACT_APP_COGNITO_REGION,
    USER_POOL_ID: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
  }
}
```

> `.env`

```
REACT_APP_COGNITO_REGION="<REGION>"
REACT_APP_COGNITO_USER_POOL_ID="<YOUR_USER_POOL>"
REACT_APP_COGNITO_APP_CLIENT_ID="<YOUR_APP_CLIENT>"
REACT_APP_IDENTITY_POOL_ID="<YOUR_IDENTITY_POOL>"
```

> **Pro Tip** use [`serverless-export-env`](https://github.com/arabold/serverless-export-env) if you used `serverless` to create the Cognito resources.

~ the end
