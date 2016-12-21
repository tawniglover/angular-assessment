angular.module('assessment').service('mainService', function($http) {

  this.getProducts = function () {
    return $http({
          method : "GET",
          url : "http://practiceapi.devmounta.in/products"
      }).then(function mySucces(response) {
          return response.data;
      });
  };
  this.getProduct = function (id) {
      return $http({
            method : "GET",
            url : "http://practiceapi.devmounta.in/products/" + id
        }).then(function mySucces(response) {
            return response.data;
        });
  };
});
