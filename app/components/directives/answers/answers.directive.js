(function (angular) {
	'use strict';
	angular.module('appPoll')
		.directive('answers', [
			function () {
				return {
	                restrict: "EA",
	                replace: true,
					scope: {
	                    selectedQuestion: '=',
	                    selectedQuestionClick: '&',
						percent: '='
	                },
					templateUrl: 'app/components/directives/answers/answers.html' 	                
				}
			 }]);
})(angular);