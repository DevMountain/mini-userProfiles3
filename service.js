var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

	this.getUsers = function() {
		var dfd = $q.defer();

		$http({
			method: 'GET',
			url: 'http://reqr.es/api/users?page=1'
		}).then(function(response) {
			var parsedResponse = response.data.data;
			for (var i = 0; i < parsedResponse.length; i++) {
				parsedResponse[i].last_name = 'Simpson';
			};
			dfd.resolve(parsedResponse);
		});

		return dfd.promise;
	}

});
