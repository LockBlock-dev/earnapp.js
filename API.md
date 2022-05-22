<a name="Client"></a>

## Client
**Kind**: global class  

* [Client](#Client)
    * [new Client()](#new_Client_new)
    * [.API_URL](#Client+API_URL) : <code>string</code>
    * [.CLIENT_API_URL](#Client+CLIENT_API_URL) : <code>string</code>
    * [.login(authCookies)](#Client+login) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.downloads()](#Client+downloads) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.paymentMethods()](#Client+paymentMethods) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.userData()](#Client+userData) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.devices()](#Client+devices) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.transactions()](#Client+transactions) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.stats()](#Client+stats) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.referrals()](#Client+referrals) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.counters()](#Client+counters) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.offers()](#Client+offers) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.promotions()](#Client+promotions) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.notifications()](#Client+notifications) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.leaderboard()](#Client+leaderboard) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.linkDevice(uuid)](#Client+linkDevice) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.registerDevice(uuid, version, arch, appid)](#Client+registerDevice) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.setPaymentDetails(email, method)](#Client+setPaymentDetails) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.redeem(email, method)](#Client+redeem) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.removeAutoRedeem()](#Client+removeAutoRedeem) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.logout()](#Client+logout) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.check(ip)](#Client+check) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.rename(uuid, name)](#Client+rename) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.remove(uuid)](#Client+remove) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.hide(uuid)](#Client+hide) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.show(uuid)](#Client+show) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.usage()](#Client+usage) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.devicesStatus(list)](#Client+devicesStatus) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_Client_new"></a>

### new Client()
The EarnApp client

**Example**  
```js
const client = new Client();
```
<a name="Client+API_URL"></a>

### client.API\_URL : <code>string</code>
The base API URL

**Kind**: instance property of [<code>Client</code>](#Client)  
<a name="Client+CLIENT_API_URL"></a>

### client.CLIENT\_API\_URL : <code>string</code>
The client API URL

**Kind**: instance property of [<code>Client</code>](#Client)  
<a name="Client+login"></a>

### client.login(authCookies) ⇒ <code>Promise.&lt;Object&gt;</code>
Log into EarnApp.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| authCookies | <code>Object</code> |  |
| authCookies.authMethod | <code>string</code> | authentication method |
| authCookies.oauthRefreshToken | <code>string</code> | OAuth refresh token |
| authCookies.xsrfToken | <code>string</code> | CSRF token |

**Example**  
```js
client.login({ authMethod: "google", oauthRefreshToken: "1%2F%2F0dx...mfz75", xsrfToken: "uE9Tm4sXtk4wHEz4tZFJyANB" });
```
<a name="Client+downloads"></a>

### client.downloads() ⇒ <code>Promise.&lt;Object&gt;</code>
Get the app versions.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.downloads();
```
<a name="Client+paymentMethods"></a>

### client.paymentMethods() ⇒ <code>Promise.&lt;Object&gt;</code>
Get the available payment methods.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.paymentMethods();
```
<a name="Client+userData"></a>

### client.userData() ⇒ <code>Promise.&lt;Object&gt;</code>
Get your user data.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.userData();
```
<a name="Client+devices"></a>

### client.devices() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user devices.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.devices();
```
<a name="Client+transactions"></a>

### client.transactions() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user transactions.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.transactions();
```
<a name="Client+stats"></a>

### client.stats() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user stats.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.stats();
```
<a name="Client+referrals"></a>

### client.referrals() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user referrals.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.referrals();
```
<a name="Client+counters"></a>

### client.counters() ⇒ <code>Promise.&lt;Object&gt;</code>
Get counters before balances update and auto redeem.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.stats();
```
<a name="Client+offers"></a>

### client.offers() ⇒ <code>Promise.&lt;Object&gt;</code>
Get EarnApp current offers.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.offers();
```
<a name="Client+promotions"></a>

### client.promotions() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user promotions.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.offers();
```
<a name="Client+notifications"></a>

### client.notifications() ⇒ <code>Promise.&lt;Object&gt;</code>
Get EarnApp current notifications.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.notifications();
```
<a name="Client+leaderboard"></a>

### client.leaderboard() ⇒ <code>Promise.&lt;Object&gt;</code>
Get contest leaderboard.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.leaderboard();
```
<a name="Client+linkDevice"></a>

### client.linkDevice(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Link a new device to your account.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.linkDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
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
| appid | <code>string</code> | app id: node_earnapp.com, win_earnapp.com,	com.eapp, mac_earnapp.com |

**Example**  
```js
client.registerDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "1.295.874", "x64", "win_earnapp.com");
```
**Example**  
```js
client.registerDevice("sdk-win-6fd29568de6f481887ccf0ddea29dcca", "1.293.301", "x64", "node_earnapp.com");
```
<a name="Client+setPaymentDetails"></a>

### client.setPaymentDetails(email, method) ⇒ <code>Promise.&lt;Object&gt;</code>
Set your payment details.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | paypal / amazon email |
| method | <code>string</code> | methods: to see methods do client.paymentMethods |

**Example**  
```js
client.setPaymentDetails("mail@domain.com", "paypal.com");
```
**Example**  
```js
client.setPaymentDetails("mail@domain.com", "amazon.com (US/Global)");
```
<a name="Client+redeem"></a>

### client.redeem(email, method) ⇒ <code>Promise.&lt;Object&gt;</code>
Redeem your balance.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | paypal / amazon email |
| method | <code>string</code> | methods: to see methods do client.paymentMethods |

**Example**  
```js
client.redeem("mail@domain.com", "paypal.com");
```
**Example**  
```js
client.redeem("mail@domain.com", "amazon.com (US/Global)");
```
<a name="Client+removeAutoRedeem"></a>

### client.removeAutoRedeem() ⇒ <code>Promise.&lt;Object&gt;</code>
Remove auto redeem.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.removeAutoRedeem();
```
<a name="Client+logout"></a>

### client.logout() ⇒ <code>Promise.&lt;Object&gt;</code>
Log out of your account.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.logout();
```
<a name="Client+check"></a>

### client.check(ip) ⇒ <code>Promise.&lt;Object&gt;</code>
Check an ip for EarnApp.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| ip | <code>string</code> | ip to check |

**Example**  
```js
client.check("1.1.1.1");
```
<a name="Client+rename"></a>

### client.rename(uuid, name) ⇒ <code>Promise.&lt;Object&gt;</code>
Rename a device.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |
| name | <code>string</code> | new device name |

**Example**  
```js
client.rename("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "new name");
```
<a name="Client+remove"></a>

### client.remove(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Remove a device.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.remove("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
<a name="Client+hide"></a>

### client.hide(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Hide a device.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.hide("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
<a name="Client+show"></a>

### client.show(uuid) ⇒ <code>Promise.&lt;Object&gt;</code>
Show a device.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | device uuid |

**Example**  
```js
client.show("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```
<a name="Client+usage"></a>

### client.usage() ⇒ <code>Promise.&lt;Object&gt;</code>
Get user devices usage.

**Kind**: instance method of [<code>Client</code>](#Client)  
**Example**  
```js
client.usage();
```
<a name="Client+devicesStatus"></a>

### client.devicesStatus(list) ⇒ <code>Promise.&lt;Object&gt;</code>
Get user devices status.

**Kind**: instance method of [<code>Client</code>](#Client)  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>string</code> | devices list |

**Example**  
```js
client.devicesStatus([{ uuid: "sdk-win-7744606f9f7b42d5b99d11e80f70886c", appid: "win_earnapp.com" }]);
```
