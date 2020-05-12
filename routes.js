let router = require('express').Router();

router.get('/',  (req, res) => {
    res.json({
        status: 'API Working',
        message: 'Routing is working'
    });
});

var userController = require('./userController');
var messageController = require("./messageController");

router.route('/user').post(userController.new);

router.route('/login').post(userController.login);

router.route('/message').get(messageController.index);

router.route('/writemessage').post(messageController.write);

router.route('/deletemessage:id').delete(messageController.delete);

router.route('/editmessage/:id').put(messageController.edit);

module.exports = router;
