class BaseError extends Error {
    /**
     * Represents the base error.
     * @private
     * @param {string} type error type
     * @param {string} message error message
     */
    constructor(type, message) {
        super(message);

        /**
         * error type
         * @type {string}
         */
        this.type = type;
    }

    toJSON() {
        return {
            type: this.type,
            message: this.message,
        };
    }
}

class FatalError extends BaseError {
    /**
     * Represents a fatal error from the Client.
     * @extends BaseError
     * @param {string | error} error error object or message
     */
    constructor(error) {
        let errObject = typeof error == "string" ? null : error,
            message = errObject ? errObject.message : error;

        super("FatalError", message);

        if (errObject) this.stack = errObject.stack;
    }
}

class APIError extends BaseError {
    /**
     * Represents an error from the API.
     * @extends BaseError
     * @param {string | error} error error message
     * @param {object} response error response
     * @param {string} status status type of the request
     * @param {string} method method used for the request
     * @param {string} url url of the request to the endpoint
     */
    constructor(error, response, status, method, url) {
        let errObject = typeof error == "string" ? null : error,
            message = errObject ? errObject.message : error;

        super("APIError", message);

        /**
         * status type of the request
         * @type {string}
         */
        this.status = status;

        /**
         * method used for the request
         * @type {string}
         */
        this.method = method;

        /**
         * url of the request to the endpoint
         * @type {string}
         */
        this.url = url;

        if (response.data) {
            typeof response.data === "object" ? Object.assign(this, response.data) : (this.error = response.data);
        }
    }
}

class ParseError extends BaseError {
    /**
     * Represents a parsing error.
     * @class ParseError
     * @constructor
     * @param {String} message error message
     * @param {String} status status type of the request
     * @param {String} method method used for the request
     * @param {String} url url of the request to the endpoint
     */
    constructor(message, status, method, url) {
        super("ParseError", message);

        /**
         * status type of the request
         * @type {string}
         */
        this.status = status;

        /**
         * method used for the request
         * @type {string}
         */
        this.method = method;

        /**
         * url of the request to the endpoint
         * @type {string}
         */
        this.url = url;
    }
}

module.exports = { FatalError, APIError, ParseError };
