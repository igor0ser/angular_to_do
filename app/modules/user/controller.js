(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('UserController', ['model',  '$stateParams',
			function(model, $stateParams){

		var vm = this;
		var id = +$stateParams['userId'];

		//model
		vm.model = model;
		vm.user = model.users[id];
		vm.id = id;

	}]);
	
})();