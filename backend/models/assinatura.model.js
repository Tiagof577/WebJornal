const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const assinaturaSchema = new Schema ({
    id_user: String,
    data_assinatura: Date,
    ultimo_ano: Number,
})
module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.assinatura, assinaturaSchema);
