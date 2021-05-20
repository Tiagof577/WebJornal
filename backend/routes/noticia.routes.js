const express = require('express');
let router = express.Router();
const Noticia = require('../models/noticia.model');
const NoticiaController = require('../controllers/noticia.controller');
const CONFIG = require("../config/config");
const {
  body,
  param,
  sanitizeBody
} = require('express-validator');

router.route('/:id')
.get([param("id").isMongoId()], NoticiaController.getOne);

router.route('/')
    .get(NoticiaController.get)

router.route('/add')
.post((req, res, next) => {
    console.log(req.body.noticia);
    const newNoticia = new Noticia({
      titulo: req.body.noticia.titulo,
      group: req.body.noticia.grupo,
      corpo: req.body.noticia.corpo,
      description: req.body.noticia.description
    })
    newNoticia.save(err => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          title: 'error',
          error: 'email in use'
        })
      }
      console.log("sucesso")
      return res.status(200).json({
        title: 'signup success',
        ok: true,
        body: {
          name: req.body.username
        }
      })
    })
  })

router.route('/update')
.post((req, res, next) => {
   const filter = {'_id': req.body.state.noticia._id};
   const update = {
    'titulo': req.body.state.noticia.titulo,
    'group': req.body.state.noticia.group,
    'corpo': req.body.state.noticia.corpo,
    'description': req.body.state.noticia.description
  };
   console.log(filter);
   console.log(update);
   Noticia.findOneAndUpdate(filter, update, {upsert: true}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return res.send('Succesfully saved.');
});
})

module.exports = router;
