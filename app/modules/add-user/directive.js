(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('addUser', function(){
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/add-user/view.html',
			controller: 'AddUserController',
			controllerAs: 'vm'
		}
	});

})();
