var mongoose = require('mongoose');

var SolicitudSc = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now },
    proposito: String,
    localizacion: String,
    observacion: String,
    encargado: String,
    expediente: String,
    nombre: String,
    cedula: String,
    correo: String,
    apellido: String,
    telefono: String,
  });

  module.exports = mongoose.model('Solicitud', SolicitudSc);