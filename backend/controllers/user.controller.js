const User = require('../models/user.model');
const {
    validationResult
} = require('express-validator');
const UserMessages = require("../messages/user.messages");
const JWT = require("jsonwebtoken");
const CONFIG = require("../config/config");

exports.get = (req, res) => {

    /*User.find({nif: req.body.nif}, (error, users) => {

        console.log(users);
        if (error) throw error;

        let message = UserMessages.success.s2;

        if (users.length < 0)
            message = UserMessages.success.s5;

        message.body = users;
        return res.status(message.http).send(message);
    });*/

}

exports.getOne = (req, res) => {
    
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    User.findOne({
        nif: req.params.nif
    }, (error, user) => {
        console.log(user)
        if (error) throw error;
        if (!user) return res.status(UserMessages.error.e1.http).send(UserMessages.error.e1);
        let message = UserMessages.success.s2;
        message.body = user;
        return res.status(message.http).send(message);
    });

}

exports.create = (req, res) => {
    const errors = validationResult(req).array();
    console.log(req.body);
    

}

exports.update = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    User.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: req.body
    }, {
        new: true
    }, (error, user) => {
        if (error) throw error;
        if (!user) return res.status(UserMessages.error.e1.http).send(UserMessages.error.e1);

        let message = UserMessages.success.s1;
        message.body = user;
        return res.status(message.http).send(message);

    });

}

exports.delete = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    User.deleteOne({
        _id: req.params.id
    }, (error, result) => {
        if (error) throw error;
        if (result.deletedCount <= 0) return res.status(UserMessages.error.e1.http).send(UserMessages.error.e1);

    });

}

exports.activate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    User.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: true
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(UserMessages.error.e0.http).send(UserMessages.error.e0);
        return res.status(UserMessages.success.s6.http).send(UserMessages.success.s6);

    });
}

exports.deactivate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    User.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: false
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(UserMessages.error.e0.http).send(UserMessages.error.e0);
        return res.status(UserMessages.success.s4.http).send(UserMessages.success.s4);

    });
}