User = require('./userModel')

exports.new = (req,res) => {
    if(req.body.name && req.body.gender && req.body.email && req.body.phone && req.body.password)
    var user = new User();
    user.name = req.body.name;
    user.gender = req.body.gender;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.password = req.body.password;
    user.save(function (err) {
        // if (err)
        //     res.json(err);
    res.json({
                message: 'New user created!',
                data: user
            });
        });
};
