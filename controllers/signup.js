
var userObject = require('./../models/user.js');

var foodObject = require('./../models/food.js');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shikder0033@gmail.com',
        pass: 'heavenforbid55'
    }
});


exports.createNewUser = function (req, res) {
    let newUser = new userObject({
        first_name: req.body.FirstName,
        last_name: req.body.LastName,
        age: req.body.Age,
        email: req.body.Email
    });
    var password = Math.random().toString(36).slice(-8);
    newUser['password'] = password;

    newUser.save((err, result) => {
        if (err) {
            res.json({
                'code': 400,
                'message': 'Failed to sign up',
            });
        } else {
            var mailOptions = {
                from: 'foodhub@gmail.com',
                to: req.body.Email,
                subject: 'Foodhub - Signed up successful',
                html: '<p> Dear ' + req.body.FirstName + ',</p>' +
                    '<p> Your account has been created successfully. Please click <a href= "http://localhost:4200/login">here</a> here to continue.' +
                    '<p> Your password to access to the platforam is: ' + password +
                    '<p></p> <p></p>' +
                    '<p>Thank you,</p>' +
                    '<p>Foodhub Team</p>'
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log("email err", error);
                    res.json({
                        'code': 400,
                        'message': 'Failed to sign up',
                    });
                } else {
                    console.log('Email sent: ' + info.response);
                    return res.json({
                        'code': 200,
                        'message': 'Signed up successfully. Please check your email to access to the platfoarm.',
                    });
                }
            });
        }
    })
};


exports.login = function (req, res) {
    console.log("body :", req.body);
    if (req.body) {
        userObject.findOne({
            email: req.body.Email
        }, function (err, data) {
            if (err) {
                res.json({
                    'code': 400,
                    'message': "Something happend wrong. Please try again later."
                });
            } else {
                if (data) {
                    if (data.password == req.body.Password) {
                        res.json({
                            'code': 200,
                            'message': "Login successful",
                            'data': data
                        });
                    } else {
                        res.json({
                            'code': 400,
                            'message': "Password is incorrect.",
                            'data': data
                        });
                    }
                } else {
                    res.json({
                        'code': 400,
                        'message': "Email does not exist.",
                    });
                }
            }
        })
    }
};



exports.saveFood = function (req, res) {
    let newFood = new foodObject(
        {
            "name": "Spaghetti Chicken",
            "food_type": "Non-Vegetarian",
            "price": 25, "allergic": 1, "calories": 250,
            "preference": "Chicken",
            "ingredients": "Garlic, Minced Chicken, Celery, Onion, Tomato Pronto, Spaghetti, Bay leaves",
            "halal_status": "Halal", "total_ordered": 15, "added_by": "Nazrul", "session": "lunch"
        }
    );
    newFood.save((err, res) => {
        if (err) {
            res.json({
                'code': 400,
                'message': "Something happend wrong. Please try again later."
            });
        } else {
            return res.json({
                'code': 200,
                'message': 'Food added successfully',
            });
        }
    })
}


exports.filterFood = function (req, res) {
    if (req.body) {
        foodObject.find({
            preference: "Chicken",
            halal_status: "Halal",
            food_type: "Non-Vegetarian"
        }, function (err, data) {
            if (err) {
                res.json({
                    'code': 400,
                    'message': "Something happend wrong. Please try again later."
                });
            } else {
                return res.json({
                    'code': 200,
                    'data': data,
                    'message': 'searched food successfully',
                });
            }
        });
    }
}

exports.delete = function (req, res) {
    res.send("it is absolutely DELETE");
};
