const express = require('express');
let router = express.Router();
const Noticia = require('../models/noticia.model');
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
/*req.newData.username = req.user.username;

MyModel.findOneAndUpdate(query, req.newData, {upsert: true}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return res.send('Succesfully saved.');
});
  console.log(req.body.state.noticia._id)
  const editNoticia = new Noticia({
    _id: req.body.state.noticia._id
  })
   editNoticia.updateOne({
    titulo: req.body.state.noticia.titulo,
    group: req.body.state.noticia.grupo,
    corpo: req.body.state.noticia.corpo,
    description: req.body.state.noticia.description
  })*/
})

module.exports = router;
