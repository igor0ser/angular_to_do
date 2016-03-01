(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('UserEditController', ['model', 'profileService', '$stateParams', '$state',
			function(model, profileService, $stateParams, $state){

		var vm = this;
		var id = +$stateParams['userId'];

		//model
		vm.model = model;
		vm.user = model.users[id];
		vm.id = id;

		//functions
		vm.saveChanges = saveChanges;


		function saveChanges(){
			vm.model.users[id] = vm.user;
			profileService.set(vm.model);
			$state.go('user', {userId : id});
		}

	}]);
	
})();