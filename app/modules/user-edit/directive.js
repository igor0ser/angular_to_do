(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('userEdit', function(){
		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/user-edit/view.html',
			controller: 'UserEditController',
			controllerAs: 'UserCtrl'
		}
	});

})();
