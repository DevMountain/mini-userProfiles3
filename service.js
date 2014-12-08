var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {


  this.getUsers = function() {
    return $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    })
  }
});