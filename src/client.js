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
     * CSRF token
     * @type {string}
     * @private
     */
    #xsrfToken = "";

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
                "User-Agent": `earnapp.js ${
                    require("../package.json").version
                } (https://github.com/LockBlock-dev/earnapp.js)`,
                "Content-Type": "application/json",
                "Accept-Encoding": "UTF8",
                "xsrf-token": this.#xsrfToken,
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
                        throw new errors.ParseError(
                            response.data,
                            response.status,
                            options.method,
                            options.url
                        );
                    }
                }
            })
            .catch((error) => {
                throw error.type === "ParseError"
                    ? error
                    : new errors.APIError(
                          error,
                          error.response,
                          error.response.status,
                          options.method,
                          options.url
                      );
            });
    }

    /**
     * Log into EarnApp.
     * @param {Object} authCookies
     * @param {string} authCookies.authMethod authentication method
     * @param {string} authCookies.oauthRefreshToken OAuth refresh token
     * @param {string} authCookies.xsrfToken CSRF token
     * @example client.login({ authMethod: "google", oauthRefreshToken: "1%2F%2F0dx...mfz75", xsrfToken: "uE9Tm4sXtk4wHEz4tZFJyANB" });
     * @returns {Promise<Object>}
     */
    async login(authCookies) {
        let cookies = {
            "auth-method": authCookies.authMethod,
            "oauth-refresh-token": authCookies.oauthRefreshToken,
            "xsrf-token": authCookies.xsrfToken || "",
        };

        Object.keys(cookies).forEach((c) => {
            if (!cookies[c].endsWith(";")) cookies[c] += ";";
            this.#authCookies += `${c}=${cookies[c]} `;
        });

        this.#xsrfToken = authCookies.xsrfToken || "";

        return { status: "ok" };
    }

    /**
     * Get the app versions.
     * @example client.downloads();
     * @returns {Promise<Object>}
     */
    downloads() {
        return this.#request("GET", "downloads");
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
     * Get EarnApp current offers.
     * @example client.offers();
     * @returns {Promise<Object>}
     */
    offers() {
        return this.#request("GET", "offers");
    }

    /**
     * Get user promotions.
     * @example client.offers();
     * @returns {Promise<Object>}
     */
    promotions() {
        return this.#request("GET", "bonuses");
    }

    /**
     * Get EarnApp current notifications.
     * @example client.notifications();
     * @returns {Promise<Object>}
     */
    notifications() {
        return this.#request("GET", "notifications");
    }

    /**
     * Get contest leaderboard.
     * @example client.leaderboard();
     * @returns {Promise<Object>}
     */
    leaderboard() {
        return this.#request("GET", "leaderboard");
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
     * Use client.linkDevice(uuid, versio, arch, appid) to link it to your account.
     * @param {string} uuid device uuid
     * @param {string} version app version
     * @param {string} arch device arch
     * @param {string} appid app id
     * @example client.registerDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "1.295.874", "x64", "win_earnapp.com");
     * @example client.registerDevice("sdk-win-6fd29568de6f481887ccf0ddea29dcca", "1.293.301", "x64", "node_earnapp.com");
     * @returns {Promise<Object>}
     */
    registerDevice(uuid, version, arch, appid) {
        return this.#request("POST", "link_device", {
            url: `${this.CLIENT_API_URL}/install_device`,
            data: {
                uuid: uuid,
                version: version,
                arch: arch || process.arch,
                appid: appid,
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
        return this.#request("POST", "redeem_details", {
            data: { to: email, payment_method: method },
        });
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
        return this.#request("POST", "redeem", { data: { to: email, payment_method: method } });
    }

    /**
     * Remove auto redeem.
     * @example client.removeAutoRedeem();
     * @returns {Promise<Object>}
     */
    removeAutoRedeem() {
        return this.#request("DELETE", "redeem_details");
    }

    /**
     * Log out of your account.
     * @example client.logout();
     * @returns {Promise<Object>}
     */
    logout() {
        return this.#request("POST", "logout");
    }

    /**
     * Check an ip for EarnApp.
     * @param {string} ip ip to check
     * @example client.check("1.1.1.1");
     * @returns {Promise<Object>}
     */
    check(ip) {
        return this.#request("POST", `check_ip/${ip}`);
    }

    /**
     * Rename a device.
     * @param {string} uuid device uuid
     * @param {string} name new device name
     * @example client.rename("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "new name");
     * @returns {Promise<Object>}
     */
    rename(uuid, name) {
        return this.#request("PUT", `edit_device/${uuid}`, { data: { name: name } });
    }

    /**
     * Remove a device.
     * @param {string} uuid device uuid
     * @example client.remove("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
     * @returns {Promise<Object>}
     */
    remove(uuid) {
        return this.#request("DELETE", `device/${uuid}`);
    }

    /**
     * Hide a device.
     * @param {string} uuid device uuid
     * @example client.hide("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
     * @returns {Promise<Object>}
     */
    hide(uuid) {
        return this.#request("PUT", "hide_device", { data: { uuid: uuid } });
    }

    /**
     * Show a device.
     * @param {string} uuid device uuid
     * @example client.show("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
     * @returns {Promise<Object>}
     */
    show(uuid) {
        return this.#request("PUT", "show_device", { data: { uuid: uuid } });
    }

    /**
     * Get user devices usage.
     * @example client.usage();
     * @returns {Promise<Object>}
     */
    usage() {
        return this.#request("GET", "usage");
    }

    /**
     * Get user devices status.
     * @param {string} list devices list
     * @example client.devicesStatus([{ uuid: "sdk-win-7744606f9f7b42d5b99d11e80f70886c", appid: "win_earnapp.com" }]);
     * @returns {Promise<Object>}
     */
    devicesStatus(list) {
        return this.#request("POST", "device_statuses", { data: { list: list } });
    }
}

module.exports = { Client };
