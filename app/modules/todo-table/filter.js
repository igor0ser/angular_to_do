(function(){
	'use strict';
	angular.module('app').filter('checkedItems', checkedItems);


	function checkedItems(){
		return function(items, showComplete){
			if (!angular.isArray(items) || showComplete) return items;

			var resultArr = [];
			angular.forEach(items, function(item){
				if (item.done === false){
					resultArr.push(item);
				}
			});
			return resultArr;
		}
	}

})();