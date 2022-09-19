const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: { type: String, require: true },
    projectType: { type: String, require: true },
},{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

module.exports = mongoose.model('Project', projectSchema)
