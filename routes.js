let router = require('express').Router();

router.get('/',  (req, res) => {
    res.json({
        status: 'API Working',
        message: 'Routing is working'
    });
});

var userController = require('./userController');

router.route('/user').post(userController.new);

module.exports = router;
