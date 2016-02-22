(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('taskTable', function(){
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/table/view.html',
			controller: 'TodoTableController',
			controllerAs: 'TableCtrl'
		};
	});

})();