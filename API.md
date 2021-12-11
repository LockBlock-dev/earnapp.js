# Methods

<dl>
<dt><a href="#appVersions">appVersions()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get the app versions.</p>
</dd>
<dt><a href="#counters">counters()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get counters before balances update and auto redeem.</p>
</dd>
<dt><a href="#devices">devices()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user devices.</p>
</dd>
<dt><a href="#leaderboard">leaderboard()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get contest leaderboard.</p>
</dd>
<dt><a href="#linkDevice">linkDevice(uuid)</a> ⇒ <code>Promise</code></dt>
<dd><p>Link a new device to your account.</p>
</dd>
<dt><a href="#login">login(authCookies)</a> ⇒ <code>Promise</code></dt>
<dd><p>Log into EarnApp.</p>
</dd>
<dt><a href="#logout">logout()</a> ⇒ <code>Promise</code></dt>
<dd><p>Log out of your account.</p>
</dd>
<dt><a href="#notifications">notifications()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get EarnApp current notifications.</p>
</dd>
<dt><a href="#offers">offers()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get EarnApp current offers.</p>
</dd>
<dt><a href="#paymentMethods">paymentMethods()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get the available payment methods.</p>
</dd>
<dt><a href="#promotions">promotions()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user promotions.</p>
</dd>
<dt><a href="#referrals">referrals()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user referrals.</p>
</dd>
<dt><a href="#registerDevice">registerDevice(uuid)</a> ⇒ <code>Promise</code></dt>
<dd><p>Register a new device on EarnApp database.</p>
</dd>
<dt><a href="#remove">remove(uuid)</a> ⇒ <code>Promise</code></dt>
<dd><p>Remove a device.</p>
</dd>
<dt><a href="#rename">rename(uuid, name)</a> ⇒ <code>Promise</code></dt>
<dd><p>Rename a device.</p>
</dd>
<dt><a href="#setPaymentDetails">setPaymentDetails(email, method)</a> ⇒ <code>Promise</code></dt>
<dd><p>Set your payment details.</p>
</dd>
<dt><a href="#stats">stats()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user stats.</p>
</dd>
<dt><a href="#transactions">transactions()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user transactions.</p>
</dd>
<dt><a href="#userData">userData()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get your user data.</p>
</dd>
</dl>

# Errors

