(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('todoHeader', function (){
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/todo-header/view.html',
			controller: 'todoHeaderController',
			controllerAs: 'HeaderCtrl'
		};
	});


})();