const express = require('express');
let router = express.Router();
const Assinatura = require('../models/assinatura.module');
const AssinaturaController = require('../controllers/assinatura.controller');
const CONFIG = require("../config/config");
const {
  body,
  param,
  sanitizeBody
} = require('express-validator');

router.route('/:nif')
.get([param("nif").isNumeric()], AssinaturaController.getOne);

router.route('/')
    .get(AssinaturaController.get)

router.route('/add')
.post((req, res, next) => {
    console.log(req.body);
    
    const newAssinatura = new Assinatura({
      nome: req.body.nome,
      nif: req.body.nif,
      ano: req.body.anos,
    })
    newAssinatura.save(err => {
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
  console.log(req.body.state.assinatura)
  const anos = req.body.state.assinatura.ano+1
   const filter = {'nif': req.body.state.assinatura.nif};
   const update = {
    'ano': anos,
  };
   console.log(filter);
   console.log(update);
   Assinatura.findOneAndUpdate(filter, update, {upsert: true}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return res.send('Succesfully saved.');
});
})

module.exports = router;