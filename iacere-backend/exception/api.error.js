const StatusCodes = require('http-status-codes');
const ModuleError = require("./module.error");

/**
 * A custom error class for handling Api errors.
 *
 * @class ApiError
 */
module.exports =  class ApiError extends ModuleError {
  /**
    * The ApiError Constructor.
    * @param {Object} options - A configuration object for errors.
    * @param {String|undefined} options.message - The error message if any.
    * @param {Number|undefined} options.code - The status code of error if any.
    * @param {Array|undefined} options.errors - Additional error details if any.
    * @constructor ApiError
    */
  constructor(options = {}) {
    super(options);
    this.name = this.constructor.name;
    this.message = options.message || "INTERNAL_SERVER_ERROR";
    this.errors = options.errors || {};
    this.code = options.code || StatusCodes.INTERNAL_SERVER_ERROR;
  }
}
