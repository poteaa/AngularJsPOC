(function() {

	'use strict';
	
	angular
		.module('app.user')
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('user', {
					abstract: true,
					template: '<ui-view class="shuffle-animation"/>',
					url: '/user'
				})
				.state('user.list', {
					url: '/list',
					templateUrl: '/src/client/app/user/users.html',
                    controller: 'Users',
					controllerAs: 'vmUsers'
				})
				.state('user.detail', {
					url: '/{id:[0-9]*}',
					templateUrl: '/src/client/app/user/userDetail.html',
                    controller: 'UserDetail',
					controllerAs: 'vmUserDet'
				})
				.state('user.goals', {
					url: '/:id/goals',
					templateUrl: '/src/client/app/user/userGoals.html',
                    controller: 'UserGoals',
					controllerAs: 'vmUserGoals'
				});
			$urlRouterProvider.otherwise('/users/list');	
		}]);
		// .config(['$routeProvider', function($routeProvider) {
			// $routeProvider
				// .when('/users', {
					// templateUrl: '/src/client/app/user/users.html',
                    // controller: 'Users',
					// controllerAs: 'vmUsers'
				// })
				// .when('/users/:id', {
					// templateUrl: '/src/client/app/user/userDetail.html',
                    // controller: 'UserDetail',
					// controllerAs: 'vmUserDet'
				// })
				// .when('/users/:id/goals', {
					// templateUrl: '/src/client/app/user/userGoals.html',
                    // controller: 'UserGoals',
					// controllerAs: 'vmUserGoals'
				// });
		// }]);
})();