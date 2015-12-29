(function(){
	'use strict';

	var app = angular.module('app');

	app.controller( 'todoHeaderController', ['model', 'profileService', function(model, profileService){
		var _this = this;

		profileService.check(model);
		//model
		_this.model = model;	


		//functions
		_this.warningLevel = warningLevel;
		_this.incompleteCount = incompleteCount;

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
