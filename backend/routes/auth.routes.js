const express = require('express');
let router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

router.route('/')
.post((req, res, next) => {
  console.log(req.body);
    User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        console.log("1");
        return res.status(500).json({
        title: 'server error',
        error: err
      })}
      if (!user) {
        console.log("2");
        return res.status(401).json({
          title: 'user not found',
          error: 'invalid credentials'
        })
      }
      //incorrect password
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        console.log("3");
        return res.status(401).json({
          tite: 'login failed',
          error: 'invalid credentials'
        })
      }
      //IF ALL IS GOOD create a token and send to frontend
      let token = jwt.sign({ userId: user._id}, 'secretkey');
      console.log("sucesso");
      return res.status(200).json({
        title: 'login sucess',
        ok: true,
        token: token,
        profile: user
      })
    })
  })
  

module.exports = router;