(function(){
	'use strict';

	var app = angular.module('app');

	app.controller( 'editProfileController', ['model', 'profileService', function(model, profileService){
		var vm = this;

		profileService.check(model);
		//model
		vm.model = model;
		vm.newProfile = {};
		//functions
		vm.editProfile = editProfile;



		function editProfile(){

			vm.newProfile.userName && (vm.model.userName = vm.newProfile.userName);
			vm.newProfile.userPhoto && (vm.model.userPhoto = vm.newProfile.userPhoto);

			profileService.set(vm.model);
			vm.newProfile = {};

			angular.element('.close').click();

		}

	}]);

})();
