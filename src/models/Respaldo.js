var mongoose = require('mongoose');

var RespaldoSc= new mongoose.Schema({
    created: { type: Date, default: Date.now },
    proposito: String,
    localizacion: String,
    cedula: String,
    observacion: String,
    encargado: Object,
    expediente: String,
    nombre:String,
    apellido:String
    
});

module.exports = mongoose.model('Respaldo', RespaldoSc);