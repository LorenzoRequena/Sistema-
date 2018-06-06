var mongoose = require('mongoose');

var SolicitanteSc = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now },
    nombre: String,
    cedula: String,
    correo: String,
    apellido: String,
    type: String,
    telefono: String,
  });

  module.exports = mongoose.model('Solicitante', SolicitanteSc);