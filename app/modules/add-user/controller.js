(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('AddUserController', ['model', 'profileService', function(model, profileService){
		var vm = this;

		//model
		vm.model = model;
		vm.newUser = {};
		//functions
		vm.addNewUser = addNewUser;


		function addNewUser(){
			vm.model.users.push({
				name: vm.newUser.name,
			});

			profileService.set(vm.model);
			vm.newUser = {};

			angular.element('[name="userForm"] .form-control').removeClass('ng-dirty');
		};
	}]);
	
})();