// Get Data Models
const Task = require('../models/Task');
const GeneralHandler = require("../exception/GeneralHandler");
const { successResponse, errorResponse } = GeneralHandler;

// Get all tasks for a project
exports.getTasks = async (req, res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const projects = await Task.find({}).where('projectId').equals(id);
        return successResponse(res, {
            status: 'success',
            message: "PROJECT_TASKS_FETCHED_SUCCESSFULLY",
            projects
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Get single task by ID
exports.getSingleTask = async(req, res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const task = await Task.findById(id)
        return successResponse(res, {
            status: 'success',
            message: "TASK_DETAILS_FETCHED_SUCCESSFULLY",
            user: task
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Add a new task
exports.createTask = async (req, res) => {
    try {
        const task = new Task(req)
        const newTask = await task.save();
        return successResponse(res, {
            status: 'success',
            message: "TASK_DETAILS_SAVED_SUCCESSFULLY",
            newUser: newTask
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Update an existing task
exports.updateTask = async (req, res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const updateData = req.params === undefined ? req : req.params
        const update = await Task.findByIdAndUpdate(id, updateData, { new: true })
        return successResponse(res, {
            status: 'success',
            message: "TASK_DETAILS_UPDATED_SUCCESSFULLY",
            update
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Delete a Task
exports.deleteTask = async (req,res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        await Task.findByIdAndRemove(id)
        return successResponse(res, {
            status: 'success',
            message: "TASK_DETAILS_DELETED_SUCCESSFULLY"
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}
