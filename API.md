## Classes

<dl>
<dt><a href="#Client">Client</a></dt>
<dd></dd>
<dt><a href="#Dashboard">Dashboard</a></dt>
<dd></dd>
<dt><a href="#FatalError">FatalError</a> ⇐ <code><a href="#new_BaseError_new">BaseError</a></code></dt>
<dd></dd>
<dt><a href="#APIError">APIError</a> ⇐ <code><a href="#new_BaseError_new">BaseError</a></code></dt>
<dd></dd>
<dt><a href="#ParseError">ParseError</a> ⇐ <code><a href="#new_BaseError_new">BaseError</a></code></dt>
<dd></dd>
<dt><a href="#PiggyBox">PiggyBox</a></dt>
<dd></dd>
</dl>

<a name="Client"></a>

## Client
**Kind**: global class  

* [Client](#Client)
    * [new Client()](#new_Client_new)
    * [.CLIENT_API_URL](#Client+CLIENT_API_URL) : <code>string</code>
    * [.dashboard](#Client+dashboard) : [<code>Dashboard</code>](#Dashboard)
    * [.piggybox](#Client+piggybox) : [<code>PiggyBox</code>](#PiggyBox)
    * [.registerDevice(uuid, version, arch, appid)](#Client+registerDevice) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.deviceStats(uuid, version, arch, appid)](#Client+deviceStats) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_Client_new"></a>

### new Client()
The EarnApp client

**Example**  
```js
const client = new Client();
```
<a name="Client+CLIENT_API_URL"></a>

### client.CLIENT\_API\_URL : <code>string</code>
The client API URL

**Kind**: instance property of [<code>Client</code>](#Client)  
<a name="Client+dashboard"></a>

### client.dashboard : [<code>Dashboard</code>](#Dashboard)
The EarnApp dashboard client

**Kind**: instance property of [<code>Client</code>](#Client)  
<a name="Client+piggybox"></a>

### client.piggybox : [<code>PiggyBox</code>](#PiggyBox)
The PiggyBox dashboard client

**Kind**: instance property of [<code>Client</code>](#Client)  
<a name="Client+registerDevice"></a>

### client.registerDevice(uuid, version, arch, appid) ⇒ <code>Promise.&lt;Object&gt;</code>
Register a new device on EarnApp database.
Use client.linkDevice to link it to your account.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |
| version | <code>string</code> | app version |
| arch | <code>string</code> | device arch: arm, arm64, x64, android |
| appid | <code>string</code> | app id: node_earnapp.com, win_earnapp.com,	com.eapp, mac_com.earnapp |

**Example**  
```js
client.registerDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "1.295.874", "x64", "win_earnapp.com");
```
**Example**  
```js
client.registerDevice("sdk-node-6fd29568de6f481887ccf0ddea29dcca", "1.293.301", "x64", "node_earnapp.com");
```
<a name="Client+deviceStats"></a>

### client.deviceStats(uuid, version, arch, appid) ⇒ <code>Promise.&lt;Object&gt;</code>
Get a device stats on EarnApp database.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |
| version | <code>string</code> | app version |
| arch | <code>string</code> | device arch: arm, arm64, x64, android |
| appid | <code>string</code> | app id: node_earnapp.com, win_earnapp.com,	com.eapp, mac_com.earnapp |

**Example**  
```js
client.deviceStats("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "1.295.874", "x64", "win_earnapp.com");
```
**Example**  
```js
client.deviceStats("sdk-node-6fd29568de6f481887ccf0ddea29dcca", "1.293.301", "x64", "node_earnapp.com");
```
<a name="Dashboard"></a>

## Dashboard
**Kind**: global class  

* [Dashboard](#Dashboard)
    * [new Dashboard()](#new_Dashboard_new)
    * [.API_URL](#Dashboard+API_URL) : <code>string</code>
    * [.login(authCookies)](#Dashboard+login) ⇒ <code>Object</code>
    * [.getCSRF(authCookies)](#Dashboard+getCSRF) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.downloads()](#Dashboard+downloads) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.paymentMethods()](#Dashboard+paymentMethods) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.userData()](#Dashboard+userData) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.devices()](#Dashboard+devices) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.transactions()](#Dashboard+transactions) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.stats()](#Dashboard+stats) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.referrals()](#Dashboard+referrals) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.counters()](#Dashboard+counters) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.promotions()](#Dashboard+promotions) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.notifications()](#Dashboard+notifications) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.linkDevice(uuid)](#Dashboard+linkDevice) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.setPaymentDetails(email, method)](#Dashboard+setPaymentDetails) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.redeem(email, method)](#Dashboard+redeem) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.removeAutoRedeem()](#Dashboard+removeAutoRedeem) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.logout()](#Dashboard+logout) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.check(ip)](#Dashboard+check) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.rename(uuid, name)](#Dashboard+rename) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.remove(uuid)](#Dashboard+remove) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.hide(uuid)](#Dashboard+hide) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.show(uuid)](#Dashboard+show) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.usage(step)](#Dashboard+usage) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.devicesStatus(list)](#Dashboard+devicesStatus) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.brightvpnReferrals()](#Dashboard+brightvpnReferrals) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.speedtests()](#Dashboard+speedtests) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.deleteAccount(reason)](#Dashboard+deleteAccount) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.disableAccount()](#Dashboard+disableAccount) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.restoreAccount()](#Dashboard+restoreAccount) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_Dashboard_new"></a>

### new Dashboard()
The EarnApp dashboard client

**Example**  
```js
const dashboard = new Dashboard();
```
<a name="Dashboard+API_URL"></a>

### dashboard.API\_URL : <code>string</code>
The base API URL

**Kind**: instance property of [<code>Dashboard</code>](#Dashboard)  
<a name="Dashboard+login"></a>

### dashboard.login(authCookies) ⇒ <code>Object</code>
Log into the dashboard.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| authCookies | <code>Object</code> |  |
| authCookies.authMethod | <code>string</code> | authentication method |
| authCookies.oauthRefreshToken | <code>string</code> | OAuth refresh token |
| authCookies.xsrfToken | <code>string</code> | CSRF token |

**Example**  
```js
client.dashboard.login({ authMethod: "google", oauthRefreshToken: "1%2F%2F0dx...mfz75", xsrfToken: "uE9Tm4sXtk4wHEz4tZFJyANB" });
```
<a name="Dashboard+getCSRF"></a>

### dashboard.getCSRF(authCookies) ⇒ <code>Promise.&lt;Object&gt;</code>
Get the CSRF token from the dashboard. Automatically sets the CSRF token for future requests.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| authCookies | <code>Object</code> |  |
| authCookies.authMethod | <code>string</code> | authentication method |
| authCookies.oauthRefreshToken | <code>string</code> | OAuth refresh token |

**Example**  
```js
client.dashboard.getCSRF({ authMethod: "google", oauthRefreshToken: "1%2F%2F0dx...mfz75" });
```
<a name="Dashboard+downloads"></a>

### dashboard.downloads() ⇒ <code>Promise.&lt;Object&gt;</code>
Get the app versions.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.downloads();
```
<a name="Dashboard+paymentMethods"></a>

### dashboard.paymentMethods() ⇒ <code>Promise.&lt;Object&gt;</code>
Get the available payment methods.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.paymentMethods();
```
<a name="Dashboard+userData"></a>

### dashboard.userData() ⇒ <code>Promise.&lt;Object&gt;</code>
Get your user data.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.userData();
```
<a name="Dashboard+devices"></a>

### dashboard.devices() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user devices.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.devices();
```
<a name="Dashboard+transactions"></a>

### dashboard.transactions() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user transactions.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.transactions();
```
<a name="Dashboard+stats"></a>

### dashboard.stats() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user stats.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.stats();
```
<a name="Dashboard+referrals"></a>

### dashboard.referrals() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user referrals.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.referrals();
```
<a name="Dashboard+counters"></a>

### dashboard.counters() ⇒ <code>Promise.&lt;Object&gt;</code>
Get counters before balances update and auto redeem.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.stats();
```
<a name="Dashboard+promotions"></a>

### dashboard.promotions() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user promotions.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.offers();
```
<a name="Dashboard+notifications"></a>

### dashboard.notifications() ⇒ <code>Promise.&lt;Object&gt;</code>
Get EarnApp current notifications.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.notifications();
```
<a name="Dashboard+linkDevice"></a>

### dashboard.linkDevice(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Link a new device to your account.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.dashboard.linkDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
<a name="Dashboard+setPaymentDetails"></a>

### dashboard.setPaymentDetails(email, method) ⇒ <code>Promise.&lt;Object&gt;</code>
Set your payment details.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | paypal / amazon email |
| method | <code>string</code> | methods: to see methods do client.dashboard.paymentMethods |

**Example**  
```js
client.dashboard.setPaymentDetails("mail@domain.com", "paypal.com");
```
**Example**  
```js
client.dashboard.setPaymentDetails("mail@domain.com", "amazon.com (US/Global)");
```
<a name="Dashboard+redeem"></a>

### dashboard.redeem(email, method) ⇒ <code>Promise.&lt;Object&gt;</code>
Redeem your balance.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | paypal / amazon email |
| method | <code>string</code> | methods: to see methods do client.dashboard.paymentMethods |

**Example**  
```js
client.dashboard.redeem("mail@domain.com", "paypal.com");
```
**Example**  
```js
client.dashboard.redeem("mail@domain.com", "amazon.com (US/Global)");
```
<a name="Dashboard+removeAutoRedeem"></a>

### dashboard.removeAutoRedeem() ⇒ <code>Promise.&lt;Object&gt;</code>
Remove auto redeem.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.removeAutoRedeem();
```
<a name="Dashboard+logout"></a>

### dashboard.logout() ⇒ <code>Promise.&lt;Object&gt;</code>
Log out of your account.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.logout();
```
<a name="Dashboard+check"></a>

### dashboard.check(ip) ⇒ <code>Promise.&lt;Object&gt;</code>
Check an ip for EarnApp.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| ip | <code>string</code> | ip to check |

**Example**  
```js
client.dashboard.check("1.1.1.1");
```
<a name="Dashboard+rename"></a>

### dashboard.rename(uuid, name) ⇒ <code>Promise.&lt;Object&gt;</code>
Rename a device.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |
| name | <code>string</code> | new device name |

**Example**  
```js
client.dashboard.rename("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "new name");
```
<a name="Dashboard+remove"></a>

### dashboard.remove(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Remove a device.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.dashboard.remove("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
<a name="Dashboard+hide"></a>

### dashboard.hide(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Hide a device.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.dashboard.hide("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
<a name="Dashboard+show"></a>

### dashboard.show(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Show a device.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.dashboard.show("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
<a name="Dashboard+usage"></a>

### dashboard.usage(step) ⇒ <code>Promise.&lt;Object&gt;</code>
Get user devices usage.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| step | <code>string</code> | usage step: daily, weekly, monthly |

**Example**  
```js
client.dashboard.usage("daily");
```
<a name="Dashboard+devicesStatus"></a>

### dashboard.devicesStatus(list) ⇒ <code>Promise.&lt;Object&gt;</code>
Get user devices status.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | devices list |

**Example**  
```js
client.dashboard.devicesStatus([ "sdk-win-7744606f9f7b42d5b99d11e80f70886c" ]);
```
<a name="Dashboard+brightvpnReferrals"></a>

### dashboard.brightvpnReferrals() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user BrightVPN referrals.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.brightvpnReferrals();
```
<a name="Dashboard+speedtests"></a>

### dashboard.speedtests() ⇒ <code>Promise.&lt;Object&gt;</code>
Get speedtests.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.speedtest();
```
<a name="Dashboard+deleteAccount"></a>

### dashboard.deleteAccount(reason) ⇒ <code>Promise.&lt;Object&gt;</code>
Delete your account.
CANNOT BE UNDONE

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | deletion reason |

**Example**  
```js
client.dashboard.deleteAccount("some reason here");
```
<a name="Dashboard+disableAccount"></a>

### dashboard.disableAccount() ⇒ <code>Promise.&lt;Object&gt;</code>
Disable your account.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.disableAccount();
```
<a name="Dashboard+restoreAccount"></a>

### dashboard.restoreAccount() ⇒ <code>Promise.&lt;Object&gt;</code>
Restore your account.

**Kind**: instance method of [<code>Dashboard</code>](#Dashboard)  
**Example**  
```js
client.dashboard.restoreAccount();
```
<a name="FatalError"></a>

## FatalError ⇐ [<code>BaseError</code>](#new_BaseError_new)
**Kind**: global class  
**Extends**: [<code>BaseError</code>](#new_BaseError_new)  

* [FatalError](#FatalError) ⇐ [<code>BaseError</code>](#new_BaseError_new)
    * [new FatalError(error)](#new_FatalError_new)
    * [.type](#BaseError+type) : <code>string</code>

<a name="new_FatalError_new"></a>

### new FatalError(error)
Represents a fatal error from the Client.


| Param | Type | Description |
| --- | --- | --- |
| error | <code>string</code> \| <code>error</code> | error object or message |

<a name="BaseError+type"></a>

### fatalError.type : <code>string</code>
error type

**Kind**: instance property of [<code>FatalError</code>](#FatalError)  
<a name="APIError"></a>

## APIError ⇐ [<code>BaseError</code>](#new_BaseError_new)
**Kind**: global class  
**Extends**: [<code>BaseError</code>](#new_BaseError_new)  

* [APIError](#APIError) ⇐ [<code>BaseError</code>](#new_BaseError_new)
    * [new APIError(error, response, status, method, url)](#new_APIError_new)
    * [.status](#APIError+status) : <code>string</code>
    * [.method](#APIError+method) : <code>string</code>
    * [.url](#APIError+url) : <code>string</code>
    * [.type](#BaseError+type) : <code>string</code>

<a name="new_APIError_new"></a>

### new APIError(error, response, status, method, url)
Represents an error from the API.


| Param | Type | Description |
| --- | --- | --- |
| error | <code>string</code> \| <code>error</code> | error message |
| response | <code>object</code> | error response |
| status | <code>string</code> | status type of the request |
| method | <code>string</code> | method used for the request |
| url | <code>string</code> | url of the request to the endpoint |

<a name="APIError+status"></a>

### apiError.status : <code>string</code>
status type of the request

**Kind**: instance property of [<code>APIError</code>](#APIError)  
<a name="APIError+method"></a>

### apiError.method : <code>string</code>
method used for the request

**Kind**: instance property of [<code>APIError</code>](#APIError)  
<a name="APIError+url"></a>

### apiError.url : <code>string</code>
url of the request to the endpoint

**Kind**: instance property of [<code>APIError</code>](#APIError)  
<a name="BaseError+type"></a>

### apiError.type : <code>string</code>
error type

**Kind**: instance property of [<code>APIError</code>](#APIError)  
<a name="ParseError"></a>

## ParseError ⇐ [<code>BaseError</code>](#new_BaseError_new)
**Kind**: global class  
**Extends**: [<code>BaseError</code>](#new_BaseError_new)  

* [ParseError](#ParseError) ⇐ [<code>BaseError</code>](#new_BaseError_new)
    * [new ParseError(message, status, method, url)](#new_ParseError_new)
    * [.status](#ParseError+status) : <code>string</code>
    * [.method](#ParseError+method) : <code>string</code>
    * [.url](#ParseError+url) : <code>string</code>
    * [.type](#BaseError+type) : <code>string</code>

<a name="new_ParseError_new"></a>

### new ParseError(message, status, method, url)
Represents a parsing error.


| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | error message |
| status | <code>String</code> | status type of the request |
| method | <code>String</code> | method used for the request |
| url | <code>String</code> | url of the request to the endpoint |

<a name="ParseError+status"></a>

### parseError.status : <code>string</code>
status type of the request

**Kind**: instance property of [<code>ParseError</code>](#ParseError)  
<a name="ParseError+method"></a>

### parseError.method : <code>string</code>
method used for the request

**Kind**: instance property of [<code>ParseError</code>](#ParseError)  
<a name="ParseError+url"></a>

### parseError.url : <code>string</code>
url of the request to the endpoint

**Kind**: instance property of [<code>ParseError</code>](#ParseError)  
<a name="BaseError+type"></a>

### parseError.type : <code>string</code>
error type

**Kind**: instance property of [<code>ParseError</code>](#ParseError)  
<a name="PiggyBox"></a>

## PiggyBox
**Kind**: global class  

* [PiggyBox](#PiggyBox)
    * [new PiggyBox()](#new_PiggyBox_new)
    * [.API_URL](#PiggyBox+API_URL) : <code>string</code>
    * [.login(authCookies)](#PiggyBox+login) ⇒ <code>Object</code>
    * [.getCSRF(authCookies)](#PiggyBox+getCSRF) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.downloads()](#PiggyBox+downloads) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.paymentMethods()](#PiggyBox+paymentMethods) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.userData()](#PiggyBox+userData) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.devices()](#PiggyBox+devices) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.transactions()](#PiggyBox+transactions) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.stats()](#PiggyBox+stats) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.referrals()](#PiggyBox+referrals) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.counters()](#PiggyBox+counters) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.promotions()](#PiggyBox+promotions) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.notifications()](#PiggyBox+notifications) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.linkDevice(uuid)](#PiggyBox+linkDevice) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.setPaymentDetails(email, method)](#PiggyBox+setPaymentDetails) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.redeem(email, method)](#PiggyBox+redeem) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.removeAutoRedeem()](#PiggyBox+removeAutoRedeem) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.logout()](#PiggyBox+logout) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.rename(uuid, name)](#PiggyBox+rename) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.remove(uuid)](#PiggyBox+remove) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.hide(uuid)](#PiggyBox+hide) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.show(uuid)](#PiggyBox+show) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.usage(step)](#PiggyBox+usage) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.devicesStatus(list)](#PiggyBox+devicesStatus) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.brightvpnReferrals()](#PiggyBox+brightvpnReferrals) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_PiggyBox_new"></a>

### new PiggyBox()
The PiggyBox dashboard client

**Example**  
```js
const dashboard = new PiggyBox();
```
<a name="PiggyBox+API_URL"></a>

### piggyBox.API\_URL : <code>string</code>
The base API URL

**Kind**: instance property of [<code>PiggyBox</code>](#PiggyBox)  
<a name="PiggyBox+login"></a>

### piggyBox.login(authCookies) ⇒ <code>Object</code>
Log into the dashboard.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  

| Param | Type | Description |
| --- | --- | --- |
| authCookies | <code>Object</code> |  |
| authCookies.authMethod | <code>string</code> | authentication method |
| authCookies.oauthRefreshToken | <code>string</code> | OAuth refresh token |
| authCookies.xsrfToken | <code>string</code> | CSRF token |

**Example**  
```js
client.dashboard.login({ authMethod: "google", oauthRefreshToken: "1%2F%2F0dx...mfz75", xsrfToken: "uE9Tm4sXtk4wHEz4tZFJyANB" });
```
<a name="PiggyBox+getCSRF"></a>

### piggyBox.getCSRF(authCookies) ⇒ <code>Promise.&lt;Object&gt;</code>
Get the CSRF token from the dashboard. Automatically sets the CSRF token for future requests.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  

| Param | Type | Description |
| --- | --- | --- |
| authCookies | <code>Object</code> |  |
| authCookies.authMethod | <code>string</code> | authentication method |
| authCookies.oauthRefreshToken | <code>string</code> | OAuth refresh token |

**Example**  
```js
client.dashboard.getCSRF({ authMethod: "google", oauthRefreshToken: "1%2F%2F0dx...mfz75" });
```
<a name="PiggyBox+downloads"></a>

### piggyBox.downloads() ⇒ <code>Promise.&lt;Object&gt;</code>
Get the app versions.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.downloads();
```
<a name="PiggyBox+paymentMethods"></a>

### piggyBox.paymentMethods() ⇒ <code>Promise.&lt;Object&gt;</code>
Get the available payment methods.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.paymentMethods();
```
<a name="PiggyBox+userData"></a>

### piggyBox.userData() ⇒ <code>Promise.&lt;Object&gt;</code>
Get your user data.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.userData();
```
<a name="PiggyBox+devices"></a>

### piggyBox.devices() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user devices.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.devices();
```
<a name="PiggyBox+transactions"></a>

### piggyBox.transactions() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user transactions.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.transactions();
```
<a name="PiggyBox+stats"></a>

### piggyBox.stats() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user stats.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.stats();
```
<a name="PiggyBox+referrals"></a>

### piggyBox.referrals() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user referrals.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.referrals();
```
<a name="PiggyBox+counters"></a>

### piggyBox.counters() ⇒ <code>Promise.&lt;Object&gt;</code>
Get counters before balances update and auto redeem.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.stats();
```
<a name="PiggyBox+promotions"></a>

### piggyBox.promotions() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user promotions.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.offers();
```
<a name="PiggyBox+notifications"></a>

### piggyBox.notifications() ⇒ <code>Promise.&lt;Object&gt;</code>
Get EarnApp current notifications.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.notifications();
```
<a name="PiggyBox+linkDevice"></a>

### piggyBox.linkDevice(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Link a new device to your account.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.dashboard.linkDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
<a name="PiggyBox+setPaymentDetails"></a>

### piggyBox.setPaymentDetails(email, method) ⇒ <code>Promise.&lt;Object&gt;</code>
Set your payment details.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | paypal / amazon email |
| method | <code>string</code> | methods: to see methods do client.dashboard.paymentMethods |

**Example**  
```js
client.dashboard.setPaymentDetails("mail@domain.com", "paypal.com");
```
**Example**  
```js
client.dashboard.setPaymentDetails("mail@domain.com", "amazon.com (US/Global)");
```
<a name="PiggyBox+redeem"></a>

### piggyBox.redeem(email, method) ⇒ <code>Promise.&lt;Object&gt;</code>
Redeem your balance.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | paypal / amazon email |
| method | <code>string</code> | methods: to see methods do client.dashboard.paymentMethods |

**Example**  
```js
client.dashboard.redeem("mail@domain.com", "paypal.com");
```
**Example**  
```js
client.dashboard.redeem("mail@domain.com", "amazon.com (US/Global)");
```
<a name="PiggyBox+removeAutoRedeem"></a>

### piggyBox.removeAutoRedeem() ⇒ <code>Promise.&lt;Object&gt;</code>
Remove auto redeem.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.removeAutoRedeem();
```
<a name="PiggyBox+logout"></a>

### piggyBox.logout() ⇒ <code>Promise.&lt;Object&gt;</code>
Log out of your account.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.logout();
```
<a name="PiggyBox+rename"></a>

### piggyBox.rename(uuid, name) ⇒ <code>Promise.&lt;Object&gt;</code>
Rename a device.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |
| name | <code>string</code> | new device name |

**Example**  
```js
client.dashboard.rename("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "new name");
```
<a name="PiggyBox+remove"></a>

### piggyBox.remove(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Remove a device.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.dashboard.remove("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
<a name="PiggyBox+hide"></a>

### piggyBox.hide(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Hide a device.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.dashboard.hide("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
<a name="PiggyBox+show"></a>

### piggyBox.show(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Show a device.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.dashboard.show("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
<a name="PiggyBox+usage"></a>

### piggyBox.usage(step) ⇒ <code>Promise.&lt;Object&gt;</code>
Get user devices usage.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  

| Param | Type | Description |
| --- | --- | --- |
| step | <code>string</code> | usage step: daily, weekly, monthly |

**Example**  
```js
client.dashboard.usage("daily");
```
<a name="PiggyBox+devicesStatus"></a>

### piggyBox.devicesStatus(list) ⇒ <code>Promise.&lt;Object&gt;</code>
Get user devices status.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>string</code> | devices list |

**Example**  
```js
client.dashboard.devicesStatus([ "sdk-node-7744606f9f7b42d5b99d11e80f70886c" ]);
```
<a name="PiggyBox+brightvpnReferrals"></a>

### piggyBox.brightvpnReferrals() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user BrightVPN referrals.

**Kind**: instance method of [<code>PiggyBox</code>](#PiggyBox)  
**Example**  
```js
client.dashboard.brightvpnReferrals();
```
