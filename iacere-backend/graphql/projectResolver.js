const Project = require('../models/Project');
const bcrypt = require('bcrypt');

module.exports = {
    createProject: async function ({projectInput}) {
        const project = new Project({
            name: projectInput.name,
            projectType: projectInput.projectType,
        });
        const createdProject = await project.save();
        return {
            ...createdProject._doc,
            id: createdProject._id.toString(),
        };
    },
    projects: async function () {
        const projects = await Project.find({});
        return {
            projects: projects.map((q) => {
                return {
                    ...q._doc,
                    id: q._id.toString(),
                };
            })
        };
    },
    updateProject: async function ({id, projectInput}) {
        const project = await Project.findById(id);
        if (!project) {
            throw new Error('Project Not found!');
        }

        project.name = projectInput.name;
        project.projectType = projectInput.projectType;
        const updatedProject = await project.save();
        return {
            ...updatedProject._doc,
            id: updatedProject._id.toString(),
        };
    },

    deleteProject: async function ({id}) {
        const project = await Project.findById(id);
        if (!project) {
            throw new Error('Project Not found!');
        }
        await Project.findByIdAndRemove(id);
        return "PROJECT_DETAILS_DELETED_SUCCESSFULLY"
    },

    findProject: async function ({id}) {
        const project = await Project.findById(id);
        if (!project) {
            throw new Error('Project Not found!');
        }
        return {
            ...project._doc,
            id: project._id.toString(),
        };
    },
}
