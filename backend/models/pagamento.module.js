const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const pagamentoSchema = new Schema ({
    id_ass: String,
    data_pagamento: Date,
    ano: Number,
})
module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.pagamento, pagamentoSchema);