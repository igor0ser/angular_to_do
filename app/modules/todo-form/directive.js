(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('todoForm', function(){
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/todo-form/view.html',
			controller: 'todoFormController',
			controllerAs: 'FormCtrl'
		}
	});

})();
