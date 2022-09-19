const { StatusCodes } = require('http-status-codes');
const logger = require("./Logger");
const genericError = require("./generic.error");
const { serverError } = genericError

class GeneralHandler{

    static successResponse (res, options) {
        const code = options && options.code
        if (code) delete options.code
        return res.status(code || StatusCodes.OK)
            .json({
                status: "SUCCESS",
                ...options
            })
    }

    static errorResponse (req, res, options) {

        const aggregateError = { ...serverError, ...options }
        GeneralHandler.apiErrLogMessage(aggregateError, req)
        return res.status(aggregateError.code || StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                status: "FAIL",
                message: aggregateError.message,
                errors: aggregateError.errors,
            })
    }

    static apiErrLogMessage (error, req) {
        const {
            name,
            code,
            message
        } = error
        const {
            originalUrl,
            method,
            ip
        } = req
        logger.error(
            `${name} - ${code} - ${message} - ${originalUrl} - ${method} - ${ip}`
        )
    }
}
