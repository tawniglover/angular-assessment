angular.module('assessment').controller('mainCtrl', function($scope, $http, $stateParams) {
  $http({
        method : "GET",
        url : "http://practiceapi.devmounta.in/products"
    }).then(function mySucces(response) {
        $scope.myData = response.data;
    });
});
