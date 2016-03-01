(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('UserListController', ['model',
			function(model){
		var vm = this;

		//model
		vm.model = model;
		vm.users = model.users;
	}]);
	
})();