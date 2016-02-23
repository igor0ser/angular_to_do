(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('AddTaskController', ['model', 'profileService', function(model, profileService){
		var vm = this;

		//model
		vm.model = model;
		vm.newItem = {};
		//functions
		vm.addNewItem = addNewItem;
		vm.responsibleName = '';


		function addNewItem(){
			var responsibleId;
			var users = model.users;
			for (var i = 0; i < users.length; i++){
				if (users[i].name === vm.responsibleName){
					responsibleId = i;
				}
			}
			console.log(responsibleId);
			vm.model.items.push({
				description: vm.newItem.description,
				responsible: responsibleId,
				estHours: vm.newItem.estHours,
				deadline: new Date(vm.newItem.deadline),
				done: false
			});

			profileService.set(vm.model);
			vm.newItem = {};
			vm.responsibleName = {};

			angular.element('[name="todoForm"] .form-control').removeClass('ng-dirty');
		};
	}]);
	
})();