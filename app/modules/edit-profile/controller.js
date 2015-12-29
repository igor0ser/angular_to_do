(function(){
	'use strict';

	var app = angular.module('app');

	app.controller( 'editProfileController', ['model', 'profileService', function(model, profileService){
		var _this = this;

		profileService.check(model);
		//model
		_this.model = model;
		_this.newProfile = {};
		//functions
		_this.editProfile = editProfile;



		function editProfile(){

			_this.newProfile.userName && (_this.model.userName = _this.newProfile.userName);
			_this.newProfile.userPhoto && (_this.model.userPhoto = _this.newProfile.userPhoto);

			profileService.set(_this.model);
			_this.newProfile = {};

			angular.element('.close').click();

		}

	}]);

})();
