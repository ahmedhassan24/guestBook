var mongoose = require('mongoose');

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



var user = module.exports = mongoose.model('user', userSchema);
// module.exports.get = function (callback, limit) {
//     user.find(callback).limit(limit);
// }


