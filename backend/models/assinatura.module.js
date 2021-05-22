const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const assinaturaSchema = new Schema ({
    id_ass: String,
    data_assinatura: Date,
    nif: Number,
    ano: Number,
})
module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.assinatura, assinaturaSchema);