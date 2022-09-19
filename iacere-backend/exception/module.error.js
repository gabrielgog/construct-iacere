const StatusCodes = require('http-status-codes');

/**
 * A custom error class for handling module related errors.
 *
 * @class ModuleError
 */
module.exports =  class ModuleError extends Error {
  /**
      * The ModuleError Constructor.
      * @param {Object} options - A configuration object for errors.
      * @param {String|undefined} options.message - The error message if any.
      * @param {Array|undefined} options.errors - Additional error details if any.
   * @param {String|undefined} options.status - The status of operation if any.
   * @param {String|undefined} options.code - The status code of operation if any.
      * @constructor ModuleError
      */
  constructor(options = {}) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = options.message || "MODULE_ERROR";
    this.status = options.status || "MODULE_ERROR_STATUS";
    this.code = options.code || StatusCodes.INTERNAL_SERVER_ERROR;
    if (options.errors) this.errors = options.errors;
  }
}
