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

-   [API documentation](/API.md)
-   [Changelog](/CHANGELOG.md)
-   <a href="#cookies">How to login with cookies</a>

## Example usage

The library can be used in both CommonJS and ES Modules

### Using the library

The library is async, be sure to use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#syntax) or [`.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#syntax)

```js
const { Client } = require("earnapp.js");
//OR
import { Client } from "earnapp.js";

const client = new Client();

client.login({
    authMethod: "google",
    oauthRefreshToken: "1%2F%2F0dx...mfz75",
});

client.stats().then((data) => {
    console.log(data);
});
//OR
const getStats = async () => {
    const data = await client.stats();
    console.log(data);
};

getStats();
```

## <a name="logout">How to login with cookies</a>

The library uses 2 cookies to connect to EarnApp.
These cookies are subject to expiration, they may not work indefinitely.  
To get these cookies you need to:

-   go to the EarnApp <a href="https://earnapp.com/dashboard">dashboard</a>
-   open the dev tools by pressing <code>Ctrl + Shift + I</code> or <code>F12</code> and go to the `Network` tab
-   log into your account
-   in the last requests, search for the one beginning with `token`
-   in the `Headers` tab, in the `Response Headers` part, look for the 4 `set-cookie` headers
-   copy the value of `auth-method` (should be `google` since it is the only available right now) and `oauth-refresh-token`. Values end by a semicolon ( `;` ).
-   example:  
    header: `set-cookie: auth-method=google; Path=/; HttpOnly; Secure`  
    value: `google`
-   then, write these 2 values in the client.login function:

```js
client.login({
    authMethod: "google",
    oauthRefreshToken: "1%2F%2F0dx...mfz75",
});
```

## Credits

[EarnApp](https://earnapp.com)

## Copyright

See the [license](/LICENSE)
