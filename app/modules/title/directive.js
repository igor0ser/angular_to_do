(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('titleProfile', function (){

		return {
			replace: true,
			restrict: 'E',
			template: "<title>{{EditProfileCtrl.model.userName}}'s TO DO List</title>",
			controller: 'EditProfileController',
			controllerAs: 'EditProfileCtrl'
		};
	});


})();