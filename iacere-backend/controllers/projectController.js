// Get Data Models
const Project = require('../models/Project');
const GeneralHandler = require("../exception/GeneralHandler");
const { successResponse, errorResponse } = GeneralHandler;

// Get all projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        return successResponse(res, {
            status: 'success',
            message: "PROJECTS_FETCHED_SUCCESSFULLY",
            projects
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Get single project by ID
exports.getSingleProject = async(req, res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const project = await Project.findById(id)
        return successResponse(res, {
            status: 'success',
            message: "PROJECT_DETAILS_FETCHED_SUCCESSFULLY",
            user: project
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Add a new project
exports.createProject = async (req, res) => {
    try {
        const project = new Project(req)
        const newProject = await project.save();
        return successResponse(res, {
            status: 'success',
            message: "PROJECT_DETAILS_SAVED_SUCCESSFULLY",
            newUser: newProject
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Update an existing project
exports.updateProject = async (req, res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const updateData = req.params === undefined ? req : req.params
        const update = await Project.findByIdAndUpdate(id, updateData, { new: true })
        return successResponse(res, {
            status: 'success',
            message: "PROJECT_DETAILS_UPDATED_SUCCESSFULLY",
            update
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Delete a project
exports.deleteProject = async (req,res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        await Project.findByIdAndRemove(id)
        return successResponse(res, {
            status: 'success',
            message: "PROJECT_DETAILS_DELETED_SUCCESSFULLY"
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}
