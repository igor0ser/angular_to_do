(function(){
	'use strict';

	var app = angular.module('app');
	app.service('profileService', ['$window', function ($window) {
		var key = 'todoProfile';

		this.get = function(){
			var profileString = $window.localStorage.getItem(key);
			if (!profileString) return;

			var profileObject = angular.fromJson(profileString);
			for (var i = 0; i < profileObject.items.length; i++){
				profileObject.items[i].deadline = new Date(profileObject.items[i].deadline);
			}

			return profileObject;
		}

		this.set = function(profileObject){
			var profileString = angular.toJson(profileObject);
			$window.localStorage.setItem(key, profileString);
		}


		this.check = function(model){
			var profileFromLS = this.get();

			if (profileFromLS && model !== profileFromLS){
				model.userName = profileFromLS.userName;
				model.userPhoto = profileFromLS.userPhoto;
				model.items = profileFromLS.items;
			}

		}

	}])
})();