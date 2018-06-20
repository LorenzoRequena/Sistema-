var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
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

UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

UserSchema.statics.authenticate = function (username, password, callback) {
  console.log("esta aqui");
  console.log(username,password)
  User.findOne({ username: username })
    .exec(function (err, user) {
      if (err) {
        console.log(JSON.stringify(err))
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          console.log(user)
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}
console.log(UserSchema.statics);
var User = mongoose.model('User', UserSchema);
module.exports = User;
