var express = require('express');
var router = express.Router();
var Solicitantes = require('../models/Personal');

router.post('/', function(req, res, next) {
    console.log(JSON.stringify(req.body), "estoy aqui")
    Solicitantes.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
module.exports = router;