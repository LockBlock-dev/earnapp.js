## How to login with cookies

The library uses 2 cookies to connect to EarnApp.
These cookies are subject to expiration, they may not work indefinitely.  
To get these cookies you need to:

### Sidenote :

This method applies to all cookies you might need (auth, xsrf, ...)

### Method 1: Cookies storage

-   go to the EarnApp <a href="https://earnapp.com/dashboard">dashboard</a>
-   open the dev tools by pressing <code>Ctrl + Shift + I</code> or <code>F12</code> and go to the `Network` tab
-   log into your account
-   Firefox: In the tabs (Inspector, Network, ...), go to `Storage`, expand the cookies section, click on `https://earnapp.com`, then copy the value of the `oauth-refresh-token` cookie.
-   Chrome: In the tabs (Elements, Network, ...), go to `Application`, in the `Storage` part, expand the cookies section, click on `https://earnapp.com`, then copy the value of the `oauth-refresh-token` cookie.

### Method 2: request header

-   go to the EarnApp <a href="https://earnapp.com/dashboard">dashboard</a>
-   open the dev tools by pressing <code>Ctrl + Shift + I</code> or <code>F12</code> and go to the `Network` tab
-   log into your account
-   in the last requests, search for the one beginning with `token`
-   in the `Headers` tab, in the `Response Headers` part, look for the 4 `set-cookie` headers
-   copy the value of `auth-method` (should be `google` since it is the only available right now) and `oauth-refresh-token`. Values end by a semicolon ( `;` ).
-   example:  
    header: `set-cookie: auth-method=google; Path=/; HttpOnly; Secure`  
    value: `google`

### Final step

-   write the cookies in the client.dashboard.login function:

```js
client.dashboard.login({
    authMethod: "google",
    oauthRefreshToken: "1%2F%2F0dx...mfz75",
    //don't include 'set-cookie: oauth-refresh-token='
    xsrfToken: "uE9Tm4sXtk4wHEz4tZFJyANB",
    //needed for endpoints like linking a device / or making a payout
});
```
