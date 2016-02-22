(function(){
	'use strict';

	var app = angular.module('app');

	app.controller( 'HeaderController', ['model', 'profileService', function(model, profileService){
		var vm = this;

		//model
		vm.model = model;

		//functions
		vm.warningLevel = warningLevel;
		vm.incompleteCount = incompleteCount;

		function incompleteCount(items){
			var count = 0;
			angular.forEach(items, function(item){
				if (!item.done) count++;
			});
			return count;
		}

		function warningLevel(items){
			var result =  incompleteCount(items) <= items.length/2 ? "label-success" : "label-warning";
			return result;
		}

	}]);

})();
