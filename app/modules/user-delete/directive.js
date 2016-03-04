(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('userDelete', function(){
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/user-delete/view.html',
			controller: 'UserDeleteController',
			controllerAs: 'vm'
		}
	});

})();
