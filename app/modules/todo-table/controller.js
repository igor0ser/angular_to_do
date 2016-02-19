(function(){
	'use strict';

	var app = angular.module('app')

	app.controller('TodoTableController', ['$scope', '$http', 'model', 'profileService', function ($scope, $http, model, profileService){
		
		var vm = this;

		profileService.check(model);

		//model
		vm.model = model;
		//variables
		vm.showComplete = true;
		vm.sortField = null;
		vm.sortReverse = false;
		vm.firstTaskShown = 0;
		vm.showTasksPerPage = '10';
		vm.searchQuery = '';
		vm.searchObj = {};

		//functions
		vm.glyphicon = glyphicon;
		vm.remove = remove;
		vm.removeComplited = removeComplited;
		vm.sort = sort;
		vm.saveChanges = saveChanges;
		vm.search = search;
		vm.prevPage = prevPage;
		vm.nextPage = nextPage;
		vm.loadFromServer = loadFromServer;


		function loadFromServer(){
			$http
				.get("todoAnother.json")
				.success(function(data){
					var result = data;
					for (var i = 0; i < result.length; i++){
						result[i].deadline = new Date(result.deadline);
						model.items.unshift(result[i]);
					}
					vm.saveChanges();
				})
				.error(function(data){
					alert('Some error in http request happened');
				});

			console.log($http
				.get("todoAnother.json"));
		}



		function glyphicon(fieldName){
			if (vm.sortField === fieldName){
				if (vm.sortReverse){
					return 'glyphicon glyphicon-chevron-up';
				} else {
					return 'glyphicon glyphicon-chevron-down';
				}
			}
		}

		function remove(i){
			vm.model.items.splice(i, 1);
			vm.saveChanges();
		}

		function removeComplited(){
			for (var i = vm.model.items.length-1; i >= 0; i--){
				if (vm.model.items[i].done){
					vm.model.items.splice(i, 1);
				}
			}
			vm.saveChanges();
		}

		function saveChanges(){
			profileService.set(vm.model);
		}

		function sort(fieldName){
			if (vm.sortField === fieldName){
				vm.sortReverse = !vm.sortReverse;
			} else {
				vm.sortField = fieldName;
				vm.sortReverse = false;
			}
		}

		function search(task) {
			if (vm.searchQuery === '') return true;

			var firstFlag = angular.lowercase(task.description).indexOf(angular.lowercase(vm.searchQuery)) !== -1;
			var secondFlag = angular.lowercase(task.responsible).indexOf(angular.lowercase(vm.searchQuery)) !== -1;

			return firstFlag || secondFlag;
		}

		function prevPage() {
			vm.firstTaskShown = (vm.firstTaskShown - +vm.showTasksPerPage) < 0 ? 0 : 
								(vm.firstTaskShown - +vm.showTasksPerPage);
		}

		function nextPage() {
			vm.firstTaskShown = vm.firstTaskShown + +vm.showTasksPerPage;
		}
	}]);

})();