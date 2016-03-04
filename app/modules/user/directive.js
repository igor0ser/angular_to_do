(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('user', function(){
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/user/view.html',
			controller: 'UserController',
			controllerAs: 'vm'
		}
	});

})();
