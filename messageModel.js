var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required : true
    }
});

var Message = module.exports = mongoose.model('message',messageSchema);

module.exports.get = function (callback, limit) {
    Message.find(callback).limit(limit);
}