(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('EditTaskController', ['model', 'profileService', '$stateParams', '$state',
			function(model, profileService, $stateParams, $state){

		var vm = this;
		var id = +$stateParams['taskId'];
		//model
		vm.model = model;
		vm.task = model.items[id];
		vm.responsible = model.users[vm.task.responsible].name;



		//functions
		vm.saveItem = saveItem;
		vm.goToHomePage = goToHomePage;

		function saveItem(){
			vm.model.items[id] = vm.task;
			profileService.set(vm.model);
			goToHomePage();
		}

		function goToHomePage(){
			$state.go('home');
		}
	}]);
	
})();