(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('addTask', function(){
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/add-task/view.html',
			controller: 'AddTaskController',
			controllerAs: 'FormCtrl'
		}
	});

})();
