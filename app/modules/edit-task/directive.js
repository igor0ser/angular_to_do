(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('editTask', function(){
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/edit-task/view.html',
			controller: 'EditTaskController',
			controllerAs: 'FormCtrl'
		}
	});

})();
