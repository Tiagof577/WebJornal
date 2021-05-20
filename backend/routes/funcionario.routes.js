const express = require('express');
let router = express.Router();
const FuncionarioController = require('../controllers/funcionario.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const CONFIG = require("../config/config");
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

router.route('/')
    .get(FuncionarioController.get)

router.route('/add')
.post((req, res, next) => {
    
   let i = 0;
    var escritor = false;
    var recursos_humanos = false
    var funcionario = false
    while(i<3){
      if(req.body.permission[i]==='Escritor'){var escritor = true}
      if(req.body.permission[i]==='Recursos humanos'){var recursos_humanos = true}
      if(req.body.permission[i]==='funcionario'){var funcionario = true}
      i++;
    }
    const filter = {'_id': req.body._id};
    const update = {
        funcionario:{
            escritor: escritor,
            humanos: recursos_humanos,
            funcionario: funcionario,
            admin: req.body.admin
        }
      };
       User.findOneAndUpdate(filter, update, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
  })



module.exports = router;