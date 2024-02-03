const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, {versionKey: false})

const User = mongoose.model("user", userSchema)

module.exports = User