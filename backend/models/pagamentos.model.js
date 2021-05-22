const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const pagamentosSchema = new Schema ({
    id_assinatura: String,
    data_pagamento: Date,
    ano: Number,
    metodo: String,
})
module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.pagamento, pagamentosSchema);
