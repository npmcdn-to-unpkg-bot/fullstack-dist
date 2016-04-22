'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var EcommerceController = function () {
    function EcommerceController($http, $scope, $state, $uibModal, $timeout) {
      _classCallCheck(this, EcommerceController);

      this.newProduct = {};

      this.$http = $http;
      this.$state = $state;
      this.$uibModal = $uibModal;
      this.$timeout = $timeout;
    }

    _createClass(EcommerceController, [{
      key: 'addProduct',
      value: function addProduct(form) {

        // if (this.newProduct) {
        console.log(this.newProduct.title);
        console.log(form);
        this.$http.post('/api/products', {
          Title: this.newProduct.title,
          Author: this.newProduct.author,
          Description: this.newProduct.description,
          Category: this.newProduct.category,
          Image: this.newProduct.image,
          Price: this.newProduct.price,
          Stock: this.newProduct.stock,
          Status: this.newProduct.status
        });
        this.newProduct = {};
        // }
      }

      // deleteThing(thing) {
      //   this.$http.delete('/api/product/' + product._id);
      // }

      /**
      * modalDemoCtrl - Controller used to run modal view
      * used in Basic form view
      */

    }, {
      key: 'DialogDemoCtrl',
      value: function DialogDemoCtrl($scope, $timeout, $dialog) {
        $timeout(function () {
          $dialog.dialog({}).open('views/common/modal_example.html');
        }, 3000);
      }
    }]);

    return EcommerceController;
  }();

  angular.module('meanonlineshopApp').controller('EcommerceController', EcommerceController);
})();
//# sourceMappingURL=ecommerce.controller.js.map
