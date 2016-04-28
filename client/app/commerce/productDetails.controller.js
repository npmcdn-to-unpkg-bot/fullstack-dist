'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductDetailsController = function ProductDetailsController(Product, $stateParams) {
  _classCallCheck(this, ProductDetailsController);

  // Use the Product $resource to fetch detail products
  this.id = $stateParams.id;
  this.product = Product.get({ id: this.id });
};

angular.module('meanonlineshopApp').controller('ProductDetailsController', ProductDetailsController);
//# sourceMappingURL=productDetails.controller.js.map
