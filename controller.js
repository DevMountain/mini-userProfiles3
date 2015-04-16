var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    $scope.users= mainService.getUsers().then(function(returnedData) {
      $scope.users = returnedData;
    });
  }

  $scope.getUsers();

});