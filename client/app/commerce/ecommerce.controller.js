'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var EcommerceController = function () {
    function EcommerceController($http, $scope, $state) {
      _classCallCheck(this, EcommerceController);

      this.newProduct = {};

      this.$http = $http;
      this.$state = $state;
      this.$scope = $scope;
    }

    _createClass(EcommerceController, [{
      key: 'addProduct',
      value: function addProduct(form) {
        /*var formData = new FormData();
                     formData.append('image', this.image);
                     console.log(this.image);
                     this.$http.post('/upload', formData, {
                         headers: { 'Content-Type': false },
                         transformRequest: angular.identity
                     }).success(function(result) {
                         $scope.uploadedImgSrc = result.src;
                         $scope.sizeInBytes = result.size;
                     });*/

        // this.$http.post('/upload', {});
        // if (this.newProduct) {
        //console.log(imageupload);
        this.$http.post('/api/products', {
          Title: this.newProduct.title,
          Author: this.newProduct.author,
          Description: this.newProduct.description,
          Category: this.newProduct.category,
          Image: this.newProduct.image,
          Price: this.newProduct.price,
          Stock: this.newProduct.stock,
          Status: this.newProduct.status
        }).success(function (result) {
          console.log(result);
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
    }, {
      key: 'uploadHander',
      value: function uploadHander($scope, Upload, $timeout) {
        return function (file) {
          if (file && !file.$error) {
            $scope.file = file;
            file.upload = Upload.upload({
              url: '/api/products/' + $scope.product._id + '/upload',
              file: file
            });

            file.upload.then(function (response) {
              $timeout(function () {
                file.result = response.data;
              });
            }, function (response) {
              if (response.status > 0) {
                console.log(response.status + ': ' + response.data);
                errorHandler($scope)(response.status + ': ' + response.data);
              }
            });

            file.upload.progress(function (evt) {
              file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
          }
        };
      }
    }]);

    return EcommerceController;
  }();

  angular.module('meanonlineshopApp').controller('EcommerceController', EcommerceController);
})();

/*angular.module('meanonlineshopApp')
.controller('EcommerceController', function ($scope, $state, Product) {
     single = function(image) {
                        var formData = new FormData();
                        formData.append('image', image, image.file.name);

                        this.$http.post('/upload', formData, {
                            headers: { 'Content-Type':  'application/json' },
                            transformRequest: angular.identity
                        }).success(function(data) {
                            //this.$scope.uploadedImgSrc = result.src;
                            //this.$scope.sizeInBytes = result.size;
                             var parsedJson = JSON.parse(data) ;
                              console.log(parsedJson.name);
                        })
                          .error(function(data)
                         {
                          console.log(data);
                         })
                        ;
                        Product.upload(image)
      };
  });*/
//# sourceMappingURL=ecommerce.controller.js.map
