'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductSchema = new _mongoose2.default.Schema({
  Title: String,
  Author: String,
  Description: String,
  Category: String,
  Image: String,
  Price: Number,
  Stock: Number,
  Status: String
});

exports.default = _mongoose2.default.model('Product', ProductSchema);
//# sourceMappingURL=product.model.js.map
