const mongoose = require('mongoose')

const projectStatusSchema = new mongoose.Schema({
    name: { type: String, require: true },
    project: { type: String, require: true }
},{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

module.exports = mongoose.model('ProjectStatus', projectStatusSchema)
