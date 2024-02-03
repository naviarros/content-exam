const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    position: {
        type: String
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false})

const Employee = mongoose.model("employee", employeeSchema)

module.exports = Employee