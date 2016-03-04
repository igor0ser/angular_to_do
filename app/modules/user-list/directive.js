(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('userList', function(){
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/user-list/view.html',
			controller: 'UserListController',
			controllerAs: 'vm'
		}
	});

})();
