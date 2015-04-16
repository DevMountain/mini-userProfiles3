var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {
	var deferred = $q.defer();

  this.getUsers = function() {
    $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response){
    	response = response.data.data
    	for (var i = 0; i < response.length; i++) {
    		response[i].first_name = '(First Name Witheld)';
    	};
    	deferred.resolve(response)
    })
    return deferred.promise;
  }
});