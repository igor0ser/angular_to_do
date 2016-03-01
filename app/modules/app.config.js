(function() {

	angular
		.module('app')
		.config(configAppRouter);


	function configAppRouter($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				template: '<task-table />'
			})
			.state('addTask', {
				url: '/addTask',
				template: '<add-task />'
			})
			.state('userList', {
				url: '/users',
				template: '<user-list />'
			})
			.state('addUser', {
				url: '/addUser',
				template: '<add-user />'
			})
			.state('editTask', {
				url: '/editTask/:taskId',
				template: '<edit-task />'
			})
			.state('user', {
				url: '/user/:userId',
				template: '<user />'
			})
				.state('user.edit', {
					url: '/edit',
					template: '<user-edit />'
				})
				.state('user.delete', {
					url: '/delete',
					template: '<user-delete />'
				});
		}

})();