var express = require('express');
var router = express.Router();
var signup = require('./../controllers/signup.js');

router.post('/signup', signup.create); 
router.get('/users', signup.users); 
router.delete('/users/:id', signup.delete); 

module.exports = router;