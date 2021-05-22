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
    nif: {
        type: Number,
        unique: true
    },
    assinatura:{
        id_assinatura: String
    },
    funcionario: {
        escritor: {
            type: Boolean,
            default: false
        },
        humanos: {
            type: Boolean,
            default: false
        },
        funcionario: {
            type: Boolean,
            default: false
        },
        admin: {
            type: Boolean,
            default: false
        },
    }

});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.user, userSchema);