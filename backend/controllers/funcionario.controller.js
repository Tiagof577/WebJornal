const User = require('../models/user.model');
const {
    validationResult
} = require('express-validator');
const UserMessages = require("../messages/user.messages");

exports.getOne = (req, res) => {
    console.log("hello")
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    User.findOne({
        _id: req.params.id
    }, (error, user) => {
        console.log(user)
        if (error) throw error;
        if (!user) return res.status(UserMessages.error.e1.http).send(UserMessages.error.e1);
        let message = UserMessages.success.s2;
        message.body = user;
        return res.status(message.http).send(message);
    });

}

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