const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    name: String,
    birth_date: Date,
    
        username: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            unique: true
        },
        password: String,
    registration_date: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    },

});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.user, userSchema);