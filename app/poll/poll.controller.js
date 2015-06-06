angular.module('appPoll')
	.controller('MainController', ['$scope',
		function ($scope) {
			$scope.counter = {
				A : 0,
				B : 0,
				C : 0
			}
			
			$scope.vote = function (choice) {
				$scope.counter[choice] += 1;
			};
			
		}]);