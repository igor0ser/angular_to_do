(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('todoHeader', function (){
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/header/view.html',
			controller: 'HeaderController',
			controllerAs: 'HeaderCtrl'
		};
	});


})();