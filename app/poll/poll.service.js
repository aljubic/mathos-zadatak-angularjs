(function (angular) {
	'use strict';
	angular.module('appPoll')
		.service('pollService', ['$http', 
			function ($http) {
				var baseUrl = 'http://api.baasic.com/beta/mathos-ng/resources/pollquestion/';

				return {
					fetch: function () {
						return $http.get(baseUrl);
					},
					get: function (id) {
   						return $http.get(baseUrl + id);
					},
				};
			}]);
})(angular);