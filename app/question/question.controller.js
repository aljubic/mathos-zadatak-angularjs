(function (angular) {
	'use strict';
	angular.module('appPoll')
		.controller('QuestionController', ['$scope', '$routeParams', 'pollService',
			function ($scope, $routeParams, pollService) {
				$scope.selectedQuestion = [];
				$scope.sum=0;
				$scope.percent=0;
				
				$scope.vote = function(id) {
					for(var i in $scope.selectedQuestion.answers){
					 	if ($scope.selectedQuestion.answers[i].id===id){
					 		$scope.selectedQuestion.answers[i].count+=1;
							$scope.sum+=1;
					 	};
					};
					
					for(var i in $scope.selectedQuestion.answers){
						$scope.selectedQuestion.answers[i].percent=$scope.selectedQuestion.answers[i].count/$scope.sum;
					};
				};
				
				function fetch() {
					pollService.get($routeParams.id).success(function(data) {
						$scope.selectedQuestion = data;		
					});
				};
				fetch();
			}]);
})(angular);