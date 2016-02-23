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
			.when("/editTask/:taskId", {
				template: "<edit-task></edit-task>"
			})
			.when("/users", {
				template: "<user-list></user-list>"
			})
			.when("/user/:userId", {
				template: "<user></user>"
			})
			.when("/user/:userId/edit", {
				template: "<user-edit></user-edit>"
			})
			.when("/user/:userId/delete", {
				template: "<user-delete></user-delete>",
			})
			.otherwise("/");
		}


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