(function() {

	angular
		.module("app")
		.config(configAppRouter)
		.run(runApp);


	function configAppRouter($routeProvider, $locationProvider) {
		$routeProvider
			.when("/", {
				template: "<task-table></task-table>",
			})
			.when("/addTask", {
				template: "<add-task></add-task>"
			})
			.when("/addUser", {
				template: "<add-user></add-user>"
			})
			.otherwise("/");


		}
/*			})
			.when("/addTask", {
				templateUrl: "./tasks/addTask.html",
				controller: "addTask",
				controllerAs: "vm"
			})
			.when("/users", {
				templateUrl: "./users/userList.html",
				controller:  "userList",
				controllerAs: "vm",
				nav: 2
			})
			.when("/addUser", {
				templateUrl: "./users/addUserGeneral.html",
				controller:  "addUser",
				controllerAs: "vm"
			})
			.when("/addUser/Cost", {
				templateUrl: "./users/addUserCost.html",
				controller:  "addUser",
				controllerAs: "vm"
			})
			.when("/addUser/Notes", {
				templateUrl: "./users/addUserNotes.html",
				controller:  "addUser",
				controllerAs: "vm"
			})
			.when("/editUser", {
				templateUrl: "./users/editUser.html",
				controller:  "editUser",
				controllerAs: "vm"
			})
			//task 2
			.when("/userTasks/:userId", {
				templateUrl: "./userTasks/userTaskList.html",
				controller:  "userTaskList",
				controllerAs: "vm"
			})
			.otherwise("/");*/

			function runApp($rootScope, $route) {
				$rootScope.$on("$routeChangeSuccess", function(event, next){
					var currentURL = window.location.hash.slice(1);
					var anchors = angular.element('.nav-tabs a');
					anchors.parent().removeClass('active');

					for (var i = 0; i < anchors.length; i++){
						var href = anchors[i].getAttribute('href').slice(1);
						if (href === currentURL) {
							angular.element(anchors[i]).parent().addClass('active');
						}
					}
				});
			}



})();