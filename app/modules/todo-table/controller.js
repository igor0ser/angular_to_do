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
		_this.firstTaskShown = 0;
		_this.showTasksPerPage = 10;
		_this.searchQuery = '';
		_this.searchObj = {};

		//functions
		_this.glyphicon = glyphicon;
		_this.remove = remove;
		_this.removeComplited = removeComplited;
		_this.sort = sort;
		_this.saveChanges = saveChanges;
		_this.search = search;



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
			console.log(1 + fieldName);
			if (_this.sortField === fieldName){
				_this.sortReverse = !_this.sortReverse;
			} else {
				_this.sortField = fieldName;
				_this.sortReverse = false;
			}

			console.log(2+_this.sortField);
			console.log('3'+_this.sortReverse);
		}

		function saveChanges(){
			profileService.set(_this.model);
		}

		function search(task) {
			if (_this.searchQuery === '') return true;

			var firstFlag = angular.lowercase(task.description).indexOf(angular.lowercase(_this.searchQuery)) !== -1;
			var secondFlag = angular.lowercase(task.responsible).indexOf(angular.lowercase(_this.searchQuery)) !== -1;

			return firstFlag || secondFlag;
		}

	}]);

})();