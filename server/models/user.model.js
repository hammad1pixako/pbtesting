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
    profileImage: {
        type: String
    },
    coverImage: {
        type: String
    },
    userRole: {
        type: String,
        required: true,
        enum: ["User", "Admin"],
        default: "User"
    },
    token: {
        type: String,
    },
    tokenExpiry: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max:64
    },
},{timestamps: true})

module.exports = mongoose.model("User", userSchema)