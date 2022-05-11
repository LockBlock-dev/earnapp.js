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

client.login({
    authMethod: "google",
    oauthRefreshToken: "1%2F%2F0dx...mfz75",
    xsrfToken: "uE9Tm4sXtk4wHEz4tZFJyANB", //needed for endpoints like linking a device / or making a payout
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

## Credits

[EarnApp](https://earnapp.com)

## Copyright

See the [license](/LICENSE)
