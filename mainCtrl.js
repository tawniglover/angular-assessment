angular.module('assessment').controller('mainCtrl', function($scope, mainService, $stateParams) {

  mainService.getProducts().then(function (response) {
    $scope.myData = response;
  });
  if ($stateParams.id) {
    mainService.getProduct($stateParams.id).then(function (response) {
      $scope.product = response;
    });
  }
});