<dl>
<dt><a href="APIError">APIError</a> ⇒ <code>Error</code></dt>
<dd><p>Error related to the API.</p>
</dd>
<dt><a href="FatalError">FatalError</a> ⇒ <code>Error</code></dt>
<dd><p>Fatal error in the program. (you don't want this one)</p>
</dd>
<dt><a href="ParseError">ParseError</a> ⇒ <code>Error</code></dt>
<dd><p>Error related to a parsing error in the response from the API.</p>
</dd>
</dl>

---

# Methods

<a name="appVersions"></a>

## appVersions() ⇒ <code>Promise</code>

Get the app versions.

**Kind**: method  
**Returns**:

```js
{

    win: String,
    mac: String,

}
```

**Example**

```js
client.appVersions();
```

<a name="counters"></a>

## counters() ⇒ <code>Promise</code>

Get counters before balances update and auto redeem.

**Kind**: method  
**Returns**:

```js
{

    balance_sync: Number,
    auto_redeem: Number,

}
```

**Example**

```js
client.counters();
```

<a name="devices"></a>

## devices() ⇒ <code>Promise</code>

Get user devices.

**Kind**: method  
**Returns**:

```js
Device[];
```

```js
Device {
    uuid: String,
    title: String,
    bw: Number,
    total_bw: Number,
    redeem_bw: Number,
    rate: Number,
    earned: Number,
    earned_total: Number,
    cn: String,
    banned: Object,
}
```

**Example**

```js
client.devices();
```

<a name="leaderboard"></a>

## leaderboard() ⇒ <code>Promise</code>

Get contest leaderboard.

**Kind**: method  
**Returns**:

```js
User[];
```

```js
User {
    referees: Number,
    place: Number,
    email: String,
};
```

**Example**

```js
client.leaderboard();
```

<a name="linkDevice"></a>

## linkDevice(uuid) ⇒ <code>Promise</code>

Link a new device to your account.

**Kind**: method  
**Returns**:

```js
{

    status: String,

}
```

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| uuid  | <code>String</code> | device uuid |

**Example**

```js
client.linkDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```

<a name="login"></a>

## login(authCookies) ⇒ <code>Promise</code>

Log into EarnApp.

**Kind**: method  
**Returns**:

```js
{

    status: String,

}
```

| Param                               | Type                | Description           |
| ----------------------------------- | ------------------- | --------------------- |
| authCookies                         | <code>Object</code> |                       |
| authCookies<area>.authMethod        | <code>String</code> | authentication method |
| authCookies<area>.oauthRefreshToken | <code>String</code> | OAuth refresh token   |

**Example**

```js
client.login({ authMethod: "google", oauthRefreshToken: "1%2F%2F0dx...mfz75" });
```

<a name="logout"></a>

## logout() ⇒ <code>Promise</code>

Log out of your account.

**Kind**: method  
**Returns**:

```js
{

    ok: Boolean,

}
```

**Example**

```js
client.logout();
```

<a name="notifications"></a>

## notifications() ⇒ <code>Promise</code>

Get EarnApp current notifications.

**Kind**: method  
**Returns**:

```js
Notification[];
```

```js
Notification {
    id: String,
    title: String,
    brief: Number,
    meta: Object,
}
```

**Example**

```js
client.notifications();
```

<a name="offers"></a>

## offers() ⇒ <code>Promise</code>

Get EarnApp current offers.

**Kind**: method  
**Returns**:

```js
Offer[];
```

```js
Offer {
    id: String,
    title: String,
    brief: Number,
    meta: Object,
}
```

**Example**

```js
client.offers();
```

<a name="paymentMethods"></a>

## paymentMethods() ⇒ <code>Promise</code>

Get the available payment methods.

**Kind**: method  
**Returns**:

```js
{

    paypal: Object,
    amazon: Array,

}
```

**Example**

```js
client.paymentMethods();
```

<a name="promotions"></a>

## promotions() ⇒ <code>Promise</code>

Get user promotions.

**Kind**: method  
**Returns**:

```js
Promotions[];
```

**Example**

```js
client.promotions();
```

<a name="referrals"></a>

## referrals() ⇒ <code>Promise</code>

Get user referrals.

**Kind**: method  
**Returns**:

```js
Referrals[];
```

```js
Referral {
    id: Number,
    email: String,
    bonuses: Number,
    bonuses_total: Number,
}
```

**Example**

```js
client.referrals();
```

<a name="registerDevice"></a>

## registerDevice(uuid) ⇒ <code>Promise</code>

Register a new device on EarnApp database.
Use client.<a href="#linkDevice">linkDevice(uuid)</a> to link it to your account.

**Kind**: method  
**Returns**:

```js
{

    status: String,

}
```

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| uuid  | <code>String</code> | device uuid |

**Example**

```js
client.registerDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
```

<a name="remove"></a>

## remove(uuid) ⇒ <code>Promise</code>

Remove a device.

**Kind**: method  
**Returns**:

```js
{

    status: String,

}
```

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| uuid  | <code>String</code> | device uuid |

**Example**

```js
client.rename("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "new name");
```

<a name="rename"></a>

## rename(uuid, name) ⇒ <code>Promise</code>

Rename a device.

**Kind**: method  
**Returns**:

```js
{

    status: String,

}
```

| Param | Type                | Description     |
| ----- | ------------------- | --------------- |
| uuid  | <code>String</code> | device uuid     |
| name  | <code>String</code> | new device name |

**Example**

```js
client.rename("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "new name");
```

<a name="setPaymentDetails"></a>

## setPaymentDetails(email, method) ⇒ <code>Promise</code>

Set your payment details.

**Kind**: method  
**Returns**:

```js
{
    status: String,
}
```

| Param  | Type                | Description                                                                      |
| ------ | ------------------- | -------------------------------------------------------------------------------- |
| email  | <code>String</code> | paypal / amazon email                                                            |
| method | <code>String</code> | methods: to see methods do client.<a href="#paymentMethods">paymentMethods()</a> |

**Example**

```js
client.setPaymentDetails("mail@domain.com", "paypal.com");
client.setPaymentDetails("mail@domain.com", "amazon.com (US/Global)");
```

<a name="stats"></a>

## stats() ⇒ <code>Promise</code>

Get user stats.

**Kind**: method  
**Returns**:

```js
{
    balance: Number,
    tokens: Number,
    earnings_total:: Number,
    multiplier: Number,
    redeem_details: Object,
    ref_bonuses: Number,
    ref_bonuses_total: Number,
    promo_bonuses: Number,
    promo_bonuses_total: Number,
    referral_part: String,
}
```

**Example**

```js
client.stats();
```

<a name="transactions"></a>

## transactions() ⇒ <code>Promise</code>

Get user transactions.

**Kind**: method  
**Returns**:

```js
Transaction[];
```

```js
Transaction {
    uuid: String,
    status: String,
    email: String,
    date: String,
    payment_method: String,
    payment_date: Number,
    devices: Array,
    bw_amount: Number,
    money_amount: Number,
    ref_bonuses_amount: Number,
    promo_bonuses_amount: Number,
}
```

**Example**

```js
client.transactions();
```

<a name="userData"></a>

## userData() ⇒ <code>Promise</code>

Get your user data.

**Kind**: method  
**Returns**:

```js
{
    first_name: String,
    last_name: String,
    name: String,
    locale: String,
    picture: String,
    referral_code: String,
    email: String,
}
```

**Example**

```js
client.userData();
```

# Errors

<a name="APIError"></a>

## APIError ⇒ <code>Error</code>

Error related to the API

**Returns**:

```js
{
    message: String,
    type: String,
    status: Number,
    method: String,
    url: String,s
    error: String
}
```

**Example**

```js
{
    message: "Request failed with status code 400",
    type: 'APIError',
    status: 400,
    method: 'POST',
    url: 'https://client.earnapp.com/install_device',
    error: "Missing uuid parameter"
}
```

<a name="FatalError"></a>

## FatalError ⇒ <code>Error</code>

Fatal error in the program. (you don't want this one)

**Kind**: method  
**Returns**:

```js
{
    message: String,
    type: String,
    stack: String
}
```

<a name="ParseError"></a>

## ParseError ⇒ <code>Error</code>

Error related to a parsing error in the response from the API.

**Kind**: method  
**Returns**:

```js
{
    message: String,
    type: String,
    status: Number,
    method: String,
    url: String,
    response: String|Object
}
```

**Example**

```js
{
    message: "Error parsing response",
    type: 'ParseError',
    status: 200,
    method: 'GET',
    url: 'https://earnapp.com/dashboard/api/devices',
    response: ""
}
```
