(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('UserListController', ['model',  '$routeParams',
			function(model, $routeParams){

		var vm = this;


		//model
		vm.model = model;
		vm.users = model.users;
		console.log(vm.users);


	}]);
	
})();