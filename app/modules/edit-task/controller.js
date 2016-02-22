(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('EditTaskController', ['model', 'profileService', '$routeParams', '$location',
			function(model, profileService, $routeParams, $location){

		var vm = this;
		var id = +$routeParams['taskId'];
		//model
		vm.model = model;
		vm.task = model.items[id];


		//functions
		vm.saveItem = saveItem;
		vm.goToHomePage = goToHomePage;

		function saveItem(){
			vm.model.items[id] = vm.task;
			profileService.set(vm.model);
			goToHomePage();

		}

		function goToHomePage(){
			$location.path('#/');
		}
	}]);
	
})();