var mongoose = require('mongoose');

var SolicitantesSc = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now },
    nombre: String,
    cedula: String,
    correo: String,
    apellido: String,
    telefono: String,
  });
  module.exports = mongoose.model('Solicitantes',SolicitantesSc);