
var userObject = require('./../models/user.js');

exports.create = function (req, res) {
    console.log("req. body :", req.body)
    let newUser = new userObject({
        name: req.body.name,
        email: req.body.email
    });

    newUser.save((err, result)=>{
        if(err){
            res.json({'message': 'Fail to add'});
        }else{
            res.json({'message': 'Added successfully.'});
        }
    })
};

exports.users = function (req, res) {
    res.send("it is absolutely UPDATE");
};

exports.delete = function (req, res) {
    res.send("it is absolutely DELETE");
};