'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    }
});

const User = module.exports = mongoose.model('User', UserSchema);
