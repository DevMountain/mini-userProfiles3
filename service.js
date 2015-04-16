var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {


  this.getUsers = function() {
    var deferred = $q.defer();
    return $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response) {
    	response = response.data.data
    	for (var i = 0; i < response.length; i++) {
    		response[i].first_name = 'Ralf'
    	};
    	deferred.resolve(response)
    })
    return deffered.promise
  }
});