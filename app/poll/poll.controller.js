(function (angular) {
	'use strict';
	angular.module('appPoll')
		.controller('MainController', ['$scope',
			function ($scope) {
				$scope.counter = {
					A : 0,
					B : 0,
					C : 0
				}
				$scope.calculated = {
					A : 0,
					B : 0,
					C : 0
				}
				
				$scope.vote = function (choice) {
					$scope.counter[choice] += 1;
					var sum = $scope.counter.A+$scope.counter.B+$scope.counter.C;
					$scope.calculated.A = $scope.counter.A / sum;
					$scope.calculated.B = $scope.counter.B / sum;
					$scope.calculated.C = $scope.counter.C / sum;
				};
				
			}]);
})(angular);