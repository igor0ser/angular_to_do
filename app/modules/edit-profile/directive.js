(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('editProfile', function (){

		return {
			replace: true,
			restrict: 'E',
			templateUrl: '/modules/edit-profile/view.html',
			controller: 'EditProfileController',
			controllerAs: 'vm'
		};
	});


})();