(function(){
	'use strict';

	var app = angular.module('app')

	app.controller('TodoTableController', ['$scope', 'model', 'profileService', function ($scope, model, profileService){
		
		var _this = this;

		profileService.check(model);

		//model
		_this.model = model;
		//variables
		_this.showComplete = true;
		_this.sortField = null;
		_this.sortReverse = false;

		//functions
		_this.glyphicon = glyphicon;
		_this.remove = remove;
		_this.removeComplited = removeComplited;
		_this.sort = sort;
		_this.saveChanges = saveChanges;

		function glyphicon(fieldName){
			if (_this.sortField === fieldName){
				if (_this.sortReverse){
					return 'glyphicon glyphicon-chevron-up';
				} else {
					return 'glyphicon glyphicon-chevron-down'
				}
			}
		}

		function remove(i){
			_this.model.items.splice(i, 1);
			profileService.set(_this.model);
		}

		function removeComplited(){
			for (var i = _this.model.items.length-1; i >= 0; i--){
				if (_this.model.items[i].done){
					_this.model.items.splice(i, 1);
				}
			}
			profileService.set(_this.model);
		}

		function sort(fieldName){

			if (_this.sortField === fieldName){
				_this.sortReverse = !_this.sortReverse;
			} else {
				_this.sortField = fieldName;
				_this.sortReverse = false;
			}
		}

		function saveChanges(){
			profileService.set(_this.model);
		}

	}]);

})();