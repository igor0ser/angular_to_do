(function(){
	'use strict';

	var app = angular.module('app');
	app.service('profileService', ['$window', function ($window) {
		var vm = this;
		var key = 'todoProfile';

		vm.check = check;
		vm.get = get;
		vm.set = set;

		function get(){
			var profileString = $window.localStorage.getItem(key);
			if (!profileString) return;

			var profileObject = angular.fromJson(profileString);
			for (var i = 0; i < profileObject.items.length; i++){
				profileObject.items[i].deadline = new Date(profileObject.items[i].deadline);
			}

			return profileObject;
		}

		function set(profileObject){
			var profileString = angular.toJson(profileObject);
			$window.localStorage.setItem(key, profileString);
		}


		function check(model){
			var profileFromLoc = vm.get();

			if (profileFromLoc && model !== profileFromLoc){
				model.userName = profileFromLoc.userName;
				model.userPhoto = profileFromLoc.userPhoto;
				model.items = profileFromLoc.items;
			}

		}

	}])
})();