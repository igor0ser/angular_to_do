(function(){
	'use strict';

	var app = angular.module('app', ['ui.router']);

	app.value('model', {
		userName: 'John Doe',
		userPhoto: 'http://projects.nfstc.org/property_crimes/module04/images/pro_m04_t05.jpg',
		});

	app.run(function($http, model){
		$http
			.get("data/tasks.json")
			.success(function(data){
				for (var i = 0; i < data.length; i++){
					data[i].deadline = new Date(data.deadline);
				}
				model.items = data;
			});

		$http
			.get("data/users.json")
			.success(function(data){
				for (var i = 0; i < data.length; i++){
					data[i].deadline = new Date(data.deadline);
				}
				model.users = data;
			});

	});

})();