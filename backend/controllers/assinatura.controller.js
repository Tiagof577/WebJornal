const Assinatura = require('../models/assinatura.module');
const {
    validationResult
} = require('express-validator');
const NoticiaMessages = require("../messages/noticia.messages");

exports.get = (req, res) => {

    Assinatura.find(req.query).exec((error, assinatura) => {
        if (error) throw error;

        let message = NoticiaMessages.success.s2;

        if (assinatura.length < 0)
            message = NoticiaMessages.success.s5;

        message.body = assinatura;
        return res.status(message.http).send(message);
    });

}

exports.create = (req, res) => {
    console.log(req.body);
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    new Noticia({
        titulo: req.body.titulo,
        group: req.body.group,
        description: req.body.description,
        corpo: req.body.corpo,
    }).save((error, noticia) => {
        if (error) throw error;
        let message = NoticiaMessages.success.s0;
        message.body = noticia;
        return res.header("location", "/noticias/" + noticia._id).status(message.http).send(message);
    });
}
exports.getOne = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Assinatura.findOne({
        nif: req.params.nif
    }).exec((error, assinatura) => {
        if (error) throw error;
        if (!assinatura) return false;
        let message = NoticiaMessages.success.s2;
        message.body = assinatura;
        return res.status(message.http).send(message);
    });

}
/*
exports.update = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Noticia.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: req.body
    }, {
        new: true
    }, (error, noticia) => {
        if (error) throw error;
        if (!noticia) return res.status(NoticiaMessages.error.e0.http).send(NoticiaMessages.error.e0);

        let message = NoticiaMessages.success.s1;
        message.body = noticia;
        return res.status(message.http).send(message);

    });
}

exports.delete = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Noticia.deleteOne({
        _id: req.params.id
    }, (error, result) => {
        if (error) throw error;
        if (result.deletedCount <= 0) return res.status(NoticiaMessages.error.e0.http).send(NoticiaMessages.error.e0);
        return res.status(NoticiaMessages.success.s3.http).send(NoticiaMessages.success.s3);

    });
}


exports.activate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Noticia.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: true
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(NoticiaMessages.error.e0.http).send(NoticiaMessages.error.e0);
        return res.status(NoticiaMessages.success.s6.http).send(NoticiaMessages.success.s6);

    });
}

exports.deactivate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Noticia.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: false
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(NoticiaMessages.error.e0.http).send(NoticiaMessages.error.e0);
        return res.status(NoticiaMessages.success.s4.http).send(NoticiaMessages.success.s4);

    });
}
*/