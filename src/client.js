const axios = require("axios").default;
const errors = require("./errors");

class Client {
    /**
     * The EarnApp client
     * @example const client = new Client();
     */
    constructor() {
        /**
         * The base API URL
         * @type {string}
         */
        this.API_URL = "https://earnapp.com/dashboard/api";

        /**
         * The client API URL
         * @type {string}
         */
        this.CLIENT_API_URL = "https://client.earnapp.com";
    }

    /**
     * Authentication cookies
     * @type {string}
     * @private
     */
    #authCookies = "";

    /**
     * Make request against the API
     * @private
     * @param {string} method HTTP method
     * @param  {string} path API endpoint
     * @param  {Object} [reqOptions] request options
     * @private
     * @returns {Promise<Object>} promise
     */
    #request(method, path, reqOptions = {}) {
        let options = {
            method,
            url: `${this.API_URL}/${path}?appid=earnapp_dashboard`,
            headers: {
                "User-Agent": `earnapp.js ${require("../package.json").version} (https://github.com/LockBlock-dev/earnapp.js)`,
                "Content-Type": "application/json",
                "Accept-Encoding": "UTF8",
                Cookie: this.#authCookies,
            },
            ...reqOptions,
        };

        return axios(options)
            .then((response) => {
                if (typeof response.data === "object") {
                    return response.data;
                } else {
                    try {
                        return { status: response.data.toLowerCase() };
                    } catch (err) {
                        throw new errors.ParseError(response.data, response.status, options.method, options.url);
                    }
                }
            })
            .catch((error) => {
                throw error.type === "ParseError"
                    ? error
                    : new errors.APIError(error, error.response, error.response.status, options.method, options.url);
            });
    }

    /**
     * Log into EarnApp.
     * @param {Object} authCookies
     * @param {string} authCookies.authMethod authentication method
     * @param {string} authCookies.oauthRefreshToken OAuth refresh token
     * @example client.login({ authMethod: "google", oauthRefreshToken: "1%2F%2F0dx...mfz75" });
     * @returns {Promise<Object>}
     */
    async login(authCookies) {
        let cookies = {
            "auth-method": authCookies.authMethod,
            "oauth-refresh-token": authCookies.oauthRefreshToken,
        };

        Object.keys(cookies).forEach((c) => {
            if (!cookies[c].endsWith(";")) cookies[c] += ";";
            this.#authCookies += `${c}=${cookies[c]} `;
        });

        return { status: "ok" };
    }

    /**
     * Get the app versions.
     * @example client.appVersions();
     * @returns {Promise<Object>}
     */
    appVersions() {
        return this.#request("GET", "app_versions");
    }

    /**
     * Get the available payment methods.
     * @example client.paymentMethods();
     * @returns {Promise<Object>}
     */
    paymentMethods() {
        return this.#request("GET", "payment_methods");
    }

    /**
     * Get your user data.
     * @example client.userData();
     * @returns {Promise<Object>}
     */
    userData() {
        return this.#request("GET", "user_data");
    }

    /**
     * Get user devices.
     * @example client.devices();
     * @returns {Promise<Object>}
     */
    devices() {
        return this.#request("GET", "devices");
    }

    /**
     * Get user transactions.
     * @example client.transactions();
     * @returns {Promise<Object>}
     */
    transactions() {
        return this.#request("GET", "transactions");
    }

    /**
     * Get user stats.
     * @example client.stats();
     * @returns {Promise<Object>}
     */
    stats() {
        return this.#request("GET", "money");
    }

    /**
     * Get user referrals.
     * @example client.referrals();
     * @returns {Promise<Object>}
     */
    referrals() {
        return this.#request("GET", "referees");
    }

    /**
     * Get counters before balances update and auto redeem.
     * @example client.stats();
     * @returns {Promise<Object>}
     */
    counters() {
        return this.#request("GET", "counters");
    }

    /**
     * Link a new device to your account.
     * @param {string} uuid device uuid
     * @example client.linkDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
     * @returns {Promise<Object>}
     */
    linkDevice(uuid) {
        return this.#request("POST", "link_device", { data: { uuid: uuid } });
    }

    /**
     * Register a new device on EarnApp database.
     * Use client.linkDevice(uuid) to link it to your account.
     * @param {string} uuid device uuid
     * @example client.registerDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
     * @returns {Promise<Object>}
     */
    registerDevice(uuid, version, arch, appid) {
        return this.#request("POST", "link_device", {
            url: `${this.CLIENT_API_URL}/install_device`,
            data: {
                uuid: uuid,
                version: "1.261.303",
                arch: process.arch,
                appid: "node_earnapp.com",
                //win_earnapp.com
            },
        });
    }

    /**
     * Set your payment details.
     * @param {string} email paypal / amazon email
     * @param {string} method methods:
     * to see methods do client.paymentMethods()
     * @example client.setPaymentDetails("mail@domain.com", "paypal.com");
     * @example client.setPaymentDetails("mail@domain.com", "amazon.com (US/Global)");
     * @returns {Promise<Object>}
     */
    setPaymentDetails(email, method) {
        return this.#request("POST", "redeem_details", { data: { to: email, payment_method: method } });
    }

    /**
     * Redeem your balance.
     * @param {string} email paypal / amazon email
     * @param {string} method methods:
     * to see methods do client.paymentMethods()
     * @example client.redeem("mail@domain.com", "paypal.com");
     * @example client.redeem("mail@domain.com", "amazon.com (US/Global)");
     * @returns {Promise<Object>}
     */
    redeem(email, method) {
        process.emitWarning("The redeem method is currently disabled.", "DisabledMethodWarning");
        return this.#request("POST", "redeem", { data: { to: email, payment_method: method } });
    }

    /**
     * Log out of your account.
     * @example client.logout();
     * @returns {Promise<Object>}
     */
    logout() {
        return this.#request("POST", "logout");
    }
}

module.exports = { Client };
