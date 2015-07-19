(function (angular) {
	'use strict';
	angular.module('appPoll').filter('statistics', function() {
		return function(input) {
			if (input !== undefined && input !== 0) {
				return (input*100).toFixed(2)+"%";
			}
			return '0.00%';
		};
	});	
})(angular);