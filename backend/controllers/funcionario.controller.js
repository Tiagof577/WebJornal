const User = require('../models/user.model');
const {
    validationResult
} = require('express-validator');
const NoticiaMessages = require("../messages/noticia.messages");

exports.get = (req, res) => {

    User.find({type: 'admin'}).exec((error, funcionarios) => {
        if (error) throw error;

        let message = NoticiaMessages.success.s2;

        if (funcionarios.length < 0)
            message = NoticiaMessages.success.s5;
        console.log(funcionarios);
        message.body = funcionarios;
        return res.status(message.http).send(message);
    });

}