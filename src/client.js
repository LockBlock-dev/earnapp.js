const axios = require("axios").default;
const errors = require("./errors");
const pkg = require("../package.json");
const { Dashboard } = require("./dashboard.js");
const { PiggyBox } = require("./piggybox.js");

class Client {
    /**
     * The EarnApp client
     * @example const client = new Client();
     */
    constructor() {
        /**
         * The client API URL
         * @type {string}
         */
        this.CLIENT_API_URL = "https://client.earnapp.com";

        /**
         * The EarnApp dashboard client
         * @type {Dashboard}
         */
        this.dashboard = new Dashboard();

        /**
         * The PiggyBox dashboard client
         * @type {PiggyBox}
         */
        this.piggybox = new PiggyBox();
    }

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
            url: `${this.CLIENT_API_URL}/${path}`,
            headers: {
                "User-Agent": `earnapp.js ${pkg.version} (https://github.com/LockBlock-dev/earnapp.js)`,
                "Content-Type": "application/json",
                "Accept-Encoding": "UTF8",
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
     * Register a new device on EarnApp database.
     * Use client.linkDevice to link it to your account.
     * @param {string} uuid device uuid
     * @param {string} version app version
     * @param {string} arch device arch: arm, arm64, x64, android
     * @param {string} appid app id: node_earnapp.com, win_earnapp.com,	com.eapp, mac_earnapp.com
     * @example client.registerDevice("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "1.295.874", "x64", "win_earnapp.com");
     * @example client.registerDevice("sdk-node-6fd29568de6f481887ccf0ddea29dcca", "1.293.301", "x64", "node_earnapp.com");
     * @returns {Promise<Object>}
     */
    registerDevice(uuid, version, arch, appid) {
        return this.#request("POST", "install_device", {
            data: {
                uuid: uuid,
                version: version,
                arch: arch || process.arch,
                appid: appid,
            },
        });
    }

    /**
     * Get a device stats on EarnApp database.
     * @param {string} uuid device uuid
     * @param {string} version app version
     * @param {string} arch device arch: arm, arm64, x64, android
     * @param {string} appid app id: node_earnapp.com, win_earnapp.com,	com.eapp, mac_com.earnapp
     * @example client.deviceStats("sdk-win-7744606f9f7b42d5b99d11e80f70886c", "1.295.874", "x64", "win_earnapp.com");
     * @example client.deviceStats("sdk-node-6fd29568de6f481887ccf0ddea29dcca", "1.293.301", "x64", "node_earnapp.com");
     * @returns {Promise<Object>}
     */
    deviceStats(uuid, version, arch, appid) {
        return this.#request("POST", "app_config_win.json", {
            params: {
                uuid: uuid,
                version: version,
                arch: arch || process.arch,
                appid: appid,
            },
        });
    }
}

module.exports = { Client };
