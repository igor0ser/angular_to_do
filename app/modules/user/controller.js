(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('UserController', ['model',  '$routeParams',
			function(model, $routeParams){

		var vm = this;
		var id = +$routeParams['userId'];

		//model
		vm.model = model;
		vm.user = model.users[id];
		vm.id = id;

	}]);
	
})();