(function(){
	'use strict';
	angular.module('app').filter('checkedItems', checkedItems);


	function checkedItems(){
		return function(items, showComplete){
			var resultArr = [];

			if (angular.isArray(items)){
				angular.forEach(items, function(item){
					if (item.done === false || showComplete === true){
						resultArr.push(item);
					}
				});
			} else {
				return items;
			}
		return resultArr;
		}
	}

})();