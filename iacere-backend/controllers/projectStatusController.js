// Get Data Models
const ProjectStatus = require('../models/ProjectStatus');
const GeneralHandler = require("../exception/GeneralHandler");
const { successResponse, errorResponse } = GeneralHandler;

// Get all projectStatuses
exports.getProjectsStatuses = async (req, res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const projectsStatuses = await ProjectStatus.find({}).where("project").equals(id);
        return successResponse(res, {
            status: 'success',
            message: "PROJECTS_STATUSES_FETCHED_SUCCESSFULLY",
            projectsStatuses
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Get single projectStatus by ID
exports.getSingleProjectStatus = async(req, res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const projectStatus = await ProjectStatus.findById(id)
        return successResponse(res, {
            status: 'success',
            message: "PROJECT_STATUS_FETCHED_SUCCESSFULLY",
            user: projectStatus
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Add a new projectStatus
exports.createProjectStatus = async (req, res) => {
    try {
        const projectStatus = new ProjectStatus(req)
        const newProjectStatus = await projectStatus.save();
        return successResponse(res, {
            status: 'success',
            message: "PROJECT_STATUS_SAVED_SUCCESSFULLY",
            newUser: newProjectStatus
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Update an existing projectStatus
exports.updateProjectStatus = async (req, res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        const updateData = req.params === undefined ? req : req.params
        const update = await ProjectStatus.findByIdAndUpdate(id, updateData, { new: true })
        return successResponse(res, {
            status: 'success',
            message: "PROJECT_STATUS_UPDATED_SUCCESSFULLY",
            update
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}

// Delete a projectStatus
exports.deleteProjectStatus = async (req,res) => {
    try {
        const id = req.params === undefined ? req.id : req.params.id
        await ProjectStatus.findByIdAndRemove(id)
        return successResponse(res, {
            status: 'success',
            message: "PROJECT_STATUS_DELETED_SUCCESSFULLY"
        });
    } catch (err) {
        return errorResponse(req, res, { message: "INTERNAL_SERVER_ERROR" });
    }
}
