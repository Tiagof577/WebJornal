const express = require('express');
let router = express.Router();
const NoticiaController = require('../controllers/noticia.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const CONFIG = require("../config/config");

router.route('/')
    .get( NoticiaController.get)
    .post( [body('titulo').isString(),
        body('group').isString(),
        body('description').isString(),
        body('corpo').isString(),
        sanitizeBody('description').whitelist(CONFIG.sanitize.alphabet + CONFIG.sanitize.numerical)
    ], NoticiaController.create);

router.route('/:id')
    .get([param("id").isMongoId()], NoticiaController.getOne);

module.exports = router;
