'use strict';

var mongoose = require('mongoose');

var FoodsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  food_type: {
    type: String,
  },
  price: {
    type: Number,
  },
  allergic: {
    type: Number,
  },
  calories: {
    type: Number,
  },
  preference: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  halal_status: {
    type: String,
  },
  total_ordered: {
    type: Number,
  },
  added_by: {
    type: String,
  },
  session: {
    type: String,
  }


});

const Food = module.exports = mongoose.model('Foods', FoodsSchema);
