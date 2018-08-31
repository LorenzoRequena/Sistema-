var express = require('express');
var router = express.Router();
var Respaldo = require('../models/Respaldo');


router.post('/', function(req, res ,next){
    console.log(JSON.stringify(req.body),"esta funcionando!!!")
    var saveExpediente = req.body;
    delete saveExpediente._id;
    delete saveExpediente.created;
    delete saveExpediente.modified;
    console.log(saveExpediente, "!!!!!")
    Respaldo.create(saveExpediente , function(err, post){
        console.log(post, "Funcionaaa!!!!!")
        if(err) return next(err);
        res.json(post)
    });
});

router.get('/expediente/:expediente', function(req, res , next){
    Respaldo.find({expediente:req.params.expediente}, function(err, expediente){
        if(err) return next(err);
        res.json(expediente);
    });
});

module.exports = router;