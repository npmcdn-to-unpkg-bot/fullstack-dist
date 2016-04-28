/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/products              ->  index
 * POST    /api/products              ->  create
 * GET     /api/products/:id          ->  show
 * PUT     /api/products/:id          ->  update
 * DELETE  /api/products/:id          ->  destroy
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.index = index;
exports.show = show;
exports.create = create;
exports.upload = upload;
exports.update = update;
exports.destroy = destroy;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _product = require('./product.model');

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');
var logger = require('../../components/logger');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function (entity) {
    var updated = _lodash2.default.merge(entity, updates);
    return updated.save().then(function (updated) {
      return updated;
    });
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.remove().then(function () {
        res.status(204).end();
      });
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}
/*
function saveFile(res, file) {
  return function(entity){
    var newPath = '/assets/uploads/' + path.basename(file.path);
    entity.imageUrl = newPath;
    logger.debug('entity : '+JSON.stringify(entity));
    return entity.saveAsync().spread(function(updated, numberAffected) {
      logger.debug('updated : '+JSON.stringify(updated));
      logger.debug('numberAffected : '+numberAffected);
      return updated;
    });
  }
}
*/
function saveFile(res, file) {
  logger.debug("Product.controller - saveFile function");
  return function (entity) {
    var newPath = '/assets/uploads/product/' + path.basename(file.path);
    entity.imageUrl = newPath;
    logger.debug("Product.controller - entity: " + (0, _stringify2.default)(entity));
    logger.debug("Product.controller - imageUrl: " + entity.imageUrl);

    return entity.save().then(function (updated) {
      return updated;
    });
  };
}

// Gets a list of Products
function index(req, res) {
  return _product2.default.find().exec().then(respondWithResult(res)).catch(handleError(res));
}

// Gets a single Product from the DB
function show(req, res) {
  return _product2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(respondWithResult(res)).catch(handleError(res));
}

// Creates a new Product in the DB
function create(req, res) {
  return _product2.default.create(req.body).then(respondWithResult(res, 201)).catch(handleError(res));
}

// Uploads a new Product's image in the DB
function upload(req, res) {
  logger.debug("Product.controller - Upload function");
  var file = req.files.file;
  if (!file) {
    return handleError(res)('File not provided');
  }

  return _product2.default.findByIdAsync(req.params.id).then(handleEntityNotFound(res)).then(saveFile(res, file)).then(respondWithResult(res)).catch(handleError(res));
};

// Updates an existing Product in the DB
function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return _product2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res)).catch(handleError(res));
}

// Deletes a Product from the DB
function destroy(req, res) {
  return _product2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(removeEntity(res)).catch(handleError(res));
}
//# sourceMappingURL=product.controller.js.map
