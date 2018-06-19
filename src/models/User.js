var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  rol: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String
  }
});
var User = mongoose.model('User', UserSchema);
module.exports = User;
