const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    name: { type: String },
    email: { type: String },
    dob: { type: String },
    idNumber: { type: String },
    idType: { type: String },
    idIssuer: { type: String },
    idIssueDate: {type: String },
    idExpiryDate: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    occupation: { type: String }
});

module.exports = mongoose.model('Customer', customerSchema);