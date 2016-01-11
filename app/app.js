(function(){
	'use strict';

	var app = angular.module('app', []);

	app.value('model', {
		userName: 'John Doe',
		userPhoto: 'http://projects.nfstc.org/property_crimes/module04/images/pro_m04_t05.jpg',
		});

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

})();