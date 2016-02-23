(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('UserDeleteController', ['model', 'profileService', '$routeParams', '$location',
			function(model, profileService, $routeParams, $location ){

		var vm = this;
		var id = +$routeParams['userId'];

		//model
		vm.model = model;
		vm.user = model.users[id];
		vm.id = id;
		vm.userTasks = getUserTasks(id, vm.model.items);


		console.log(vm.userTasks);


		//functions
		vm.deleteUser = deleteUser;


		function deleteUser(){
			vm.model.users.splice(id, 1);

			var tasks= vm.model.items;

			for (var i = 0; i < tasks.length; i++) {
				if (tasks[i].responsible > id){
					tasks[i].responsible--;
				}
			}

			profileService.set(vm.model);
			$location.path('#/users');
		}


		function getUserTasks(id, tasks){

			var x = 0;

			for (var i = 0; i < tasks.length; i++) {
				if (id === tasks[i].responsible){
					x++;
				}
			}
			
			return x;
		}

	}]);
	
})();