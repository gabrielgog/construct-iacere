// Get Data Models
const User = require('../models/User');
const GeneralHandler = require("../exception/GeneralHandler");
const {StatusCodes} = require("http-status-codes");
const ApiError = require("../exception/api.error");
const { successResponse, errorResponse } = GeneralHandler;

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return successResponse(res, {
            status: 'success',
            message: "USERS_FETCHED_SUCCESSFULLY",
            users
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Get single user by ID
exports.getSingleUser = async(req, res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const user = await User.findById(id)
        return successResponse(res, {
            status: 'success',
            message: "USER_DETAILS_FETCHED_SUCCESSFULLY",
            user
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Add a new user
exports.createUser = async (req, res) => {
    try {
        const user = new User(req)
        const newUser = await user.save();
        return successResponse(res, {
            status: 'success',
            message: "USER_DETAILS_SAVED_SUCCESSFULLY",
            newUser
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Update an existing user
exports.updateUser = async (req, res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const updateData = req.params === undefined ? req : req.params
        const update = await User.findByIdAndUpdate(id, updateData, { new: true })
        return successResponse(res, {
            status: 'success',
            message: "USER_DETAILS_UPDATED_SUCCESSFULLY",
            update
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Delete a user
exports.deleteUser = async (req,res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        await User.findByIdAndRemove(id)
        return successResponse(res, {
            status: 'success',
            message: "USER_DETAILS_DELETED_SUCCESSFULLY"
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}
exports.loginUser = async (req, res) => {
    const { user, body: { password, data } } = req;
    try {
        user.checkPassword(password, async (err) => {
            if (err) {
                return errorResponse(
                    req,
                    res,
                    new ApiError({
                        code: StatusCodes.UNAUTHORIZED,
                        message: "INVALID_CREDENTIALS",
                    })
                );
            }
            return successResponse(res, {
                code: StatusCodes.OK,
                message: "LOGIN_USER_SUCCESSFULLY",
                data,
            });
        });
    } catch (error) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}
