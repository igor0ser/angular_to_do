(function(){
	'use strict';

	var app = angular.module('app', []);

	app.value('model', {
		userName: 'John Doe',
		userPhoto: 'http://projects.nfstc.org/property_crimes/module04/images/pro_m04_t05.jpg',
		items: [
			{
				"description": "Task1", 
				"responsible": "John Doe",
				"estHours": 1,
				"deadline": "2015-12-31T12:00:00.000Z",
				"done": false
			},
			{
				"description": "Task2", 
				"responsible": "Jane Doe",
				"estHours": 2,
				"deadline": "2015-12-30T12:00:00.000Z",
				"done": false
			}
		]
		});


	// app.run(['profileService', 'model', function(profileService, model){

	// 	//local storage or default data
	// 	profileService.get() && (model = profileService.get());

	// 	console.log(profileService.get());

	// }])



/*
//old
	app.run(function($http, model){
		$http
			.get("todo.json")
			.success(function(data){
				for (var i = 0; i < data.length; i++){
					data.deadline = new Date(data.deadline);
				}
				model.items = data;
			});
	});
*/
})();