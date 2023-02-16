# Upgrading from version 1.X.X to version 2.X.X

All methods that requires authentication (dashboard API) are moved to <code>client.dashboard</code>.  
example:

```diff
- client.stats()
+ client.dashboard.stats()
```

The methods left on <code>client</code> don't need authentication and are uuid bound.

# EarnApp.js

[![axios](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/earnapp.js/axios)](https://www.npmjs.com/package/axios)

[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/earnapp.js.svg)](https://github.com/LockBlock-dev/earnapp.js/stargazers) ![npm](https://img.shields.io/npm/dm/earnapp.js)

earnapp.js is a Node.js module that allows you to easily interact with the EarnApp API.

-   Promise-based
-   Performant
-   100% coverage of the EarnApp API

## Installation

-   Install [NodeJS](https://nodejs.org).

### With GitHub:

-   Download or clone the project.
-   Go to the `earnapp.js` folder and run `npm install`.
-   Require [`client.js`](/src/client.js).

### With npm:

-   Run `npm install earnapp.js`.
-   Require the library.

## Documentation

-   [Knowledge base](/KnowledgeBase.md)
-   [API documentation](/API.md)
-   [Changelog](/CHANGELOG.md)
-   [How to login with cookies](/Cookies.md)

## Example usage

The library can be used in both CommonJS and ES Modules

### Using the library

The library is async, be sure to use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#syntax) or [`.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#syntax)

```js
const { Client } = require("earnapp.js");
//OR
import { Client } from "earnapp.js";

const client = new Client();

client.dashboard.login({
    authMethod: "google",
    oauthRefreshToken: "1%2F%2F0dx...mfz75",
    xsrfToken: "uE9Tm4sXtk4wHEz4tZFJyANB",
    //needed for endpoints like linking a device / or making a payout
});

client.dashboard.stats().then((data) => {
    console.log(data);
});
//OR
const getStats = async () => {
    const data = await client.dashboard.stats();
    console.log(data);
};

getStats();
```

You can also get the CSRF token and login like this:

```js
const main = async () => {
    const cookie = "1%2F%2F0dx...mfz75";

    const { token } = await client.dashboard.getCSRF({
        authMethod: "google",
        oauthRefreshToken: cookie,
    });

    client.dashboard.login({
        authMethod: "google",
        oauthRefreshToken: cookie,
        xsrfToken: token,
        //needed for endpoints like linking a device / or making a payout
    });
};

main();
```

## Credits

[EarnApp](https://earnapp.com)

## Copyright

See the [license](/LICENSE)
