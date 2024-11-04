const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max:64
    },
    userRole: {
        type: String,
        required: true,
        enum: ["User", "Admin"],
        default: "User"
    }
},{timestamps: true})

module.exports = mongoose.model("User", userSchema)