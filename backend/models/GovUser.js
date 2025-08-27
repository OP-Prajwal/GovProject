const mongoose = require('mongoose');

const GovUser = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    govmail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    district: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    designation: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('GovUser',GovUser)