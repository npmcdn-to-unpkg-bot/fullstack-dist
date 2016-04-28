'use strict';

//import mongoose from 'mongoose';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProductSchema = new mongoose.Schema({
  Title: String,
  Author: String,
  Description: String,
  Category: String,
  Image: String,
  Price: Number,
  Stock: Number,
  Status: String,
  imageUrl: String
});

exports.default = mongoose.model('Product', ProductSchema);
//# sourceMappingURL=product.model.js.map
