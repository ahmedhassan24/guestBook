var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var userSchema = mongoose.Schema({
  
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    password: {
            type: String,
            required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', function encrypt(next) {
    const user = this;
    if (user.isModified('password') || user.isNew) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          return next(err);
        }
        return bcrypt.hash(user.password, salt, (errBcrypt, hash) => {
          if (errBcrypt) {
            return next(errBcrypt);
          }
          user.password = hash;
          return next();
        });
      });
    } else {
      next();
    }
  });
  userSchema.methods.comparePassword = function compare(pw) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(pw, this.password, (err, isMatch) => {
        if (err) {
          reject(err);
        }
        resolve(isMatch);
      });
    });
  };
  


var user = module.exports = mongoose.model('user', userSchema);
// module.exports.get = function (callback, limit) {
//     user.find(callback).limit(limit);
// }


