const express = require('express');
let router = express.Router();
const UserController = require('../controllers/user.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const CONFIG = require("../config/config");
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
//const AuthController = require("../controllers/auth.controller");


router.route('/:nif')
 .get([param("nif").isNumeric()], UserController.getOne);

router.route('/')
.post((req, res, next) => {
    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      birth_date: req.body.birth_date,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10)
    })
    newUser.save(err => {
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

  router.route('/user')
  .get((req, res, next) => {
    let token = req.headers.token; //token
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) return res.status(401).json({
        title: 'unauthorized'
      })
      //token is valid
      User.findOne({ _id: decoded.userId }, (err, user) => {
        if (err) return console.log(err)
        return res.status(200).json({
          title: 'user grabbed',
          user: {
            username: user.username,
            email: user.email,
            name: user.name
          }
        })
      })
  
    })
  })


module.exports = router;