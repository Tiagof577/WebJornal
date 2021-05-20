const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const funcionarioSchema = new Schema ({
    id_user: String,
    roles: {
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
    },
})
module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.funcionario, funcionarioSchema);