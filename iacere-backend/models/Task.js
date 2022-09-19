const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    createdBy: { type: String, require: true },
    taskStatus: { type: String, require: true },
    projectId: { type: String, require: true }
},{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

module.exports = mongoose.model('Task', taskSchema)
