(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('AddTaskController', ['model', 'profileService', function(model, profileService){
		var vm = this;

		//model
		vm.model = model;
		vm.newItem = {}
		//functions
		vm.addNewItem = addNewItem;


		function addNewItem(){
			vm.model.items.push({
				description: vm.newItem.description,
				responsible: vm.newItem.responsible,
				estHours: vm.newItem.estHours,
				deadline: new Date(vm.newItem.deadline),
				done: false
			});

			profileService.set(vm.model);
			vm.newItem = {};

			angular.element('[name="todoForm"] .form-control').removeClass('ng-dirty');
		};
	}]);
	
})();