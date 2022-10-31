const axios = require("axios").default;
const errors = require("./errors");
const pkg = require("../package.json");

class Dashboard {
    /**
     * The EarnApp dashboard client
     * @example const dashboard = new Dashboard();
     */
    constructor() {
        /**
         * The base API URL
         * @type {string}
         */
        this.API_URL = "https://earnapp.com/dashboard/api";
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
    #csrfToken = "";

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
                "User-Agent": `earnapp.js ${pkg.version} (https://github.com/LockBlock-dev/earnapp.js)`,
                "Content-Type": "application/json",
                "Accept-Encoding": "UTF8",
                "xsrf-token": this.#csrfToken,
                Cookie: this.#authCookies,
            },
            ...reqOptions,
        };

        return axios(options)
            .then((response) => {
                if (options.raw) {
                    return response;
                } else if (typeof response.data === "object") {
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
     * Log into the dashboard.
     * @param {Object} authCookies
     * @param {string} authCookies.authMethod authentication method
     * @param {string} authCookies.oauthRefreshToken OAuth refresh token
     * @param {string} authCookies.xsrfToken CSRF token
     * @example client.dashboard.login({ authMethod: "google", oauthRefreshToken: "1%2F%2F0dx...mfz75", xsrfToken: "uE9Tm4sXtk4wHEz4tZFJyANB" });
     * @returns {Object}
     */
    login(authCookies) {
        let cookies = {
            "auth-method": authCookies.authMethod,
            "oauth-refresh-token": authCookies.oauthRefreshToken,
            "xsrf-token": authCookies.xsrfToken || "",
        };

        Object.keys(cookies).forEach((c) => {
            if (!cookies[c].endsWith(";")) cookies[c] += ";";
            this.#authCookies += `${c}=${cookies[c]} `;
        });

        this.#csrfToken = authCookies.xsrfToken || "";

        return { status: "ok" };
    }

    /**
     * Get the CSRF token from the dashboard. Automatically sets the CSRF token for future requests.
     * @param {Object} authCookies
     * @param {string} authCookies.authMethod authentication method
     * @param {string} authCookies.oauthRefreshToken OAuth refresh token
     * @example client.dashboard.getCSRF({ authMethod: "google", oauthRefreshToken: "1%2F%2F0dx...mfz75" });
     * @returns {Promise<Object>}
     */
    async getCSRF() {
        const { headers } = await this.#request("GET", "sec/rotate_xsrf", { raw: true });
        this.#csrfToken = headers["set-cookie"]
            .find((c) => c.startsWith("xsrf-token"))
            .split(";")[0]
            .split("=")[1];

        return { status: "ok", token: this.#csrfToken };
    }

    /**
     * Get the app versions.
     * @example client.dashboard.downloads();
     * @returns {Promise<Object>}
     */
    downloads() {
        return this.#request("GET", "downloads");
    }

    /**
     * Get the available payment methods.
     * @example client.dashboard.paymentMethods();
     * @returns {Promise<Object>}
     */
    paymentMethods() {
        return this.#request("GET", "payment_methods");
    }

    /**
     * Get your user data.
     * @example client.dashboard.userData();
     * @returns {Promise<Object>}
     */
    userData() {
        return this.#request("GET", "user_data");
    }

    /**
     * Get user devices.
     * @example client.dashboard.devices();
     * @returns {Promise<Object>}
     */
    devices() {
        return this.#request("GET", "devices");
    }

    /**
     * Get user transactions.
     * @example client.dashboard.transactions();
     * @returns {Promise<Object>}
     */
    transactions() {
        return this.#request("GET", "transactions");
    }

    /**
     * Get user stats.
     * @example client.dashboard.stats();
     * @returns {Promise<Object>}
     */
    stats() {
        return this.#request("GET", "money");
    }

    /**
     * Get user referrals.
     * @example client.dashboard.referrals();
     * @returns {Promise<Object>}
     */
    referrals() {
        return this.#request("GET", "referees");
    }

    /**
     * Get counters before balances update and auto redeem.
     * @example client.dashboard.stats();
     * @returns {Promise<Object>}
     */
    counters() {
        return this.#request("GET", "counters");
    }

    /**
     * Get user promotions.
     * @example client.dashboard.offers();
     * @returns {Promise<Object>}
     */
    promotions() {
        return this.#request("GET", "bonuses");
    }

    /**
     * Get EarnApp current notifications.
     * @example client.dashboard.notifications();
     * @returns {Promise<Object>}
     */
    notifications() {
        return this.#request("GET", "notifications");
    }

    /**
     * Link a new device to your account.
     * @param {string} uuid device uuid
     * @example client.dashboard.linkDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
     * @returns {Promise<Object>}
     */
    linkDevice(uuid) {
        return this.#request("POST", "link_device", { data: { uuid: uuid } });
    }

    /**
     * Set your payment details.
     * @param {string} email paypal / amazon email
     * @param {string} method methods:
     * to see methods do client.dashboard.paymentMethods
     * @example client.dashboard.setPaymentDetails("mail@domain.com", "paypal.com");
     * @example client.dashboard.setPaymentDetails("mail@domain.com", "amazon.com (US/Global)");
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
     * to see methods do client.dashboard.paymentMethods
     * @example client.dashboard.redeem("mail@domain.com", "paypal.com");
     * @example client.dashboard.redeem("mail@domain.com", "amazon.com (US/Global)");
     * @returns {Promise<Object>}
     */
    redeem(email, method) {
        return this.#request("POST", "redeem", {
            data: { to: email, payment_method: method },
        });
    }

    /**
     * Remove auto redeem.
     * @example client.dashboard.removeAutoRedeem();
     * @returns {Promise<Object>}
     */
    removeAutoRedeem() {
        return this.#request("DELETE", "redeem_details");
    }

    /**
     * Log out of your account.
     * @example client.dashboard.logout();
     * @returns {Promise<Object>}
     */
    logout() {
        return this.#request("POST", "logout");
    }

    /**
     * Check an ip for EarnApp.
     * @param {string} ip ip to check
     * @example client.dashboard.check("1.1.1.1");
     * @returns {Promise<Object>}
     */
    check(ip) {
        return this.#request("GET", `check_ip/${ip}`);
    }

    /**
     * Rename a device.
     * @param {string} uuid device uuid
     * @param {string} name new device name
     * @example client.dashboard.rename("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "new name");
     * @returns {Promise<Object>}
     */
    rename(uuid, name) {
        return this.#request("PUT", `edit_device/${uuid}`, {
            data: { name: name },
        });
    }

    /**
     * Remove a device.
     * @param {string} uuid device uuid
     * @example client.dashboard.remove("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
     * @returns {Promise<Object>}
     */
    remove(uuid) {
        return this.#request("DELETE", `device/${uuid}`);
    }

    /**
     * Hide a device.
     * @param {string} uuid device uuid
     * @example client.dashboard.hide("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
     * @returns {Promise<Object>}
     */
    hide(uuid) {
        return this.#request("PUT", "hide_device", { data: { uuid: uuid } });
    }

    /**
     * Show a device.
     * @param {string} uuid device uuid
     * @example client.dashboard.show("sdk-win-7744606f9f7b42d5b99d11e80f70886c");
     * @returns {Promise<Object>}
     */
    show(uuid) {
        return this.#request("PUT", "show_device", { data: { uuid: uuid } });
    }

    /**
     * Get user devices usage.
     * @param {string} step usage step: daily, weekly, monthly
     * @example client.dashboard.usage("daily");
     * @returns {Promise<Object>}
     */
    usage(step) {
        return this.#request("GET", "usage", { params: { step: step } });
    }

    /**
     * Get user devices status.
     * @param {Array} list devices list
     * @example client.dashboard.devicesStatus([ "sdk-win-7744606f9f7b42d5b99d11e80f70886c" ]);
     * @returns {Promise<Object>}
     */
    devicesStatus(list) {
        return this.#request("POST", "device_statuses", {
            data: { list: list },
        });
    }

    /**
     * Get user BrightVPN referrals.
     * @example client.dashboard.brightvpnReferrals();
     * @returns {Promise<Object>}
     */
    brightvpnReferrals() {
        return this.#request("GET", "referees_bvpn");
    }

    /**
     * Get speedtests.
     * @example client.dashboard.speedtest();
     * @returns {Promise<Object>}
     */
    speedtests() {
        return this.#request("GET", "speedtest");
    }

    /**
     * Delete your account.
     * CANNOT BE UNDONE
     * @param {string} reason deletion reason
     * @example client.dashboard.deleteAccount("some reason here");
     * @returns {Promise<Object>}
     */
    deleteAccount(reason) {
        return this.#request("DELETE", "user", {
            data: { reason: reason },
        });
    }

    /**
     * Disable your account.
     * @example client.dashboard.disableAccount();
     * @returns {Promise<Object>}
     */
    disableAccount() {
        return this.#request("PUT", "user/disable");
    }

    /**
     * Restore your account.
     * @example client.dashboard.restoreAccount();
     * @returns {Promise<Object>}
     */
    restoreAccount() {
        return this.#request("PUT", "restore_user");
    }
}

module.exports = { Dashboard };
