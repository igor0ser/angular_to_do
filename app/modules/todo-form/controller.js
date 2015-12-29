(function(){
	'use strict';

	var app = angular.module('app');
	
	app.controller('todoFormController', ['model', 'profileService', function(model, profileService){
		var _this = this;

		profileService.check(model);
		//model
		_this.model = model;
		//functions
		_this.addNewItem = addNewItem;
		_this.newItem = {}

		function addNewItem(){
			_this.model.items.push({
				description: _this.newItem.description,
				responsible: _this.newItem.responsible,
				estHours: _this.newItem.estHours,
				deadline: new Date(_this.newItem.deadline),
				done: false
			});

			profileService.set(_this.model);


			
			_this.newItem = {};

			angular.element('[name="todoForm"] .form-control').removeClass('ng-dirty');
		};
	}]);
	
})();